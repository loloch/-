import React, { useEffect, useState, useRef } from 'react';
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

    const firstUpdate = useRef(true);

    //表格请求参数有变化的时候执行
    useEffect(()=>{
        //第一次挂载组件的时候不执行，否则会请求两次
        if(firstUpdate.current){
            firstUpdate.current = false;
            return
        }
        //入参改变如果当前非第一页，则将当前页改为第一页由下一个effect发起请求，否则直接发起请求
        if(paginationState.current!==1){
            setPaginationState({...paginationState, current:1});
        }else{
            getDataSource();
        }
    },[useCompare(params)])

    //表格分页进行切换的时候重新发起请求
    useEffect(()=>{
        console.log('useEffect22222222')
        getDataSource();
    },[paginationState.current,paginationState.pageSize])

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