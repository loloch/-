import _ from 'lodash';
import { useRef } from 'react';
/*
    @method:useCompare 用于包装useEffect依赖值，将useEffect严格比较按需求改为浅比较或深比较
    @params：{Objecj|Array} value 依赖值
*/
export const useCompare = (value) =>{
    const ref = useRef(null);
    if(!_.isEqual(value,ref.current)){
        ref.current = value;
    }
    return ref.current
}