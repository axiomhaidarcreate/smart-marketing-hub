import React from 'react'

const toneMap = {
  success: 'badge--success',
  warning: 'badge--warning',
  info: 'badge--info',
  neutral: 'badge--neutral'
}

function Badge({ tone = 'neutral', children }) {
  return <span className={`badge ${toneMap[tone] || toneMap.neutral}`}>{children}</span>
}

export default Badge
