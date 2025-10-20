import React from 'react'
import Card from '../components/common/Card'

function Settings() {
  return (
    <div className="page">
      <div className="grid grid--two">
        <Card title="إعدادات الفريق" tone="neutral">
          <form className="form">
            <label>
              <span>اسم المؤسسة</span>
              <input type="text" defaultValue="Smart Marketing Hub" />
            </label>
            <label>
              <span>النطاق الرئيسي للحملات</span>
              <input type="text" defaultValue="marketing-hub.sa" />
            </label>
            <label className="form__switch">
              <input type="checkbox" defaultChecked />
              <span>تفعيل المصادقة الثنائية لجميع الأعضاء</span>
            </label>
          </form>
        </Card>

        <Card title="التكاملات" tone="info">
          <ul className="integrations">
            <li>
              <div>
                <h3>Google Ads</h3>
                <p>متصل منذ 4 أيام · آخر مزامنة قبل ساعة</p>
              </div>
              <button type="button" className="btn btn--ghost">إدارة</button>
            </li>
            <li>
              <div>
                <h3>Meta Ads</h3>
                <p>متصل · يحدث البيانات كل 3 ساعات</p>
              </div>
              <button type="button" className="btn btn--ghost">إدارة</button>
            </li>
            <li>
              <div>
                <h3>HubSpot CRM</h3>
                <p>جارٍ الإعداد · يتطلب موافقة المسؤول</p>
              </div>
              <button type="button" className="btn btn--primary">متابعة الربط</button>
            </li>
          </ul>
        </Card>
      </div>

      <Card title="إشعارات النظام" tone="primary">
        <div className="notifications">
          <label className="form__switch">
            <input type="checkbox" defaultChecked />
            <span>تنبيهات الأداء اليومي عبر البريد الإلكتروني</span>
          </label>
          <label className="form__switch">
            <input type="checkbox" defaultChecked />
            <span>إرسال تنبيهات Slack عند انخفاض الأداء</span>
          </label>
          <label className="form__switch">
            <input type="checkbox" />
            <span>ملخص أسبوعي موسع عبر البريد</span>
          </label>
        </div>
      </Card>
    </div>
  )
}

export default Settings
