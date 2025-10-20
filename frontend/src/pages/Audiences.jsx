import React from 'react'
import Card from '../components/common/Card'
import ProgressBar from '../components/common/ProgressBar'
import { audienceSegments } from '../data/mockData'

function Audiences() {
  return (
    <div className="page">
      <Card title="شرائح الاستهداف" tone="neutral">
        <ul className="segments">
          {audienceSegments.map((segment) => (
            <li key={segment.name}>
              <div>
                <h3>{segment.name}</h3>
                <p>{segment.size}</p>
                <p className="segments__growth">{segment.growth}</p>
              </div>
              <div className="segments__progress">
                <span>{segment.reach}%</span>
                <ProgressBar value={segment.reach} tone={segment.reach > 70 ? 'success' : 'primary'} />
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid grid--two">
        <Card title="رحلة العميل" tone="info">
          <ol className="journey">
            <li>
              اكتشاف العلامة · الإعلانات الممولة + محتوى المدونة
            </li>
            <li>
              التفاعل · تنزيل دليل مجاني + الاشتراك في القائمة البريدية
            </li>
            <li>
              التحويل · سلسلة رسائل مخصصة + اتصال فريق المبيعات
            </li>
            <li>
              الولاء · برنامج نقاط وتوصيات العملاء الحاليين
            </li>
          </ol>
        </Card>

        <Card title="تخصيص الرسائل" tone="primary">
          <div className="persona">
            <h3>شخصية: مدير تسويق رقمي</h3>
            <p>يبحث عن منصة موحدة لتقليل الوقت في إدارة الحملات وزيادة دقة التقارير.</p>
            <ul>
              <li>القنوات المفضلة: البريد الإلكتروني، لينكدإن، الندوات الرقمية.</li>
              <li>مؤشرات النجاح: تكلفة الاكتساب، نمو العملاء المحتملين، معدل التحويل.</li>
              <li>احتياجات أساسية: رؤية موحدة وسير عمل آلي للتنفيذ.</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Audiences
