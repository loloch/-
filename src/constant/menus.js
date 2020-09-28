const menus = [
    {
        menuName:'赛题管理',
        key:'question',
        childs:[
            {
                menuName:'pd',
                key:'pd',
                childs:[
                    {
                        menuName:'pd111',
                        url:'/home/question/pd/list'
                    }
                ]
            },
            {
                menuName:'user',
                url:'/home/question/User'
            }
        ]
    },
    {
        menuName:'试卷管理',
        key:'papers',
        childs:[
            {
                menuName:'pd',
                url:'/home/papers/Pd'
            },
            {
                menuName:'user',
                url:'/home/papers/User'
            }
        ]
    }
];

export default menus;