import React, {Component} from 'react';
import {NavBar,WingBlank,WhiteSpace,List,InputItem,Button} from 'antd-mobile';
import Logo from '../logo';

class Login extends Component {
    state = {
        username:'',
        password:''
    }

    onChange = (type,value) => {
        this.setState({
            [type] : value
        })
    }
    goRegister = () => {
        this.props.history.replace('/register')
    }

    goMain = () => {
        this.props.history.replace('/main')
    }
    render () {
        const {username,password} = this.state;
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem onChange={val=>this.onChange('username',val)}>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={val=>this.onChange('password',val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
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