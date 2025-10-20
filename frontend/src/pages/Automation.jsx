import React from 'react'
import Card from '../components/common/Card'
import ProgressBar from '../components/common/ProgressBar'
import Badge from '../components/common/Badge'
import { workflowData } from '../data/mockData'

const workflowStatuses = {
  'On Track': { tone: 'success', label: 'ضمن الخطة' },
  Monitoring: { tone: 'info', label: 'تحت المراقبة' },
  'Needs Attention': { tone: 'warning', label: 'يحتاج تدخلاً' }
}

function Automation() {
  return (
    <div className="page">
      <Card title="مسارات الأتمتة" tone="neutral" action={<button type="button" className="btn btn--primary">+ إضافة مسار</button>}>
        <ul className="workflows">
          {workflowData.map((workflow) => {
            const status = workflowStatuses[workflow.status] || { tone: 'neutral', label: workflow.status }
            return (
              <li key={workflow.name}>
                <div>
                  <h3>{workflow.name}</h3>
                  <p>المحفّز: {workflow.trigger}</p>
                  <p>عدد الخطوات: {workflow.steps}</p>
                </div>
                <div className="workflows__status">
                  <Badge tone={status.tone}>{status.label}</Badge>
                  <ProgressBar value={workflow.completion} tone={status.tone === 'success' ? 'success' : 'primary'} />
                  <span className="workflows__completion">{workflow.completion}%</span>
                </div>
              </li>
            )
          })}
        </ul>
      </Card>

      <div className="grid grid--two">
        <Card title="مكتبة القوالب" tone="info">
          <div className="templates">
            {['الترحيب بالعملاء', 'إعادة تنشيط العملاء', 'زيادة المبيعات', 'تجربة المنتج'].map((template) => (
              <div key={template} className="templates__item">
                <h3>{template}</h3>
                <p>يتضمن رسائل بريدية، تنبيهات Slack، ومهام لفريق المبيعات.</p>
                <button type="button" className="btn btn--ghost">استخدام القالب</button>
              </div>
            ))}
          </div>
        </Card>

        <Card title="مراقبة الأحداث" tone="primary">
          <ul className="events">
            <li>
              <span className="events__time">قبل 5 دقائق</span>
              بدء سير "ترحيب العملاء الجدد" لـ 18 مستخدماً.
            </li>
            <li>
              <span className="events__time">قبل ساعة</span>
              تم تحويل 12 عميلاً إلى خطة مدفوعة عبر مسار الترقية.
            </li>
            <li>
              <span className="events__time">أمس</span>
              34 عميلًا تفاعلوا مع حملة استعادة السلة.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default Automation
