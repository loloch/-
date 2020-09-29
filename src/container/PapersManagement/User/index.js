import React from 'react';
import SearchPage from 'component/SearchPage';
import './index.less';


export default () =>{

    
    const formConfig = [
        { label:'实验名称', name:'name', type:'Input' },
        { label:'实验id', name:'id', type:'Input' },
        { label:'启动日期', name:'date', type:'RangePicker' },
        { 
            label:'状态', 
            name:'status', 
            type:'Select',
            options:[
                { label:"可用", value:'1' },
                { label:'不可用', value:'0' }
            ] 
        },
    ];

    const columns = [
        { 
            key:'name',
            dataIndex:'name',
            title:'姓名'
        },
        {
            key:'status',
            dataIndex:'status',
            title:'状态'
        }
    ]

    return (
            <SearchPage 
                formConfig={formConfig}
                columns={columns}
            />
    )
}
