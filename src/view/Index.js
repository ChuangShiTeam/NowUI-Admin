import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Layout, Menu, Icon} from 'antd';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false,
            collapsed: false,
            openKeys: [],
            selectedKeys: [],
        }
    }


    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
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
                        collapsed={this.state.collapsed}
                        breakpoint="md"
                        onCollapse={this.toggleCollapsed}
                        width={256}
                    >
                        <div className="logo">
                            <Link to="/">
                                上海星销信息技术
                            </Link>
                        </div>
                        <Menu
                            theme="dark"
                            mode="inline"
                            inlineCollapsed={this.state.collapsed}
                            defaultSelectedKeys={['1']}
                            style={{height: document.documentElement.clientHeight - 18}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />应用管理</span>}>
                                <Menu.Item key="1"><Link to={'/app/index'}>应用信息</Link></Menu.Item>
                                <Menu.Item key="2"><Link to={'/app/config/category/index'}>应用配置分类信息</Link></Menu.Item>
                                <Menu.Item key="3"><Link to={'/app/config/index'}>应用配置信息</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />订单管理</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />快递单管理</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="notification" />仓库管理</span>}>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="notification" />财务管理</span>}>
                            </SubMenu>
                            <SubMenu key="sub6" title={<span><Icon type="notification" />会员管理</span>}>
                            </SubMenu>
                        </Menu>
                    </Sider>
                <Layout>
                    <Header className="header">
                        <Icon
                            className="trigger text-align-left"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
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
