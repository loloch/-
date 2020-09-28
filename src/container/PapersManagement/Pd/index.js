import React, { useState } from 'react';
import PaginationTable from 'component/PaginationTable';
import { Form, Select, Input, Row, Col, Button } from 'antd';
import { withRouter } from 'react-router-dom';

const FormItem = Form.Item;
const Option = Select.Option;

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

export default withRouter((props) =>{
    const [ params, setParams ] = useState({});
    return (
        [
            <Form 
                key="form"
                onValuesChange={(_,values)=>setParams(values)}
            >
                <Row gutter={20}>
                    <Col span={16}>
                        <Row gutter={15}>
                            <Col span={12}>
                            <FormItem label="实验名称" name="name">
                                <Input placeholder="实验Id" />   
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="状态" name="status">
                                <Select>
                                    <Option value="1">可用</Option>
                                    <Option value="0">不可用</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Button style={{width:'80px',marginRight:'15px'}} type="primary">查询</Button>
                        <Button style={{width:'80px',marginRight:'15px'}}>重置</Button>
                        <Button style={{width:'80px',marginRight:'15px'}} disabled>导出</Button>
                    </Col>
                </Row>
            </Form>,
            <PaginationTable
                api={''}
                key="table"
                params={params}
                columns={columns}
            />
        ]
        
    )
})
