import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Layout, Menu, Icon, Spin} from 'antd';

import constant from '../common/constant';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false,
            is_collapse: false,
            openKeys: [],
            selectedKeys: []
        }
    }


    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleCollapse() {
        this.setState({
            is_collapse: !this.state.is_collapse,
        });
    }

    handleLogout() {
        this.props.history.push({
            pathname: '/login',
            query: {}
        });
    }

    render() {
        const {Header, Sider, Content} = Layout;
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
                    className="sider"
                >
                    <div className="logo">
                        <Link to="/dashboard/index">
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
                        style={{height: document.documentElement.clientHeight - 64}}>
                        <SubMenu key="sub0" title={<span><Icon type="book"/><span>商品管理</span></span>}>
                            <Menu.Item key="1"><Link to={'/product/index'}>商品信息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={'/app/config/category/index'}>应用配置分类信息</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={'/app/config/index'}>应用配置信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="credit-card" /><span>广告管理</span></span>}>
                            <Menu.Item key="4"><Link to={'/advertisement/index'}>广告管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="cloud" /><span>新闻管理</span></span>}>
                            <Menu.Item key="5"><Link to={'/category/index'}>分类管理</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={'/news/index'}>新闻管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                            <Menu.Item key="7"><Link to={'/category/index'}>用户管理</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <Icon
                            className="trigger header-left"
                            type={this.state.is_collapse ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.handleCollapse.bind(this)}
                        />
                        <div className="header-right">
                            <div onClick={this.handleLogout.bind(this)}>
                                <Icon type="poweroff" className="logout"/>
                            </div>
                        </div>
                    </Header>
                    <Content>
                        <Spin spinning={this.state.is_load}>
                            {this.props.children}
                        </Spin>
                    </Content>
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
