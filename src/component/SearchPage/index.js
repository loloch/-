import React, { useState } from 'react';
import { Form, Button, PageHeader } from 'antd';
import PaginationTable from 'component/PaginationTable';
import * as SearchItems from './SearchItems';
import './index.less';

const cls = 'searchPage-container';

export default ( props ) => {
    const { formConfig, exportConfig, columns, headerExtra } = props;

    const [ params, setParams ] = useState({});

    const [form] = Form.useForm();

    const onValuesChange = (changedValues, allValues) =>{
        const [ type ] = Object.keys(changedValues)[0].split('-');
        if(['Select','RangePicker'].includes(type)){
            setParams(dealParams(allValues))
        }
    }

    const onFinish = (allValues) =>{
        console.log(allValues,'allValues=============')
        setParams(dealParams(allValues))
    }

    const onReset = () => {
        form.resetFields();
        setParams({});
    }

    const dealParams = (allValues) =>{
        let newParams = {};
        for(let i in allValues){
            let iArr = i.split('-');
            newParams[iArr[iArr.length-1]] = allValues[i]
        };
        return newParams;
    }

    return (
        <Form 
            className={cls}
            form={form}
            onValuesChange={onValuesChange}
            onFinish={onFinish}
        >
            <PageHeader 
                title="试卷管理" 
                extra={headerExtra}
            />
            <div className={`${cls}-searchWrap`}>
                <div className={`${cls}-input-col`}>
                    {/* <Space> */}
                        {
                            formConfig.map(props=>{
                                const FormItem = SearchItems[props.type];
                                return (
                                    <FormItem
                                        className={`${cls}-search-input`}
                                        colon={false} 
                                        { ...props } 
                                        name={`${props.type}-${props.name}`}
                                    />
                                )
                            })
                        }
                    {/* </Space> */}
                </div>
                <div className={`${cls}-btnWrap`}>
                    <Button type="primary" htmlType="submit">查询</Button>
                    <Button onClick={onReset}>重置</Button>
                    {exportConfig&&<Button disabled>导出</Button>}
                </div>
            </div>
            <PaginationTable
                api={''}
                className={`${cls}-table`}
                params={params}
                columns={columns}
            />
            {props.children||null}
        </Form>
    )
}
