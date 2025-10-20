import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import routeConfig from '../../routes'

function Layout() {
  const location = useLocation()
  const currentRoute = routeConfig.find((route) => route.path === location.pathname) || {
    name: 'Smart Marketing Hub',
    description: 'منصة موحدة لإدارة الحملات التسويقية.'
  }

  return (
    <div className="app-shell">
      <Sidebar currentPath={location.pathname} />
      <div className="app-content">
        <TopBar title={currentRoute.name} description={currentRoute.description} />
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
