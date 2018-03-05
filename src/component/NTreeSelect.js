import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, TreeSelect} from 'antd';

import http from '../common/http';

class Children extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: [],
            isLoad: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            if (typeof (nextProps.value) !== 'undefined') {
                let value = nextProps.value;

                if (this.state.isLoad) {
                    return;
                }

                this.setState({
                    isLoad: true
                });

                if (this.props.multiple) {
                    let array = [];
                    let array2 = [];

                    for (let i = 0; i < value.length; i++) {
                        let item = {};

                        if (typeof (value[i].value) === 'undefined') {
                            item['value'] = value[i][this.props.returnValueName];
                        }

                        if (typeof (value[i].label) === 'undefined') {
                            item['label'] = value[i][this.props.returnLabelName];
                        }

                        array.push(item);

                        array2.push(Object.assign(this.props.returnObject, value[i]));
                    }

                    this.setState({
                        value: array
                    });

                    const onChange = this.props.onChange;
                    if (onChange) {
                        onChange(array2);
                    }
                } else {
                    let item = {};

                    if (typeof (value['value']) === 'undefined') {
                        item['value'] = value[this.props.returnValueName];
                    } else {
                        item['value'] = value.value;
                    }

                    if (typeof (value['label']) === 'undefined') {
                        item['label'] = value[this.props.returnLabelName];
                    } else {
                        item['value'] = value.label;
                    }

                    this.setState({
                        value: item
                    });

                    const onChange = this.props.onChange;
                    if (onChange) {
                        onChange(Object.assign(this.props.returnObject, value));
                    }
                }
            }
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleChange(value) {
        if (typeof (value) === 'undefined') {
            return;
        }

        const onChange = this.props.onChange;
        if (onChange) {
            if (this.props.multiple) {
                let array = [];

                for (let i = 0; i < value.length; i++) {
                    let item = this.props.returnObject;

                    if (this.props.returnValueName !== '') {
                        item[this.props.returnValueName] = value[i].value;
                    }

                    if (this.props.returnLabelName !== '') {
                        item[this.props.returnLabelName] = value[i].label;
                    }

                    array.push(item);
                }

                onChange(array);
            } else {
                let item = this.props.returnObject;

                if (this.props.returnValueName !== '') {
                    item[this.props.returnValueName] = value.value;
                }

                if (this.props.returnLabelName !== '') {
                    item[this.props.returnLabelName] = value.label;
                }

                onChange(item);
            }
        }

        this.setState({
            value: value
        });
    }

    render() {
        return (
            <TreeSelect
                value={this.state.value}
                allowClear={this.props.allowClear}
                showSearch={this.props.showSearch}
                size={this.props.size}
                multiple={this.props.multiple}
                treeCheckable={this.props.treeCheckable}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                treeNodeFilterProp={'title'}
                showCheckedStrategy={this.props.showCheckedStrategy}
                dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                treeData={this.props.treeData}
                placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
                treeDefaultExpandAll={this.props.treeDefaultExpandAll}
                labelInValue={true}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}

Children.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    message: PropTypes.string,
    size: PropTypes.string,
    multiLine: PropTypes.bool,
    allowClear: PropTypes.bool,
    showCheckedStrategy: PropTypes.oneOf([TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD]),
    showSearch: PropTypes.bool,
    treeDefaultExpandAll: PropTypes.bool,
    treeCheckable: PropTypes.bool,
    multiple: PropTypes.bool,
    initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    treeData: PropTypes.array,
    returnValueName: PropTypes.string,
    returnLabelName: PropTypes.string,
    returnObject: PropTypes.object
};

Children.defaultProps = {
    label: '',
    placeholder: '',
    required: false,
    message: '',
    size: 'default',
    multiLine: false,
    allowClear: false,
    showSearch: false,
    treeDefaultExpandAll: false,
    multiple: false,
    treeCheckable: false,
    initialValue: null,
    returnValueName: '',
    returnLabelName: '',
    returnObject: {}
};

class NTreeSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        if (this.props.store[this.props.storeKey] && this.props.store[this.props.storeKey].length === 0) {
            let {url, params, key, value} = this.props.remoteOptionConfig;
            if (url) {
                this.handleLoadTreeDataList(url, params, key, value);
            }

        }

        const onChange = this.props.onChange;
        if (onChange) {
            // let array = [];
            // for (let i = 0; i < value.length; i++) {
            //     value[i].push({
            //         fileId: array[i].value,
            //         filePath: array[i].label
            //     })
            // }

            // onChange([{
            //     aaa: '123'
            // }]);
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleLoadTreeDataList(url, params, key, value) {
        http.request({
            url: url,
            data: params,
            success: function (data) {
                if (data) {
                    let storeData = {};
                    storeData[this.props.storeKey] = this.handleTreeDataList(data, key, value);
                    this.props.dispatch({
                        type: this.props.storeName,
                        data: storeData
                    });
                }
            }.bind(this),
            error: function () {

            },
            complete: function () {
            }
        });
    }

    handleTreeDataList(treeDataList, key, value) {
        let newTreeDataList = [];
        if (treeDataList && treeDataList.length > 0) {
            for (let i = 0; i < treeDataList.length; i++) {
                let treeData = treeDataList[i];
                let childrenTreeData = this.handleTreeDataList(treeDataList[i].children, key, value);
                newTreeDataList.push({
                    label: treeData[value],
                    key: treeData[key],
                    value: treeData[key],
                    children: childrenTreeData
                })
            }
        }
        return newTreeDataList;
    }

    render() {
        const FormItem = Form.Item;

        return (
            <FormItem
                hasFeedback={true}
                label={this.props.label}
                labelCol={{
                    xs: {span: 24},
                    sm: {span: this.props.multiLine ? 7 : 4},
                    md: {span: this.props.multiLine ? 7 : 4},
                    lg: {span: this.props.multiLine ? 7 : 4},
                    xl: {span: this.props.multiLine ? 7 : 4}
                }}
                wrapperCol={{
                    xs: {span: 24},
                    sm: {span: this.props.multiLine ? 17 : 17},
                    md: {span: this.props.multiLine ? 17 : 17},
                    lg: {span: this.props.multiLine ? 17 : 10},
                    xl: {span: this.props.multiLine ? 17 : 10}
                }}
                className="form-item"
            >
                {this.props.getFieldDecorator(this.props.id, {
                    rules: [{
                        required: this.props.required,
                        message: this.props.message === '' ? (this.props.label === '' ? this.props.placeholder : '选择' + this.props.label) : ''
                    }],
                    initialValue: this.props.initialValue
                })(
                    <Children
                        allowClear={this.props.allowClear}
                        showSearch={this.props.showSearch}
                        size={this.props.size}
                        multiple={this.props.multiple}
                        treeCheckable={this.props.treeCheckable}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        treeNodeFilterProp={'title'}
                        showCheckedStrategy={this.props.showCheckedStrategy}
                        dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                        treeData={this.props.store[this.props.storeKey]}
                        placeholder={this.props.placeholder === '' ? ('请选择' + this.props.label) : this.props.placeholder}
                        treeDefaultExpandAll={this.props.treeDefaultExpandAll}
                        labelInValue={true}
                        returnValueName={this.props.returnValueName}
                        returnLabelName={this.props.returnLabelName}
                        returnObject={this.props.returnObject}
                    />
                )}
            </FormItem>
        );
    }
}

NTreeSelect.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    message: PropTypes.string,
    size: PropTypes.string,
    multiLine: PropTypes.bool,
    remoteOptionConfig: PropTypes.object.isRequired,
    storeName: PropTypes.string.isRequired,
    storeKey: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    allowClear: PropTypes.bool,
    showCheckedStrategy: PropTypes.oneOf([TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD]),
    showSearch: PropTypes.bool,
    treeDefaultExpandAll: PropTypes.bool,
    treeCheckable: PropTypes.bool,
    multiple: PropTypes.bool,
    // initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    initialValue: PropTypes.array,
    returnValueName: PropTypes.string,
    returnLabelName: PropTypes.string,
    returnObject: PropTypes.object
};

NTreeSelect.defaultProps = {
    label: '',
    placeholder: '',
    required: false,
    message: '',
    size: 'default',
    multiLine: false,
    allowClear: false,
    showSearch: false,
    treeDefaultExpandAll: false,
    multiple: false,
    treeCheckable: false,
    returnValueName: '',
    returnLabelName: '',
    returnObject: {}

};

export default NTreeSelect