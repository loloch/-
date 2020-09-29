import React from 'react';
import { Select, Form } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

export default (props) => {
    const { name, label, options, colon, ...rest } = props; 
    return (
        <FormItem name={name} label={label} colon={colon} {...rest}>
            <Select>
                {
                   options.map(item=>(
                     <Option value={item.value}>{item.label}</Option>
                   )) 
                }
            </Select>
        </FormItem>
    )
}