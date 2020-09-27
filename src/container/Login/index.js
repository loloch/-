import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router';

export default withRouter((props)=>{
    const toLogin = () =>{
        sessionStorage.setItem('token','token');
        props.history.push({
            pathname:'home'
        })
    }
    return (
        <Button onClick={toLogin} >登录</Button>
    )
})