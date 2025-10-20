import React from 'react'

function ProgressBar({ value, tone = 'primary' }) {
  return (
    <div className={`progress progress--${tone}`} aria-hidden>
      <div className="progress__bar" style={{ width: `${value}%` }} />
    </div>
  )
}

export default ProgressBar
