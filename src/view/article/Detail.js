import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Form, Col, Button, Modal, message, TreeSelect} from 'antd';

import NHeader from '../../component/NHeader';
import NCol from '../../component/NCol';
import NInputText from '../../component/NInputText';
import NInputTextArea from '../../component/NInputTextArea';
import NInputNumber from '../../component/NInputNumber';
import NSwitch from '../../component/NSwitch';
import NSelect from '../../component/NSelect';
import NInputHtml from '../../component/NInputHtml';
import NInputMedia from '../../component/NInputMedia';
import NTreeSelect from '../../component/NTreeSelect';
import NInputDate from '../../component/NInputDate';
import http from "../../common/http";

import constant from '../../common/constant';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isEdit: false,
            systemVersion: ''
        };
    }

    componentDidMount() {
        if (this.props.route.path.indexOf('/edit') > -1) {
            this.setState({
                isEdit: true
            });

            this.handleLoad();
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleLoad() {
        if (this.state.isLoad) {
            return;
        }

        this.setState({
            isLoad: true
        });

        let values = {};
        values.articleId = this.props.params.articleId;

        http.request({
            url: '/article/admin/find',
            data: values,
            success: function (data) {
                let values = {};

                let articleCover = [];
                if (data.articleCover !== null) {
                    articleCover.push(data.articleCover);
                }
                this.refs.articleCover.handleSetValue(articleCover);
                let articleMediaList = [];
                if (data.articleMediaList && data.articleMediaList.length > 0) {
                    articleMediaList = data.articleMediaList;
                }
                this.refs.articleMediaList.handleSetValue(articleMediaList);
                if (data.articleContent) {
                    this.refs.articleContent.handleSetValue(data.articleContent);
                }

                this.props.form.setFieldsValue(values);

                this.setState({
                    systemVersion: data.systemVersion

                });
            }.bind(this),
            complete: function () {
                this.setState({
                    isLoad: false
                });

            }.bind(this)
        });
    }

    handleSubmit() {
        if (this.state.isLoad) {
            return;
        }

        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }

            this.setState({
                isLoad: true
            });

            let articleArticleCategoryList = [];
            articleArticleCategoryList.push({
                articleCategoryId: values.articlePrimaryCategoryId,
                articleCategoryIsPrimary: true
            });
            if (values.articleSecondaryCategoryIds && values.articleSecondaryCategoryIds.length > 0) {
                values.articleSecondaryCategoryIds.forEach((id) =>
                    values.articlePrimaryCategoryId != id ?
                    articleArticleCategoryList.push({
                        articleCategoryId: id,
                        articleCategoryIsPrimary: false
                    })
                    :
                    null
                )
            }
            delete values.articlePrimaryCategoryId;
            delete values.articleSecondaryCategoryIds;
            values.articleArticleCategoryList = articleArticleCategoryList;
            if (this.state.isEdit) {
                values.articleId = this.props.params.articleId;
            }
            values.systemVersion = this.state.systemVersion;

            http.request({
                url: '/article/admin/' + (this.state.isEdit ? 'update' : 'save'),
                data: values,
                success: function (data) {
                    if (data) {
                        message.success(constant.success);

                        this.handleBack();
                    } else {
                        message.error(constant.failure);
                    }
                }.bind(this),
                complete: function () {
                    this.setState({
                        isLoad: false
                    });
                }.bind(this)
            });
        });
    }

    handleDelete() {
        if (this.state.isLoad) {
            return;
        }

        Modal.confirm({
            title: '确定要删除该数据吗?',
            content: '数据删除之后就不能恢复了',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: function () {
                this.setState({
                    isLoad: true
                });

                let values = {};
                values.articleId = this.props.params.articleId;
                values.systemVersion = this.state.systemVersion;

                http.request({
                    url: '/article/admin/delete',
                    data: values,
                    success: function (data) {
                        if (data) {
                            message.success(constant.success);

                            this.handleBack();
                        } else {
                            message.error(constant.failure);
                        }
                    }.bind(this),
                    complete: function () {
                        this.setState({
                            isLoad: false
                        });

                    }.bind(this)
                });
            }.bind(this),
            onCancel() {

            }
        });
    }

    handleReset() {
        this.props.form.resetFields();

    }

    handleBack() {
        this.props.history.goBack();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        let buttonList = [{
            name: '返回',
            icon: '',
            isPrimary: true,
            click: this.handleBack.bind(this)
        }];


        let secondButtonList = [{
            name: '删除',
            icon: '',
            isPrimary: false,
            click: this.handleDelete.bind(this)
        }];

        let breadcrumbList = [{
            name: '文章管理',
            url: '/article/index'
        }, {
            name: '文章信息',
            url: ''
        }];

        return (
            <div>
                <NHeader name={'文章表单'} isEdit={this.state.isEdit} breadcrumbList={breadcrumbList} buttonList={buttonList} secondButtonList={secondButtonList}/>
                <div className="page-content">
                    <Form>
                        <NTreeSelect
                            id="articlePrimaryCategoryId"
                            label="文章主分类"
                            required={true}
                            allowClear={true}
                            showSearch={true}
                            treeDefaultExpandAll={true}
                            dispatch={this.props.dispatch}
                            store={this.props.article}
                            storeName="article"
                            storeKey="articleCategoryList"
                            remoteOptionConfig={{
                                key: 'articleCategoryId',
                                value: 'articleCategoryName',
                                url: '/article/category/admin/all/tree/list',
                                params: {}
                            }}
                            getFieldDecorator={getFieldDecorator}
                        />
                        <NTreeSelect
                            id="articleSecondaryCategoryIds"
                            label="文章副分类"
                            allowClear={true}
                            showSearch={true}
                            multiple={true}
                            treeCheckable={true}
                            treeDefaultExpandAll={true}
                            dispatch={this.props.dispatch}
                            store={this.props.article}
                            storeName="article"
                            storeKey="articleCategoryList"
                            remoteOptionConfig={{
                                key: 'articleCategoryId',
                                value: 'articleCategoryName',
                                url: '/article/category/admin/all/tree/list',
                                params: {}
                            }}
                            getFieldDecorator={getFieldDecorator}
                        />
                        <NInputText id="articleTitle"
                                    label="文章标题"
                                    required={true}
                                    getFieldDecorator={getFieldDecorator}
                                    onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NInputText id="articleAuthor"
                                    label="文章作者"
                                    required={false}
                                    getFieldDecorator={getFieldDecorator}
                                    onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NInputText id="articleSource"
                                    label="文章来源"
                                    required={false}
                                    getFieldDecorator={getFieldDecorator}
                                    onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NInputMedia id="articleCover"
                                     label="文章封面"
                                     type="MEDIA"
                                     returnLimit={1}
                                     supportUploadTypes={['image', 'cropImage']}
                                     getFieldDecorator={getFieldDecorator}
                                     ref="articleCover"
                        />
                        <NInputMedia id="articleMediaList"
                                     label="文章多媒体"
                                     type="MEDIA"
                                     returnLimit={0}
                                     supportUploadTypes={['image', 'cropImage', 'video']}
                                     getFieldDecorator={getFieldDecorator}
                                     ref="articleMediaList"
                        />
                        <NInputTextArea id="articleSummary"
                                        label="文章摘要"
                                        getFieldDecorator={getFieldDecorator}
                                        onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NInputTextArea id="articleTags"
                                        label="文章标签"
                                        getFieldDecorator={getFieldDecorator}
                                        onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NInputTextArea id="articleKeywords"
                                        label="文章关键字"
                                        getFieldDecorator={getFieldDecorator}
                                        onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NSwitch id="articleIsOuterLink"
                                 label={"文章是否外部链接"}
                                 checkedChildren={'是'}
                                 unCheckedChildren={'否'}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NInputText id="articleOuterLink"
                                    label="文章外部链接"
                                    getFieldDecorator={getFieldDecorator}
                                    onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NSwitch id="articleIsAllowComment"
                                 label={"文章是否允许评论"}
                                 checkedChildren={'是'}
                                 unCheckedChildren={'否'}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NSwitch id="articleIsTop"
                                 label={"文章是否置顶"}
                                 checkedChildren={'是'}
                                 unCheckedChildren={'否'}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NSelect id="articleTopLevel"
                                 label="文章置顶级别"
                                 staticOptionList={[{
                                    key: '',
                                    value: '无级别'
                                 }, {
                                    key: 1,
                                    value: '级别1'
                                 }, {
                                    key: 2,
                                    value: '级别2'
                                 }, {
                                    key: 3,
                                    value: '级别3'
                                 }, {
                                    key: 4,
                                    value: '级别4'
                                 }, {
                                    key: 5,
                                    value: '级别5'
                                 }, {
                                    key: 6,
                                    value: '级别6'
                                 }, {
                                    key: 7,
                                    value: '级别7'
                                 }, {
                                    key: 8,
                                    value: '级别8'
                                 }, {
                                    key: 9,
                                    value: '级别9'
                                 }, {
                                    key: 10,
                                    value: '级别10'
                                 }]}
                                 allowClear={true}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NInputDate id="articleTopEndTime"
                                    type="DatePicker"
                                    showTime={true}
                                    format={"YYYY-MM-DD HH:mm:ss"}
                                    label="文章置顶截止时间"
                                    getFieldDecorator={getFieldDecorator}
                        />
                        <NInputNumber id="articleWeight"
                                      label="文章权重"
                                      min={0}
                                      max={99999}
                                      step={1}
                                      required={true}
                                      getFieldDecorator={getFieldDecorator}
                                      onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NInputHtml id="articleContent"
                                    label="文章内容"
                                    getFieldDecorator={getFieldDecorator}
                                    ref="articleContent"
                        />
                        <NSwitch id="articleIsDraft"
                                 label={"文章是否草稿"}
                                 checkedChildren={'是'}
                                 unCheckedChildren={'否'}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NSwitch id="articleIsRequireAudit"
                                 label={"文章是否需要审核"}
                                 checkedChildren={'是'}
                                 unCheckedChildren={'否'}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NInputNumber id="articleSort"
                                      label="文章排序"
                                      min={0}
                                      max={99999}
                                      step={1}
                                      required={true}
                                      getFieldDecorator={getFieldDecorator}
                                      onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <Row>
                            <NCol>
                                <Col xs={{span: 24}}
                                     sm={{span: 17, offset: 4}}
                                     md={{span: 17, offset: 4}}
                                     lg={{span: 17, offset: 4}}
                                     xl={{span: 17, offset: 4}}
                                >
                                    <Button type="primary"
                                            icon="check-circle"
                                            loading={this.state.isLoad}
                                            className="page-button-left"
                                            onClick={this.handleSubmit.bind(this)}
                                    >
                                        提交
                                    </Button>
                                    <Button icon="reload"
                                            loading={this.state.isLoad}
                                            onClick={this.handleReset.bind(this)}
                                    >
                                        重置
                                    </Button>
                                </Col>
                            </NCol>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

Detail = Form.create()(Detail);

export default connect(({article}) => ({article}))(Detail);