import React from 'react'
import Card from '../components/common/Card'
import Sparkline from '../components/charts/Sparkline'
import { funnel, performanceTimeline } from '../data/mockData'

function Analytics() {
  return (
    <div className="page">
      <div className="grid grid--two">
        <Card title="مؤشر الأداء العام" tone="info">
          <div className="analytics__overview">
            <div>
              <p className="analytics__metric">+27%</p>
              <p className="analytics__caption">نمو العملاء المحتملين مقارنة بالفترة السابقة</p>
            </div>
            <Sparkline data={performanceTimeline.map((item) => item.leads)} color="#0f766e" height={80} />
          </div>
        </Card>

        <Card title="قنوات الاكتساب" tone="neutral">
          <div className="analytics__channels">
            <div>
              <h3>البحث المدفوع</h3>
              <p>معدل التحويل 6.4% · تكلفة اكتساب 18 ر.س</p>
            </div>
            <div>
              <h3>وسائل التواصل</h3>
              <p>معدل التحويل 3.1% · تكلفة اكتساب 26 ر.س</p>
            </div>
            <div>
              <h3>الشركاء</h3>
              <p>معدل التحويل 8.2% · تكلفة اكتساب 14 ر.س</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="قمع التحويل" tone="primary">
        <div className="funnel">
          {funnel.map((stage, index) => (
            <div key={stage.label} className="funnel__stage">
              <div className="funnel__bar" style={{ width: `${100 - index * 18}%` }} />
              <div>
                <p className="funnel__label">{stage.label}</p>
                <p className="funnel__value">{stage.value.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid--two">
        <Card title="تحليل الشرائح" tone="neutral">
          <table className="table table--static">
            <thead>
              <tr>
                <th>الشريحة</th>
                <th>المعدل التحويلي</th>
                <th>قيمة العميل LTV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>مدراء التسويق</td>
                <td>5.8%</td>
                <td>3,400 ر.س</td>
              </tr>
              <tr>
                <td>شركات SaaS الناشئة</td>
                <td>4.2%</td>
                <td>2,900 ر.س</td>
              </tr>
              <tr>
                <td>شركات التجارة الإلكترونية</td>
                <td>6.7%</td>
                <td>4,120 ر.س</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card title="الرؤى التنبؤية" tone="info">
          <ul className="predictions">
            <li>من المتوقع نمو الاشتراكات السنوية بنسبة 18% خلال الربع القادم.</li>
            <li>تقليل إنفاق قنوات التواصل بمقدار 12% لن يؤثر على حجم العملاء المتوقعين.</li>
            <li>دمج بيانات CRM سيحسن دقة التقارير الآلية بمقدار 22%.</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default Analytics
