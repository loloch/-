import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const Select2 = props => {
    const { options, ...rest } = props;
    return (
        <Select { ...rest }>
            {
                options.map(item=>(
                    <Option value={item.value}>{item.label}</Option>
                ))
            }
        </Select>
    )
}

Select2.defaultProps = {
    // getOptionModel: () => {},
    // getValue: i => i.value,
    // getLabel: i => i.label,
    options:[],
    placeholder: '请选择',
};


export default Select2;