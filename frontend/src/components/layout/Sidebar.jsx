import React from 'react'
import { NavLink } from 'react-router-dom'
import routeConfig from '../../routes'

const extraLinks = [
  { label: 'دليل الاستخدام', href: '#', icon: '📘' },
  { label: 'مركز الدعم', href: '#', icon: '🛠️' }
]

function Sidebar({ currentPath }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__logo">SM</span>
        <div>
          <p className="sidebar__title">Smart Marketing Hub</p>
          <p className="sidebar__subtitle">منصة نمو متكاملة</p>
        </div>
      </div>
      <nav className="sidebar__nav">
        {routeConfig.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar__link ${isActive || currentPath === item.path ? 'sidebar__link--active' : ''}`
            }
          >
            <span className="sidebar__icon" aria-hidden>{item.icon || '•'}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar__footer">
        {extraLinks.map((link) => (
          <a key={link.label} className="sidebar__support" href={link.href}>
            <span aria-hidden>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
