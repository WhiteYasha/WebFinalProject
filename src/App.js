import React, {Component} from 'react';
import './App.css';
import {BackTop} from 'antd';
import 'antd/lib/back-top/style/css';
import Home from './page/Home/Home';
import News from './page/News/News';
import NewsArticle from './page/NewsArticle/NewsArticle';
import Dishes from './page/Dishes/Dishes';
import Contact from './page/Contact/Contact';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
// eslint-disable-next-line {/*引入组件*/}
import {initList} from './action/reducer.js';
// eslint-disable-next-line {/*引入动作*/}

const stateToProps = state => ({});
const stateToDispatch = dispatch => {
    return {
        doInitList: () => {
            axios.all([
                axios.get("http://localhost:9001/getShopList"),
                axios.get("http://localhost:9001/getDishesList"),
                axios.get("http://localhost:9001/getRecruitList"),
                axios.get("http://localhost:9001/getNewsList")
            ]).then(axios.spread((shopResp, dishesResp, recruitResp, newsResp) => {
                var lists = {
                    shopList: shopResp.data,
                    dishesList: dishesResp.data,
                    recruitList: recruitResp.data,
                    newsList: newsResp.data
                };
                dispatch(initList(lists));
            }));
        }
    }
};

class App extends Component {
    componentWillMount() {
        this.props.doInitList();
        if (!window.location.pathname.startsWith("/admin")) {
            axios.get("http://localhost:9001/visit");
        }
        document.title = "杭州新白鹿餐饮管理有限公司";
    }
    render() {
        if (window.location.pathname === "/")
            return <Redirect to="/home"/>
        else {
            return (
                <div id="app">
                    <Route path="/home" component={Header}/>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/home/news" component={News}/>
                        <Route path="/home/news/article" component={NewsArticle}/>
                        <Route path="/home/dishes" component={Dishes}/>
                        <Route path="/home/contact" component={Contact}/>
                    </Switch>
                    <Route path="/home" component={Footer}/>
                    <div>
                        <BackTop />
                    </div>
                </div>
            );
        }
    }
}

export default connect(stateToProps, stateToDispatch)(App);
