import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useCompare } from 'common/usehooks';
var Mock = require('mockjs')


export default props =>{

    const { params, pagination,...rest } = props;

    const [ dataSource, setDataSource ] = useState([]);
    const [ paginationState, setPaginationState ] = useState({
        pageSize: 10,
        pageSizeOptions: ['5', '10', '20', '30'],
        showSizeChanger: true,
        showQuickJumper: true,
        current: 1,
        ...pagination
    }) ;

    useEffect(()=>{
        getDataSource();
    },[useCompare(params),paginationState.current,paginationState.pageSize])



    const getDataSource = () =>{
        const { current, pageSize } = paginationState;
        console.log('getDataSource===============')
        setTimeout(()=>{
            let { list, total } = Mock.mock({
                [`list|${pageSize}`]:[{name:'三儿',certiCode:'333333','id|+1':1}],
                total:99
            });
            setDataSource(list);
            setPaginationState({...paginationState, total})
        })
    }

    return (
        <Table 
            rowKey={r=>r.id}
            dataSource={dataSource}
            pagination={paginationState}
            onChange={setPaginationState}
            {...rest}
        />   
    )
}