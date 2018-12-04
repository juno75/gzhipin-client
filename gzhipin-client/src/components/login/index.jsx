import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar,WingBlank,WhiteSpace,List,InputItem,Button} from 'antd-mobile';
import Logo from '../logo';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    static propTypes = {
        user:PropTypes.object.isRequired,
        login:PropTypes.func.isRequired
    }
    state = {
        username:'',
        password:''
    }

    handleChange = (type,value) => {
        this.setState({
            [type] : value
        })
    }

    login = async () => {
      const {username,password} = this.state;
      this.props.login({username,password})
    }
    goRegister = () => {
        this.props.history.replace('/register')
    }

    goMain = () => {
        this.props.history.replace('/main')
    }
    render () {
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
                        <InputItem onChange={val=>this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                    </List>
                    <Button type="primary" onClick={this.goMain}>登陆</Button>
                    <WhiteSpace />
                    <Button onClick={this.goRegister}>还没有账户</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;