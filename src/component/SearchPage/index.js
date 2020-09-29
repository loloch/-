import React, { useState } from 'react';
import { Form, Button, PageHeader } from 'antd';
import PaginationTable from 'component/PaginationTable';
import * as SearchItems from './SearchItems';
import './index.less';

const cls = 'searchPage-container';

export default ( props ) => {
    const { formConfig, exportConfig, columns } = props;

    const [ params, setParams ] = useState({});

    const onValuesChange = (changedValues, allValues) =>{
        const [ type, name ] = Object.keys(changedValues)[0].split('-');
        if(['Select','DatePicker'].includes(type)){
            setParams(()=>{
                let newParams = {};
                for(let i in allValues){
                    let iArr = i.split('-');
                    newParams[iArr[iArr.length-1]] = allValues[i]
                };
                return newParams;
            })
        }
    }

    return (
        <Form 
            className={cls}
            onValuesChange={onValuesChange}
        >
            <PageHeader 
                title="试卷管理" 
                extra={[
                    <Button type="primary">新建</Button>,
                    <Button type="primary">新建</Button>,
                    <Button type="primary">新建</Button>
                ]}
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
                    <Button type="primary">查询</Button>
                    <Button>重置</Button>
                    <Button disabled>导出</Button>
                </div>
            </div>
            <PaginationTable
                api={''}
                className={`${cls}-table`}
                params={params}
                columns={columns}
            />
        </Form>
    )
}
