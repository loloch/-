import React, { useEffect, useState, useRef } from 'react';
import { Table } from 'antd';
import classNames from 'classnames';
import { useCompare } from 'common/usehooks';
import './index.less';
var Mock = require('mockjs')

const cascaderPrefixCls = 'paginationTable-container';
const textStyle = { color:'#0fbf73' };

export default props =>{

    const { params, pagination, className,...rest } = props;

    const [ dataSource, setDataSource ] = useState([]);

    const [ loading, setLoading ] = useState(false);

    const [ paginationState, setPaginationState ] = useState({
        pageSize: 10,
        pageSizeOptions: ['5', '10', '20', '30'],
        showSizeChanger: true,
        current: 1,
        size:'default',
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
        getDataSource();
    },[paginationState.current,paginationState.pageSize])

    const getDataSource = () =>{
        const { current, pageSize } = paginationState;
        setLoading(true);
        // console.log(current,'getDataSource===============')
        setTimeout(()=>{
            let { list, total } = Mock.mock({
                [`list|${pageSize}`]:[{name:'三儿',certiCode:'333333',status:'1','id|+1':1}],
                total:99
            });
            setDataSource(list);
            setLoading(false);
            setPaginationState({
                ...paginationState, 
            showTotal:total=>(<div>共<span style={textStyle}>{total}</span>条记录 第<span style={textStyle}>{current}</span>/{`${Math.ceil(total/pageSize)}`}页</div>),
                total
            })
        },300)
    }

    const cls = classNames({
        [cascaderPrefixCls]: true,
        [className]: className
    })

    return (
        <Table
            className={cls}
            loading={loading}
            size={'middle'} 
            rowKey={r=>r.id}
            // scroll={{y:400}}
            dataSource={dataSource}
            pagination={paginationState}
            onChange={(...params)=>{console.log(...params,'00000000');setPaginationState(...params)}}
            {...rest}
        />   
    )
}