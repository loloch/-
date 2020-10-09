import React from 'react';
import { Form, Modal, Row, Col, Input } from 'antd';    
import { get } from 'http';

const FormItem = Form.Item;

export default props => {

    const [form] = Form.useForm();

    const { visible, modelFields, isPage, defaultFormLayout, initialValues, onCancel, onOkCb } = props;

    const formLayout =
        defaultFormLayout ||
        (isPage
            ? { labelCol: { span: 5 }, wrapperCol: { span: 17 } }
            : { labelCol: { span: 4 }, wrapperCol: { span: 19 } }
        );
    
    let responsive = isPage ? { xs: 24, sm: 24, md: 24, lg: 12, xl: 12 } : { span: 24 };    
        
    const formList = (
        <Form
            { ...formLayout }
            initialValues={initialValues}
            form={form} 

        >
            <Row gutter={16}>
                {
                    modelFields.map(item=>{
                        if (!!item.responsive) responsive = item.responsive;
                        const formChildren = () => (
                            item.renderItem(item, form)?
                            <FormItem { ...item.formItemProps }>
                                {item.renderItem(item, form)}
                            </FormItem>:null
                        )
                        return (
                            <Col { ...responsive } key={item.formItemProps.name}>
                                {
                                    !item.controlledItemProps?
                                        formChildren():
                                        <FormItem noStyle { ...item.controlledItemProps }>
                                            {formChildren}
                                        </FormItem>
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </Form>
    ) 

    return isPage?
        formList:       
        <Modal
            visible={visible}
            onCancel={onCancel}
            onOk={()=>form.validateFields().then(onOkCb)}
        >
            {formList}
        </Modal>
}