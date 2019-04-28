// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      {
        title: '演示页面2',
        children: [
          { path: '/demo/page1', title: '页面 3-1' },
          { path: '/demo/page2', title: '页面 3-2' }
        ]
      }
    ]
  }
]
