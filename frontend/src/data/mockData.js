export const kpiCards = [
  {
    title: 'الإنفاق الإعلاني',
    value: '124,800 ر.س',
    change: '+12% مقابل الشهر الماضي',
    tone: 'primary',
    trend: [12, 16, 14, 22, 21, 24, 28]
  },
  {
    title: 'العملاء المحتملون',
    value: '5,982',
    change: '+8% عبر جميع القنوات',
    tone: 'success',
    trend: [4, 6, 9, 8, 11, 10, 14]
  },
  {
    title: 'تكلفة الاكتساب',
    value: '21.4 ر.س',
    change: '-6% تحسّن في الكفاءة',
    tone: 'neutral',
    trend: [25, 24, 23, 23, 22, 21, 21]
  },
  {
    title: 'معدل التحويل',
    value: '4.7%',
    change: '+1.1 نقطة مئوية',
    tone: 'info',
    trend: [3.1, 3.4, 3.6, 4.0, 4.1, 4.4, 4.7]
  }
]

export const campaignTable = [
  {
    name: 'إطلاق منتج SaaS',
    channel: 'إعلانات مدفوعة + بريد',
    budget: '45,000',
    status: 'نشطة',
    progress: 78
  },
  {
    name: 'حملة رمضان 2024',
    channel: 'وسائل اجتماعية',
    budget: '32,500',
    status: 'مجدولة',
    progress: 32
  },
  {
    name: 'تنشيط العملاء القدامى',
    channel: 'أتمتة البريد',
    budget: '12,000',
    status: 'مكتملة',
    progress: 100
  },
  {
    name: 'ندوة تعليمية مباشرة',
    channel: 'إعلانات + وِيبينار',
    budget: '18,750',
    status: 'تحت المراجعة',
    progress: 54
  }
]

export const workflowData = [
  {
    name: 'ترحيب العملاء الجدد',
    trigger: 'تسجيل جديد',
    steps: 5,
    completion: 92,
    status: 'On Track'
  },
  {
    name: 'تذكير سلة الشراء',
    trigger: 'ترك سلة',
    steps: 3,
    completion: 68,
    status: 'Monitoring'
  },
  {
    name: 'ترقية خطة الاشتراك',
    trigger: 'استخدام عالي',
    steps: 4,
    completion: 41,
    status: 'Needs Attention'
  }
]

export const audienceSegments = [
  {
    name: 'مهتمون بالتقنية المالية',
    size: '38K عميل',
    growth: '+14% نمو شهري',
    reach: 82
  },
  {
    name: 'شركات ناشئة SaaS',
    size: '22K عميل',
    growth: '+9%',
    reach: 64
  },
  {
    name: 'عملاء كبار الحسابات',
    size: '6.5K عميل',
    growth: '+4%',
    reach: 48
  }
]

export const performanceTimeline = [
  { label: 'الأسبوع 1', spend: 18000, leads: 920 },
  { label: 'الأسبوع 2', spend: 20500, leads: 1014 },
  { label: 'الأسبوع 3', spend: 21940, leads: 1120 },
  { label: 'الأسبوع 4', spend: 24200, leads: 1216 }
]

export const insights = [
  {
    title: 'الحملة الأعلى أداء',
    detail: 'إطلاق منتج SaaS يولد 42% من العملاء المحتملين هذا الشهر.'
  },
  {
    title: 'قناة بحاجة لتحسين',
    detail: 'حملة وسائل التواصل تحتاج رفع معدل النقر من 1.8% إلى 2.5%.'
  },
  {
    title: 'فرصة أتمتة',
    detail: 'أتمتة تدفق العملاء القدامى قد تقلل التكلفة بمقدار 8%. '
  }
]

export const funnel = [
  { label: 'زيارات الموقع', value: 128000 },
  { label: 'تفاعلات الحملة', value: 34800 },
  { label: 'عملاء محتملون', value: 5982 },
  { label: 'عملاء جدد', value: 1840 }
]

export const teamMembers = [
  { name: 'سارة القحطاني', role: 'مديرة الأداء الإعلاني', status: 'متصل' },
  { name: 'محمد السبيعي', role: 'محلل بيانات الحملات', status: 'في اجتماع' },
  { name: 'ليان العمر', role: 'مسؤولة علاقات العملاء', status: 'غير متصل' }
]
