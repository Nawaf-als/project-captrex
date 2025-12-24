import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-logo">
          <div className="hero-logo-mark">Cx</div>
          <div className="hero-logo-text">
            <span className="hero-logo-name">Captrex</span>
            <span className="hero-logo-tagline">نظام الأداء المالي</span>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">أداء سريع يمكنك الاعتماد عليه</h1>
          <p className="hero-description">
            نظام متقدم يجلب بياناتك المالية بدقة فائقة وسرعة لا مثيل لها. 
            ثق بنظام يعمل بذكاء لتحليل وحساب جميع معاملاتك المالية بشكل تلقائي ومضمون.
          </p>
          <a href="#contact" className="btn btn-primary hero-cta">
            اطلب تجربة
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-icon-wrapper" style={{ 
              background: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
              boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4)'
            }}>
              <i className="card-icon ri-speed-up-line" />
            </div>
            <div className="card-text">سرعة التنفيذ</div>
          </div>
          <div className="hero-card">
            <div className="card-icon-wrapper" style={{ 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)'
            }}>
              <i className="card-icon ri-focus-3-line" />
            </div>
            <div className="card-text">دقة الحسابات</div>
          </div>
          <div className="hero-card">
            <div className="card-icon-wrapper" style={{ 
              background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4)'
            }}>
              <i className="card-icon ri-shield-check-line" />
            </div>
            <div className="card-text">أمان البيانات</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
