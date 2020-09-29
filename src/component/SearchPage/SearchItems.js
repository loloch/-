import React from 'react';
import { Input, Select, DatePicker, Form } from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const SearchSelect = (props) => {
    const { options, ...rest } = props; 
    return (
        <FormItem {...rest}>
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

const SearchInput = (props) => {
    return (
        <FormItem {...props}>
            <Input />
        </FormItem>
    )
}

const SearchRangePicker = ( props ) => {
    const { name, label, colon, ...rest } = props;
    return (
        <FormItem name={name} colon={colon} label={label} { ...rest } >
            <RangePicker />
        </FormItem>
    )
}

export {
    SearchInput as Input,
    SearchSelect as Select,
    SearchRangePicker as RangePicker
}