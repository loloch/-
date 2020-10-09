import React, { useState } from 'react';
import { Input, Button } from 'antd';
import SearchPage from 'component/SearchPage';
import FormRender from 'component/FormRender';
import Select2 from 'component/FormRender/Select';

import './index.less';

const firstOptions = [
    { label:'第一产业', value:'1' },
    { label:'第二产业', value:'2' },
]

const secondOptions = [
    { label:'打药的', value:'11' },
    { label:'摘桃的', value:'12' }
]

const secondOptions2 = [
    { label:'操机的', value:'21' },
    { label:'维修工', value:'22' },
]


export default () =>{

    const [ visible, setVisible ] = useState(false);

    const modelFields = [
        {
            formItemProps:{
                name:"jobClass",
                label:"职业分类",
            },
            renderItem(_,{setFieldsValue}){
                return (
                    <Select2 
                        options={firstOptions} 
                        onChange={(value)=>{
                            setFieldsValue({job:''})
                        }}
                    />
                ) 
            }
        },
        {
            formItemProps:{
                name:"job",
                label:"具体职业",
            },
            controlledItemProps:{
                shouldUpdate:(preValues, currentValues) => preValues.jobClass!==currentValues.jobClass,
            },
            renderItem(_, {getFieldValue}){
                return <Select2 options={getFieldValue('jobClass')==='1'?secondOptions:secondOptions2} />
            }
        },
        {
            formItemProps:{
                name:'company',
                label:'公司名称',
            },
            controlledItemProps:{
                shouldUpdate:(preValues, currentValues) => preValues.job!==currentValues.job,
                noStyle:true
            },
            renderItem(_, {getFieldValue}){
                return getFieldValue('job')[0] === '2'&&<Input />
            }
        }

    ];

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

    const headerExtra = [
        <Button type="primary" onClick={()=>{setVisible(true)}}>新建</Button>
    ]

    const onOkCb = (values) => {
        console.log(values,'values=============');
        setVisible(false);
    }

    return (
            <SearchPage 
                formConfig={formConfig}
                headerExtra={headerExtra}
                columns={columns}
            >
                <FormRender
                    visible={visible}
                    onCancel={()=>setVisible(false)}
                    onOkCb={onOkCb}
                    modelFields={modelFields} 
                    initialValues={{
                        jobClass:'2',
                        job:'22',
                        company:'奇虎360'
                    }}
                />
            </SearchPage>
    )
}
