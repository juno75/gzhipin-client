/*
  作用：包含多个用来创建action的action creators
  类别：
    1. 同步action creator
      返回值是action对象
    2. 异步action creator
      返回值是函数 dispatch => {xxx}
 */

import {reqRegister} from '../api';
import {reqLogin} from '../api';

import {AUTH_SUCCESS,AUTH_ERROR} from "./action-types";

export const authSuccess = data => ({type:AUTH_SUCCESS,data});
export const authError = data => ({type:AUTH_ERROR,data});

export const register = ({username,password,rePassword,type})=>{
    if(!username){
        return authError({errMsg:'请输入用户名'})
    }else if(!password){
        return authError({errMsg:'请输入密码'})
    }else if(password !== rePassword){
        return authError({errMsg:'两次密码输入不一致'})
    }
    return dispatch => {
        reqRegister({username,password,type})
    .then(({data})=>{
            if(data.code===0){
                dispatch(authSuccess(data.data));
            }else{
                dispatch(authError({errMsg:data.msg}));
            }
        })
            .catch(err=>{
                dispatch(authError({err:'网络不稳定，请刷新重试'}));
            })
    }

}

export const login = ({username,password})=>{
    if(!username){
        return authError({errMsg:'请输入用户名'})
    }else if(!password){
        return authError({errMsg:'请输入密码'})
    }

    return dispatch => {
        reqLogin({username,password})
            .then(({data})=>{
            if(data.code === 0){
                dispatch(authSuccess(data.data))
            }else{
                dispatch(authError({errMsg:data.msg}))
            }
            })
            .catch(err=>{
                dispatch(authError({err:'网络错误，请刷新重试'}))
            })
    }
}
