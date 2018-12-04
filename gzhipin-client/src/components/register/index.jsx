import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar,WingBlank,WhiteSpace,List,InputItem,Radio,Button} from 'antd-mobile';
import Logo from '../logo'
import {reqRegister} from '../../api';
import {Redirect} from 'react-router-dom';

const Item = List.Item;


class Register extends Component {
    static propTypes = {
        user:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired
    }
    state = {
        laoban:true,
        username:'',
        password:'',
        rePassword:'',

    }

    handleChange = (type,value) => {
        this.setState({
            [type]:value
        })
    }

    register = async() => {
        const {laoban,password,rePassword,username} = this.state;
        console.log(laoban,password,rePassword,username);

        const user = await reqRegister({username,password,type:laoban?'laoban':'dasdhen'});
    }

    goLogin = () => {

        this.props.history.replace('/login');
    }

    render () {
        const {laoban} = this.state;
        const {errMsg,redirectTo} = this.props.user;

        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo />
                <p className="err-msg">{errMsg}</p>
                <WingBlank>
                    <List>
                       <InputItem onChange={val=>this.handleChange('username',val)}>用户名:</InputItem>
                        <WhiteSpace />
                       <InputItem onChange={val=>this.handleChange('password',val)} type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={val=>this.handleChange('rePassword',val)} type="password">确认密码:</InputItem>
                        <WhiteSpace />
                        <Item>
                            用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={!laoban} onChange={this.handleChange.bind(null,'laoban',false)}>大神</Radio>&nbsp;&nbsp;&nbsp;
                            <Radio checked={laoban} onChange={this.handleChange.bind(null,'laoban',true)}>老板</Radio>
                        </Item>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.register}>注册</Button>
                        <WhiteSpace />
                        <Button onClick={this.goLogin}>已有账户</Button>

                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Register;