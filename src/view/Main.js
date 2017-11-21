import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Layout, Menu, Icon} from 'antd';

import constant from '../common/constant';
import util from '../common/util';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false,
            is_collapse: false,
            openKeys: [],
            selectedKeys: [],
        }
    }


    componentDidMount() {
        util.setTitle(constant.name + '总控后台');
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleCollapse = () => {
        this.setState({
            is_collapse: !this.state.is_collapse,
        });
    }

    render() {
        const {Header, Footer, Sider, Content} = Layout;
        const {SubMenu} = Menu;

        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.is_collapse}
                    breakpoint="md"
                    onCollapse={this.handleCollapse.bind(this)}
                    width={256}
                    className="aa"
                >
                    <div className="logo">
                        <Link to="/">
                            {
                                this.state.is_collapse ?
                                    constant.short_name
                                    :
                                    constant.name
                            }
                        </Link>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        inlineCollapsed={this.state.is_collapse}
                        defaultSelectedKeys={['1']}
                        style={{height: document.documentElement.clientHeight - 18}}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user"/>商品管理</span>}>
                            <Menu.Item key="1">商品信息</Menu.Item>
                            <Menu.Item key="2">品牌信息</Menu.Item>
                            <Menu.Item key="3">商品分类信息</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop"/>订单管理</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification"/>快递单管理</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="notification"/>仓库管理</span>}>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="notification"/>财务管理</span>}>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="notification"/>会员管理</span>}>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <Icon
                            className="trigger header-left"
                            type={this.state.is_collapse ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggleCollapsed}
                        />
                        <div className="header-right">
                            <Icon type="poweroff" className="logout"/>
                        </div>
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default connect((state) => {
    return {
        index: state.index
    }
})(Index);
