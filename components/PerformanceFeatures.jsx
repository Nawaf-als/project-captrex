import './PerformanceFeatures.css';

function PerformanceFeatures() {
  const features = [
    {
      title: 'سرعة التنفيذ',
      description: 'معالجة آلاف الطلبات في دقائق معدودة. تقاريرك المالية جاهزة عندما تحتاجها.',
      icon: '⚡',
      color: '#c084fc'
    },
    {
      title: 'دقة الحسابات',
      description: 'نسبة دقة تصل إلى 99.9%. كل حساب يتم التحقق منه تلقائياً لضمان عدم وجود أخطاء.',
      icon: '🎯',
      color: '#a78bfa'
    },
    {
      title: 'استقرار النظام',
      description: 'يعمل النظام 24/7 بدون توقف. بنية تحتية قوية تضمن استمرارية الخدمة دائماً.',
      icon: '🛡️',
      color: '#a855f7'
    },
    {
      title: 'أمان البيانات',
      description: 'بياناتك محمية بأعلى معايير الأمان. تشفير متقدم ونسخ احتياطية يومية.',
      icon: '🔒',
      color: '#9333ea'
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
              <div className="feature-icon-wrapper" style={{ backgroundColor: `${feature.color}20` }}>
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
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
