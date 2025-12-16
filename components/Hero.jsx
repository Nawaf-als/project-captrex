import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
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
            <div className="card-icon">⚡</div>
            <div className="card-text">سرعة التنفيذ</div>
          </div>
          <div className="hero-card">
            <div className="card-icon">🎯</div>
            <div className="card-text">دقة الحسابات</div>
          </div>
          <div className="hero-card">
            <div className="card-icon">🔒</div>
            <div className="card-text">أمان البيانات</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
