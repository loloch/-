import React from 'react';
import { Input, Form } from 'antd';

const FormItem = Form.Item;

export default (props) => {
    const { name, label, colon, ...rest } = props;
    return (
        <FormItem colon={colon} name={name} label={label} {...rest}>
            <Input />
        </FormItem>
    )
}