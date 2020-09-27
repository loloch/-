import React from 'react';
import { Table } from 'antd';
import './index';

const columns = [
    {
        title:'名字',
        dataIndex:'name',
        key:'name'
    },{
        title:'证件号',
        dataIndex:'certiCode',
        key:'certiCode'
    }
]

export default () =>{
    return (
        <div>User</div>
    )
}
