import './PerformanceFeatures.css';

function PerformanceFeatures() {
  const features = [
    {
      title: 'سرعة التنفيذ',
      description: 'معالجة آلاف الطلبات في دقائق معدودة تقاريرك المالية جاهزة عندما تحتاجها',
      icon: 'ri-flashlight-line',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      title: 'دقة الحسابات',
      description: 'نسبة دقة تصل إلى 99.9% كل حساب يتم التحقق منه تلقائياً لضمان عدم وجود أخطاء',
      icon: 'ri-focus-3-line',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      glowColor: 'rgba(139, 92, 246, 0.4)'
    },
    {
      title: 'استقرار النظام',
      description: 'يعمل النظام 24/7 بدون توقف بنية تحتية قوية تضمن استمرارية الخدمة دائماً',
      icon: 'ri-shield-star-line',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
      glowColor: 'rgba(124, 58, 237, 0.4)'
    },
    {
      title: 'أمان البيانات',
      description: 'بياناتك محمية بأعلى معايير الأمان تشفير متقدم ونسخ احتياطية يومية',
      icon: 'ri-lock-password-line',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      glowColor: 'rgba(99, 102, 241, 0.4)'
    }
  ];

  return (
    <section className="performance-features section">
      <div className="container">
        <h2 className="section-title">مزايا الأداء</h2>
        <p className="section-subtitle">
          لماذا يختار عملاؤنا نظامنا؟ لأننا نقدم أفضل ما في التقنية
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper" style={{ 
                background: feature.gradient,
                boxShadow: `0 8px 32px ${feature.glowColor}`
              }}>
                <i className={`feature-icon ${feature.icon}`} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerformanceFeatures;
