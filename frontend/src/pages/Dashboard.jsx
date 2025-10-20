import React from 'react'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import Sparkline from '../components/charts/Sparkline'
import ProgressBar from '../components/common/ProgressBar'
import {
  kpiCards,
  campaignTable,
  performanceTimeline,
  insights,
  teamMembers
} from '../data/mockData'

const statusTone = {
  'نشطة': 'success',
  'مكتملة': 'info',
  'مجدولة': 'warning',
  'تحت المراجعة': 'neutral'
}

const memberStatusTone = {
  'متصل': 'online',
  'في اجتماع': 'busy',
  'غير متصل': 'offline'
}

function Dashboard() {
  return (
    <div className="page">
      <div className="grid grid--kpi">
        {kpiCards.map((card) => (
          <Card key={card.title} tone={card.tone}>
            <div className="kpi-card">
              <div>
                <p className="kpi-card__title">{card.title}</p>
                <p className="kpi-card__value">{card.value}</p>
                <p className="kpi-card__change">{card.change}</p>
              </div>
              <Sparkline data={card.trend} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid--two">
        <Card title="ملخص الحملات" action={<button type="button" className="btn btn--ghost">عرض الكل</button>}>
          <div className="table">
            <div className="table__head">
              <span>الحملة</span>
              <span>القناة</span>
              <span>الميزانية (ر.س)</span>
              <span>التقدم</span>
            </div>
            {campaignTable.map((campaign) => (
              <div key={campaign.name} className="table__row">
                <div className="table__cell table__cell--main">
                  <p className="table__title">{campaign.name}</p>
                  <p className="table__subtitle">{campaign.channel}</p>
                </div>
                <span className="table__cell">{campaign.channel}</span>
                <span className="table__cell">{campaign.budget}</span>
                <div className="table__cell table__cell--status">
                  <Badge tone={statusTone[campaign.status] || 'neutral'}>{campaign.status}</Badge>
                  <ProgressBar value={campaign.progress} tone={campaign.status === 'مكتملة' ? 'success' : 'primary'} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="التحليلات الأسبوعية">
          <div className="timeline">
            {performanceTimeline.map((item) => (
              <div key={item.label} className="timeline__row">
                <div>
                  <p className="timeline__label">{item.label}</p>
                  <p className="timeline__meta">الإنفاق: {item.spend.toLocaleString()} ر.س</p>
                </div>
                <div className="timeline__metric">
                  <span className="timeline__value">{item.leads}</span>
                  <span className="timeline__caption">عملاء محتملون</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid--three">
        <Card title="رؤى سريعة">
          <ul className="insights">
            {insights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="سير العمل والأتمتة" action={<a href="#" className="btn btn--link">إدارة الأتمتة</a>}>
          <ul className="workflow-list">
            {campaignTable.slice(0, 3).map((campaign) => (
              <li key={campaign.name}>
                <div>
                  <h3>{campaign.name}</h3>
                  <p>{campaign.channel}</p>
                </div>
                <div className="workflow-list__progress">
                  <span>{campaign.progress}%</span>
                  <ProgressBar value={campaign.progress} />
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="فريق الحملة">
          <ul className="team">
            {teamMembers.map((member) => (
              <li key={member.name}>
                <span className={`status-dot status-dot--${memberStatusTone[member.status] || 'offline'}`} aria-hidden />
                <div>
                  <p className="team__name">{member.name}</p>
                  <p className="team__role">{member.role}</p>
                </div>
                <span className="team__status">{member.status}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
