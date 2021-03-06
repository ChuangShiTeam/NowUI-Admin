import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Redirect, NavLink} from 'react-router-dom';
import {Layout, Menu, Icon, Spin} from 'antd';

import constant from '../common/constant';
import entry from '../common/entry';

let routerList = [];

for (let i = 0; i < entry.webEntry.length; i++) {
	routerList.push(entry.webEntry[i]);
}

// const routerContext = require.context('../router', false, /\.js$/);
// const routerKeys = routerContext.keys();
// for (let i = 0; i < routerKeys.length; i++) {
// 	let array = routerContext(routerKeys[i]).default;
// 	for (let j = 0; j < array.length; j++) {
// 		routerList.push(array[j]);
// 	}
// }

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
						<NavLink to="/dashboard/index">
							{
								this.state.is_collapse ?
									constant.shortName
									:
									constant.name
							}
						</NavLink>
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
							<Menu.Item key="0.1"><NavLink to={'/product/index'}>商品信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub1" title={<span><Icon type="credit-card"/><span>广告管理</span></span>}>
							<Menu.Item key="1.1"><NavLink to={'/advertisement/index'}>广告信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="tool"/><span>工具栏管理</span></span>}>
							<Menu.Item key="2.1"><NavLink to={'/toolbar/index'}>工具栏信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub3" title={<span><Icon type="double-right"/><span>导航栏管理</span></span>}>
							<Menu.Item key="3.1"><NavLink to={'/navigation/index'}>导航栏信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub4" title={<span><Icon type="cloud"/><span>文章管理</span></span>}>
							<Menu.Item key="4.1"><NavLink to={'/article/category/index'}>文章分类信息</NavLink></Menu.Item>
							<Menu.Item key="4.2"><NavLink to={'/article/index'}>文章信息</NavLink></Menu.Item>
							<Menu.Item key="4.3"><NavLink to={'/article/author/index'}>文章作者信息</NavLink></Menu.Item>
							<Menu.Item key="4.4"><NavLink to={'/article/price/index'}>文章价格信息</NavLink></Menu.Item>
							<Menu.Item key="4.5"><NavLink
								to={'/article/user/purchase/index'}>文章购买信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub5" title={<span><Icon type="camera-o"/><span>论坛管理</span></span>}>
							<Menu.Item key="5.1"><NavLink to={'/forum/index'}>论坛信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub6" title={<span><Icon type="camera-o"/><span>宠物管理</span></span>}>
							<Menu.Item key="6.1"><NavLink to={'/pet/category/index'}>宠物分类信息</NavLink></Menu.Item>
							<Menu.Item key="6.2"><NavLink to={'/pet/index'}>宠物信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub7" title={<span><Icon type="camera-o" /><span>医院管理</span></span>}>
							<Menu.Item key="7.1"><NavLink to={'/doctor/index'}>医生信息</NavLink></Menu.Item>
							<Menu.Item key="7.2"><NavLink to={'/patient/index'}>患者信息</NavLink></Menu.Item>
							<Menu.Item key="7.3"><NavLink to={'/course/index'}>课程信息</NavLink></Menu.Item>
							<Menu.Item key="7.4"><NavLink to={'/course/order/index'}>课程订单</NavLink></Menu.Item>
							<Menu.Item key="7.5"><NavLink to={'/course/video/index'}>课程视频</NavLink></Menu.Item>
						</SubMenu>

						<SubMenu key="sub8" title={<span><Icon type="camera-o"/><span>代码管理</span></span>}>
							<Menu.Item key="8.1"><NavLink to={'/code/index'}>数据库表信息</NavLink></Menu.Item>
						</SubMenu>

						<SubMenu key="sub19" title={<span><Icon type="user"/><span>权限管理</span></span>}>
							<Menu.Item key="19.1"><NavLink to={'/admin/index'}>管理员信息</NavLink></Menu.Item>
							<Menu.Item key="19.2"><NavLink to={'/role/index'}>角色信息</NavLink></Menu.Item>
							<Menu.Item key="19.3"><NavLink to={'/menu/index'}>菜单信息</NavLink></Menu.Item>
						</SubMenu>
						<SubMenu key="sub20" title={<span><Icon type="setting"/><span>系统管理</span></span>}>
							<Menu.Item key="20.1"><NavLink to={'/app/index'}>应用信息</NavLink></Menu.Item>
							<Menu.Item key="20.2"><NavLink
								to={'/app/config/category/index'}>应用配置分类信息</NavLink></Menu.Item>
							<Menu.Item key="20.3"><NavLink to={'/app/config/index'}>应用配置信息</NavLink></Menu.Item>
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

							<Switch>
								{
									routerList.map(function (router) {
										return (
											router
										)
									})
								}
								<Redirect to="/dashboard/index"/>
							</Switch>
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
