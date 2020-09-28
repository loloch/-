const menus = [
    {
        name:'赛题管理',
        key:'question',//同url相关，用于刷新页面保持所选中菜单的展开状态
        children:[
            {
                name:'pd',
                key:'pd',
                children:[
                    {
                        name:'pd111',
                        path:'/question/pd/list'
                    }
                ]
            },
            {
                name:'user',
                path:'/question/User'
            }
        ]
    },
    {
        name:'试卷管理',
        key:'papers',
        children:[
            {
                name:'pd',
                path:'/papers/Pd'
            },
            {
                name:'user',
                path:'/papers/User'
            }
        ]
    }
];

export default menus;