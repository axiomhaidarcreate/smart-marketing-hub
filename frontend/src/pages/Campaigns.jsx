import React from 'react'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import ProgressBar from '../components/common/ProgressBar'
import { campaignTable } from '../data/mockData'

const stageFilters = ['جميع الحملات', 'قيد التنفيذ', 'مجدولة', 'منتهية']

function Campaigns() {
  return (
    <div className="page">
      <Card
        title="الحملات النشطة"
        action={
          <div className="segmented-control" role="group" aria-label="فلترة الحملات">
            {stageFilters.map((filter) => (
              <button key={filter} type="button" className="segmented-control__item">
                {filter}
              </button>
            ))}
          </div>
        }
      >
        <div className="table table--campaigns">
          <div className="table__head">
            <span>الحملة</span>
            <span>القناة</span>
            <span>الموازنة</span>
            <span>الحالة</span>
            <span>التقدم</span>
          </div>
          {campaignTable.map((campaign) => (
            <div key={campaign.name} className="table__row">
              <div className="table__cell table__cell--main">
                <p className="table__title">{campaign.name}</p>
                <p className="table__subtitle">{campaign.channel}</p>
              </div>
              <span className="table__cell">{campaign.channel}</span>
              <span className="table__cell">{campaign.budget} ر.س</span>
              <span className="table__cell">
                <Badge tone={campaign.status === 'نشطة' ? 'success' : campaign.status === 'مكتملة' ? 'info' : 'warning'}>
                  {campaign.status}
                </Badge>
              </span>
              <div className="table__cell">
                <ProgressBar value={campaign.progress} tone={campaign.status === 'مكتملة' ? 'success' : 'primary'} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid--two">
        <Card title="مؤشرات القنوات" tone="neutral">
          <ul className="channels">
            {['إعلانات البحث', 'وسائل التواصل', 'البريد الإلكتروني', 'الشبكات الإعلانية'].map((channel) => (
              <li key={channel}>
                <div>
                  <p className="channels__name">{channel}</p>
                  <p className="channels__meta">تكلفة لكل نتيجة · 18.3 ر.س</p>
                </div>
                <Badge tone="info">+6% نمو</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="قائمة المهام" tone="info">
          <ul className="tasks">
            <li>
              <span className="tasks__bullet" aria-hidden />
              إعداد حملات رمضان · الموعد النهائي 12 مارس
            </li>
            <li>
              <span className="tasks__bullet" aria-hidden />
              تحديث صفحات الهبوط لحملة المنتج الجديد
            </li>
            <li>
              <span className="tasks__bullet" aria-hidden />
              مراجعة خطة المحتوى الاجتماعي للأسبوع القادم
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default Campaigns
