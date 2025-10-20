import React, { useId, useMemo } from 'react'

function Sparkline({ data, color = '#2563eb', height = 56 }) {
  const gradientId = `sparkline-${useId().replace(/[:]/g, '')}`
  const path = useMemo(() => {
    if (!data?.length) return ''
    const max = Math.max(...data)
    const min = Math.min(...data)
    const verticalRange = max - min || 1
    const stepX = 100 / (data.length - 1 || 1)

    return data
      .map((value, index) => {
        const x = index * stepX
        const y = ((value - min) / verticalRange) * 100
        const flippedY = 100 - y
        return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${flippedY.toFixed(2)}`
      })
      .join(' ')
  }, [data])

  return (
    <svg className="sparkline" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 100 L 0 100 Z`} fill={`url(#${gradientId})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export default Sparkline
