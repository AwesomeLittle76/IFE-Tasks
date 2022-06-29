import React, { Suspense } from 'react'

import type { RouteObject } from 'react-router-dom'
import Index from '../pages/index'

// React.lazy 配合 import() 实现懒加载
const About = React.lazy(() => import('../pages/about'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<span>loading component</span>}>
        <About />
      </Suspense>
    ),
  },
]

export default routes
