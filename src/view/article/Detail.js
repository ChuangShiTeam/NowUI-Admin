import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Form, Col, Button, Modal, message} from 'antd';
import moment from 'moment';

import NHeader from '../../component/NHeader';
import NCol from '../../component/NCol';
import NInputText from '../../component/NInputText';
import NInputTextArea from '../../component/NInputTextArea';
import NInputNumber from '../../component/NInputNumber';
import NSwitch from '../../component/NSwitch';
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
            url: '/article/admin/v1/find',
            data: values,
            success: function (data) {
                // let articlePrimaryCategoryId = '';
                // let articleSecondaryCategoryIds = null;
                // if (data.articleArticleCategoryList && data.articleArticleCategoryList.length > 0) {
                //     articleSecondaryCategoryIds = [];
                //     data.articleArticleCategoryList.forEach((articleArticleCategory) => {
                //         if (articleArticleCategory.articleCategoryIsPrimary) {
                //             articlePrimaryCategoryId = articleArticleCategory.articleCategoryId
                //         } else {
                //             articleSecondaryCategoryIds.push(articleArticleCategory.articleCategoryId);
                //         }
                //     });
                // }
                // let articleMedia = [];
                // if (data.articleMedia) {
                //     articleMedia.push(data.articleMedia);
                // }
                this.props.form.setFieldsValue({
                    articleTitle: data.articleTitle,
                    articleAuthor: data.articleAuthor,
                    articleSource: data.articleSource,
                    articleSummary: data.articleSummary,
                    articleContent: data.articleContent,
                    articleTags: data.articleTags,
                    articleKeywords: data.articleKeywords,
                    articleOuterLink: data.articleOuterLink,
                    articleIsOuterLink: data.articleIsOuterLink,
                    articleIsAllowComment: data.articleIsAllowComment,
                    articlePublishTime: moment(data.articlePublishTime),
                    articleIsTop: data.articleIsTop,
                    articleTopLevel: data.articleTopLevel,
                    articleTopEndTime: moment(data.articleTopEndTime),
                    articleIsDraft: data.articleIsDraft,
                    articleWeight: data.articleWeight,
                    articleIsRequireAudit: data.articleIsRequireAudit,
                    articleIsRecommend: data.articleIsRecommend,
                    articleSort: data.articleSort,
                    articleMedia: data.articleMedia,
                    articleMediaList: data.articleMediaList,
                    articlePrimaryArticleCategory: data.articlePrimaryArticleCategory,
                    articleSecondaryArticleCategoryList: data.articleSecondaryArticleCategoryList
                });

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

            if (values.articleMedia && values.articleMedia.length > 0) {
                values.articleMediaId = values.articleMedia[0].fileId;
                values.articleMediaType = 'IMAGE';
            }

            if (values.articleMediaList) {
                values.articleMediaList = values.articleMediaList.map((articleMedia, index) => (articleMedia.articleMediaSort = index));
            }

            if (values.articleTopEndTime) {
                values.articleTopEndTime = moment(values.articleTopEndTime).format('YYYY-MM-DD HH:mm:ss');
            }

            if (values.articlePublishTime) {
                values.articlePublishTime = moment(values.articlePublishTime).format('YYYY-MM-DD HH:mm:ss');
            }

            if (this.state.isEdit) {
                values.articleId = this.props.params.articleId;
            }
            values.systemVersion = this.state.systemVersion;

            http.request({
                url: '/article/admin/v1/' + (this.state.isEdit ? 'update' : 'save'),
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

    handleReplace() {
        this.setState({
            isLoad: true
        });

        let values = {};
        values.articleId = this.props.params.articleId;

        http.request({
            url: '/article/admin/v1/synchronize',
            data: values,
            success: function (data) {
                if (data) {
                    message.success(constant.success);


                    this.setState({
                        isLoad: false
                    }, function () {
                        this.handleLoad()
                    }.bind(this));
                } else {
                    message.error(constant.failure);
                }
            }.bind(this),
            complete: function () {

            }.bind(this)
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
                    url: '/article/admin/v1/delete',
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
            name: '更新',
            icon: 'reload',
            isPrimary: false,
            click: this.handleReplace.bind(this)
        }, {
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
                <NHeader name={'文章表单'} isEdit={this.state.isEdit} breadcrumbList={breadcrumbList}
                         buttonList={buttonList} secondButtonList={secondButtonList}/>
                <div className="page-content">
                    <Form>
                        <NTreeSelect
                            id="articlePrimaryArticleCategory"
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
                                url: '/article/category/admin/v1/all/tree/list',
                                params: {}
                            }}
                            returnValueName={'articleCategoryId'}
                            returnLabelName={'articleCategoryName'}
                            returnObject={{
                                articleCategoryIsPrimary: true
                            }}
                            getFieldDecorator={getFieldDecorator}
                        />
                        <NTreeSelect
                            id="articleSecondaryArticleCategoryList"
                            label="文章副分类"
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
                                url: '/article/category/admin/v1/all/tree/list',
                                params: {}
                            }}
                            returnValueName={'articleCategoryId'}
                            returnLabelName={'articleCategoryName'}
                            returnObject={{
                                articleCategoryIsPrimary: false
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
                        <NInputMedia id="articleMedia"
                                     label="文章主媒体"
                                     required={true}
                                     type="MEDIA"
                                     returnLimit={1}
                                     supportUploadTypes={['image', 'cropImage']}
                                     getFieldDecorator={getFieldDecorator}
                        />
                        <NInputMedia id="articleMediaList"
                                     label="文章副媒体"
                                     type="MEDIA"
                                     returnLimit={0}
                                     supportUploadTypes={['image', 'cropImage', 'video']}
                                     getFieldDecorator={getFieldDecorator}
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
                        <NInputNumber id="articleTopLevel"
                                      label="文章置顶级别"
                                      min={0}
                                      max={99999}
                                      step={1}
                                      required={true}
                                      getFieldDecorator={getFieldDecorator}
                                      onPressEnter={this.handleSubmit.bind(this)}
                        />
                        <NInputDate id="articleTopEndTime"
                                    label="文章置顶截止时间"
                                    type="DatePicker"
                                    showTime={true}
                                    format={"YYYY-MM-DD HH:mm:ss"}
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
                        />
                        <NSwitch id="articleIsDraft"
                                 label={"文章是否草稿"}
                                 checkedChildren={'是'}
                                 unCheckedChildren={'否'}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NInputDate id="articlePublishTime"
                                    required={true}
                                    label="文章发布时间"
                                    type="DatePicker"
                                    showTime={true}
                                    initialValue={moment()}
                                    format={"YYYY-MM-DD HH:mm:ss"}
                                    getFieldDecorator={getFieldDecorator}
                        />
                        <NSwitch id="articleIsRequireAudit"
                                 label={"文章是否需要审核"}
                                 checkedChildren={'是'}
                                 unCheckedChildren={'否'}
                                 getFieldDecorator={getFieldDecorator}
                        />
                        <NSwitch id="articleIsRecommend"
                                 label={"文章是否推荐"}
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