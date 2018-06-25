module.exports = {
    users: [
        {
            id: '001',
            username: 'admin',
            password: '123456',
            gender: 'man'
        },
        {
            id: '002',
            username: 'liubb',
            password: '654321',
            gender: 'woman'
        }
    ],
    menusAdmin: [
        {
            id: '100',
            name: '系统管理',
            icon:'el-icon-location',
            path: '',
            subMenus:[
                {
                    id: '101',
                    name: '用户管理',
                    path: 'sys-user'
                },
                {
                    id: '102',
                    name: '角色管理',
                    path: 'sys-role'
                },
                {
                    id: '103',
                    name: '菜单管理',
                    path: 'sys-menu'
                }
            ]
        }
    ]
    ,
    menusUser: [
        {
            id: '100',
            name: '信息管理',
            icon:'el-icon-location',
            path: '',
            subMenus:[
                {
                    id: '101',
                    name: '用户管理',
                    path: 'sys-user'
                },
                {
                    id: '102',
                    name: '角色管理',
                    path: 'sys-role'
                }
            ]
        }
    ]
}