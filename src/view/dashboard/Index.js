import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ChartCard, yuan, Field, MiniArea, MiniBar, MiniProgress} from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import {Row, Col, Icon, Tooltip} from 'antd';
import numeral from 'numeral';
import moment from 'moment';

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
	visitData.push({
		x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
		y: Math.floor(Math.random() * 100) + 10,
	});
}

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div style={{margin: '24px'}}>
				<Row gutter={24}>
					<Col xs={24} sm={24} md={12} xl={6} style={{marginBottom: 24}}>
						<ChartCard
							title="销售额"
							action={<Tooltip title="指标说明"><Icon type="info-circle-o"/></Tooltip>}
							total={yuan(126560)}
							footer={<Field label="日均销售额" value={numeral(12423).format('0,0')}/>}
							contentHeight={46}
						>
						<span>
						  周同比
						  <Trend flag="up" style={{marginLeft: 8, color: 'rgba(0,0,0,.85)'}}>12%</Trend>
						</span>
							<span style={{marginLeft: 16}}>
						  日环比
						  <Trend flag="down" style={{marginLeft: 8, color: 'rgba(0,0,0,.85)'}}>11%</Trend>
						</span>
						</ChartCard>
					</Col>
					<Col xs={24} sm={24} md={12} xl={6} style={{marginBottom: 24}}>
						<ChartCard
							title="搜索用户数量"
							contentHeight={120}
						>
							<NumberInfo
								subTitle={<span>本周访问</span>}
								total={numeral(12321).format('0,0')}
								status="up"
								subTotal={17.1}
							/>
							<MiniArea
								line
								height={45}
								data={visitData}
							/>
						</ChartCard>
					</Col>
					<Col xs={24} sm={24} md={12} xl={6} style={{marginBottom: 24}}>
						<ChartCard
							title="访问量"
							action={<Tooltip title="指标说明"><Icon type="info-circle-o"/></Tooltip>}
							total={numeral(8846).format('0,0')}
							footer={<Field label="日访问量" value={numeral(1234).format('0,0')}/>}
							contentHeight={46}
						>
							<MiniBar
								height={46}
								data={visitData}
							/>
						</ChartCard>
					</Col>
					<Col xs={24} sm={24} md={12} xl={6} style={{marginBottom: 24}}>
						<ChartCard
							title="线上购物转化率"
							action={<Tooltip title="指标说明"><Icon type="info-circle-o"/></Tooltip>}
							total="78%"
							footer={
								<div style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
								<span>
								  周同比
								  <Trend flag="up" style={{marginLeft: 8, color: 'rgba(0,0,0,.85)'}}>12%</Trend>
								</span>
									<span style={{marginLeft: 16}}>
								  日环比
								  <Trend flag="down" style={{marginLeft: 8, color: 'rgba(0,0,0,.85)'}}>11%</Trend>
								</span>
								</div>
							}
							contentHeight={46}
						>
							<MiniProgress percent={78} strokeWidth={8} target={80}/>
						</ChartCard>
					</Col>

					{/*<Col xs={24} sm={24} md={24} xl={24} style={{marginBottom: 20}}>*/}
					{/**/}
					{/*</Col>*/}
				</Row>
				<ChartCard
					title="销售额趋势"
					action={<Tooltip title="指标说明"><Icon type="info-circle-o"/></Tooltip>}
					total={numeral(8846).format('0,0')}
					footer={<Field label="日访问量" value={numeral(1234).format('0,0')}/>}
					contentHeight={400}
				>
					<MiniBar
						height={400}
						data={visitData}
					/>
				</ChartCard>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		dashboard: state.dashboard
	}
})(Index);
