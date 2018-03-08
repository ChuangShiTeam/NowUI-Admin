import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Layout, Menu, Icon, Spin} from 'antd';

import constant from '../common/constant';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
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

    handleOpenChange(openKeys) {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }

        this.setState({
            openKeys: nextOpenKeys
        });

        // this.setState({
        //     openKeys: openKeys
        // });
    }

    getAncestorKeys = (key) => {
        const map = {
            sub3: []
        };
        return map[key] || [];
    }

    handleClick(item) {
        this.setState({
            selectedKeys: [item.key]
        });
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
                                    constant.shortName
                                    :
                                    constant.name
                            }
                        </Link>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        inlineCollapsed={this.state.is_collapse}
                        openKeys={this.state.openKeys}
                        selectedKeys={this.state.selectedKeys}
                        onOpenChange={this.handleOpenChange.bind(this)}
                        onClick={this.handleClick.bind(this)}
                        style={{height: document.documentElement.clientHeight - 64}}>
                        <SubMenu key="sub0" title={<span><Icon type="book"/><span>商品管理</span></span>}>
                            <Menu.Item key="0.1"><Link to={'/product/index'}>商品信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="credit-card" /><span>广告管理</span></span>}>
                            <Menu.Item key="1.1"><Link to={'/advertisement/index'}>广告信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="tool" /><span>工具栏管理</span></span>}>
                            <Menu.Item key="2.1"><Link to={'/toolbar/index'}>工具栏信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="double-right" /><span>导航栏管理</span></span>}>
                            <Menu.Item key="3.1"><Link to={'/navigation/index'}>导航栏信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="cloud" /><span>文章管理</span></span>}>
                            <Menu.Item key="4.1"><Link to={'/article/category/index'}>文章分类信息</Link></Menu.Item>
                            <Menu.Item key="4.2"><Link to={'/article/index'}>文章信息</Link></Menu.Item>
                            <Menu.Item key="4.3"><Link to={'/article/author/index'}>文章作者信息</Link></Menu.Item>
                            <Menu.Item key="4.4"><Link to={'/article/price/index'}>文章价格信息</Link></Menu.Item>
                            <Menu.Item key="4.5"><Link to={'/article/user/purchase/index'}>文章购买信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="camera-o" /><span>论坛管理</span></span>}>
                            <Menu.Item key="5.1"><Link to={'/forum/index'}>论坛信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="camera-o" /><span>宠物管理</span></span>}>
                            <Menu.Item key="6.1"><Link to={'/pet/category/index'}>宠物分类信息</Link></Menu.Item>
                            <Menu.Item key="6.2"><Link to={'/pet/index'}>宠物信息</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub7" title={<span><Icon type="shop"/><span>WMS</span></span>}>
                            <Menu.Item key="7.1"><Link to={'/purchaseOrder/index'}>采购申请</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub8" title={<span><Icon type="shop"/><span>品牌供应商管理</span></span>}>
                            <Menu.Item key="8.1"><Link to={'/supplier/index'}>供应商基础信息</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub10" title={<span><Icon type="user" /><span>会员管理</span></span>}>
                            <Menu.Item key="10.1"><Link to={'/member/default/avatar/index'}>默认头像管理</Link></Menu.Item>
                        <SubMenu key="sub7" title={<span><Icon type="camera-o" /><span>医院管理</span></span>}>
                            <Menu.Item key="7.1"><Link to={'/doctor/index'}>医生信息</Link></Menu.Item>
                            <Menu.Item key="7.2"><Link to={'/patient/index'}>患者信息</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub8" title={<span><Icon type="camera-o" /><span>代码管理</span></span>}>
                            <Menu.Item key="8.1"><Link to={'/code/index'}>数据库表信息</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub19" title={<span><Icon type="user" /><span>权限管理</span></span>}>
                            <Menu.Item key="19.1"><Link to={'/admin/index'}>管理员信息</Link></Menu.Item>
                            <Menu.Item key="19.2"><Link to={'/role/index'}>角色信息</Link></Menu.Item>
                            <Menu.Item key="19.3"><Link to={'/menu/index'}>菜单信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub20" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
                            <Menu.Item key="20.1"><Link to={'/app/index'}>应用信息</Link></Menu.Item>
                            <Menu.Item key="20.2"><Link to={'/app/config/category/index'}>应用配置分类信息</Link></Menu.Item>
                            <Menu.Item key="20.3"><Link to={'/app/config/index'}>应用配置信息</Link></Menu.Item>
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
                        <Spin spinning={this.state.isLoad}>
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
