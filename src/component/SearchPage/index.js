import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'antd';
import PaginationTable from 'component/PaginationTable';
import * as FormRender from 'component/FormRender';
import './index.less';

const cls = 'searchPage-container';

export default ( props ) => {
    const { formConfig, exportConfig, columns } = props;

    const [ params, setParams ] = useState({});

    const onValuesChange = (changedValues, allValues) =>{
        console.log(changedValues, allValues,'================');
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
            <Row gutter={15}>
                <Col span={16}>
                    {
                        formConfig.map(props=>{
                            const FormItem = FormRender[props.type];
                            return (
                                <FormItem 
                                    { ...props } 
                                    name={`${props.type}-${props.name}`}
                                />
                            )
                        })
                    }
                </Col>
                <Col span={8}>
                    <div className="btn-wrap">
                        <Button style={{width:'80px',marginRight:'15px'}} type="primary">查询</Button>
                        <Button style={{width:'80px',marginRight:'15px'}}>重置</Button>
                        <Button style={{width:'80px',marginRight:'15px'}} disabled>导出</Button>
                    </div>
                </Col>
            </Row>
            <PaginationTable
                api={''}
                params={params}
                columns={columns}
            />
        </Form>
    )
}
