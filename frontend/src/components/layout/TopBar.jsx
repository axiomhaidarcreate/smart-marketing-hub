import React from 'react'

const ranges = ['آخر 7 أيام', 'آخر 30 يوم', 'ربع سنوي', 'سنة كاملة']

function TopBar({ title, description }) {
  return (
    <header className="topbar">
      <div>
        <h1 className="topbar__title">{title}</h1>
        <p className="topbar__subtitle">{description}</p>
      </div>
      <div className="topbar__actions">
        <label className="topbar__search">
          <span className="visually-hidden">بحث</span>
          <input type="search" placeholder="بحث في المنصة" />
        </label>
        <select aria-label="الإطار الزمني" className="topbar__select">
          {ranges.map((range) => (
            <option key={range}>{range}</option>
          ))}
        </select>
        <button className="btn btn--primary" type="button">
          + حملة جديدة
        </button>
      </div>
    </header>
  )
}

export default TopBar
