import React, {Component} from 'react';
import {Map, Marker, InfoWindow} from 'react-amap';

const position = {
    longitude: 120.1672910000,
    latitude: 30.2732440000
}
var self;

class Contactmap extends Component {
    constructor() {
        super();
        self = this;
        this.state = {infoVisible: false};
    }
    toggleVisible() {
        if (self.state.infoVisible) self.setState({infoVisible: false});
        else self.setState({infoVisible: true});
    }
    render() {
        return (<div style={{
                margin: '0 20%',
                background: '#fff'
            }}>
            <div style={{
                    height: '500px',
                    padding: '5%'
                }}>
                <Map
                    amapkey="8b65977e3984c14369cd7c3b142ace6b"
                    zoom="18"
                    center={position}
                >
                    <Marker position={position} clickable events={{click: this.toggleVisible}}/>
                    <InfoWindow position={position} visible={this.state.infoVisible} events={{close: this.toggleVisible}}>
                            <h3 style={{color: 'orange'}}>新白鹿餐厅</h3>
                            <p>总部电话：0571-88025588</p>
                            <p>传真：0571-87915560</p>
                            <p>网址：www.bailu.cc www.xinbailu.cc</p>
                            <p>地址：浙江省杭州市中山北路572号</p>
                    </InfoWindow>
                </Map>
            </div>
        </div>);
    }
}

export default Contactmap;