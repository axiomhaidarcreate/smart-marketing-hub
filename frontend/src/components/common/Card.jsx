import React from 'react'

function Card({ title, action, children, tone = 'default', footer }) {
  const toneClass = tone && tone !== 'default' ? ` card--${tone}` : ''
  return (
    <section className={`card${toneClass}`}>
      {(title || action) && (
        <div className="card__header">
          <h2>{title}</h2>
          {action && <div className="card__action">{action}</div>}
        </div>
      )}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </section>
  )
}

export default Card
