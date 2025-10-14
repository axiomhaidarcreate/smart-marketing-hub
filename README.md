# Exam Platform

منصة اختبارات متكاملة (Backend + Frontend + Reports + DevOps).

## البنية
- `backend/`: خدمات الـAPI والمصادقة وتوليد PDF.
- `frontend/`: الواجهة الأمامية (React أو Flutter Web).
- `reports-dashboard/`: لوحات التحكم والتقارير.
- `devops/`: النشر، السيرفرات، المراقبة، النسخ الاحتياطية.
- `docs/`: التوثيق.

## التشغيل المحلي (مختصر)
```bash
# من الجذر
docker compose up -d --build
```

## الفروع المقترحة
- `backend-dev`, `frontend-dev`, `reports-dev`, `devops-setup`

## الترخيص
MIT
