import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import 'antd/lib/row/style/css';
import './Information.css';

class Information extends Component {
    render() {
        return (<div>
            <div className="home-cover" />
            <Row className="home-contact">
                <Col className="home-contact-left" span={4} offset={4}>
                    <h2>新白鹿</h2>
                    <p>
                        做最好的服务，最好的出品，最好的环境
                    </p>
                </Col>
                <Col className="home-contact-right" span={12}>
                    <div style={{textAlign: 'center', paddingTop: '0.5em'}}>
                        <Icon type="weibo" style={{color: '#fff', padding: '0 0.5em', fontSize: '18px'}} />
                        <Icon type="qq" style={{color: '#fff', padding: '0 0.5em', fontSize: '18px'}} />
                        <Icon type="twitter" style={{color: '#fff', padding: '0 0.5em', fontSize: '18px'}} />
                    </div>
                    <div style={{margin: 'calc(48px - 0.25em) 0'}}>
                        <div className="home-contact-right-btn">CONTACT US</div>
                        <Icon type="phone" style={{color: '#fff', fontSize: '48px', padding: '0 0.5em'}} />
                        <div style={{display: 'inline-block'}}>
                            <section style={{fontSize: '12px', color: '#fff', textAlign: 'right'}}>WELCOME TO OUR WEBSITE</section>
                            <section style={{fontSize: '30px', color: '#fff', fontWeight: 'bold'}}>+ 0571-88025588</section>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="home-aboutus">
                <h1 className="home-aboutus-title">关于我们</h1>
                <section className="home-aboutus-section">
                    1998年，新白鹿从杭州耶稣堂弄的一家小面馆起家，而后开启杭州人排队吃饭先河、并十余年创造排队奇迹的人气餐厅。
                    2014年，新白鹿完成了多家门店的布局和重要门店的升级改造。城西的西城广场店、城北的中大银泰城店、运河上街店，闪亮登场；与此同时，新白鹿还完成了龙游路店、西湖银泰店的全新装修改造，新白鹿升级后，品牌形象更鲜明，市民更喜欢。
                    2015年，新白鹿稳步布局杭州城北商圈，拓展上海市场，捷报频传。
                </section>
            </Row>
        </div>);
    }
}

export default Information;