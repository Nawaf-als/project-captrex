import './WhyPerformance.css';

function WhyPerformance() {
  return (
    <section className="why-performance section">
      <div className="container">
        <h2 className="section-title">لماذا الأداء مهم؟</h2>
        <p className="section-subtitle">
          في عالم الأعمال اليوم، كل ثانية مهمة نظامك المالي يجب أن يكون سريعاً وموثوقاً
        </p>
        
        <div className="why-cards">
          <div className="why-card">
            <div className="why-icon-wrapper" style={{ 
              background: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
              boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4)'
            }}>
              <i className="why-icon ri-time-line" />
            </div>
            <h3>توفير الوقت</h3>
            <p>
              نظام سريع يعني تقارير أسرع، قرارات أسرع، ونمو أعمال أسرع 
              لا تنتظر ساعات لمعرفة وضعك المالي
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon-wrapper" style={{ 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)'
            }}>
              <i className="why-icon ri-briefcase-line" />
            </div>
            <h3>زيادة الثقة</h3>
            <p>
              عندما يعمل نظامك بسلاسة ودقة، تزداد ثقتك في اتخاذ القرارات المهمة 
              والمضي قدماً في مشاريعك باطمئنان
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon-wrapper" style={{ 
              background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4)'
            }}>
              <i className="why-icon ri-bar-chart-2-line" />
            </div>
            <h3>دقة الحسابات</h3>
            <p>
              الأخطاء المالية تكلفك مالاً وسمعة نظامنا يضمن حساب كل شيء بدقة 
              متناهية - من الشحن إلى الضرائب إلى العمولات
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon-wrapper" style={{ 
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)'
            }}>
              <i className="why-icon ri-rocket-line" />
            </div>
            <h3>القدرة على النمو</h3>
            <p>
              نظام قوي يستطيع التعامل مع نمو أعمالك سواء كانت 100 أو 100,000 معاملة، 
              الأداء يبقى ثابتاً ومتسقاً
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPerformance;
