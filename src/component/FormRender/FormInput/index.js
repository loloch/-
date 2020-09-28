import React from 'react';
import { Input, Form } from 'antd';

const FormItem = Form.Item;

export default (props) => {
    const { name, label } = props;
    return (
        <FormItem name={name} label={label}>
            <Input />
        </FormItem>
    )
}