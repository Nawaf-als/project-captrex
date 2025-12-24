import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'جلب الطلبات المدفوعة فقط',
      description: 'نظامنا يتصل بمنصاتك التجارية ويجلب تلقائياً جميع الطلبات المدفوعة فقط. لا مزيد من التصفية اليدوية أو فحص كل طلب على حدة.',
      icon: 'ri-download-cloud-2-line',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      number: '02',
      title: 'معالجة ذكية للبيانات المالية',
      description: 'باستخدام تقنيات متقدمة، يقوم النظام بتحليل وتنظيم بياناتك المالية بدقة. يتم التحقق من كل معلومة تلقائياً لضمان الدقة الكاملة.',
      icon: 'ri-cpu-line',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      glowColor: 'rgba(139, 92, 246, 0.4)'
    },
    {
      number: '03',
      title: 'حساب تلقائي للشحن والضريبة والعمولات',
      description: 'يحسب النظام تلقائياً جميع التكاليف: الشحن، الضرائب، العمولات، والرسوم. كل شيء محسوب بدقة متناهية حسب القوانين والمعايير المطبقة.',
      icon: 'ri-calculator-line',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
      glowColor: 'rgba(124, 58, 237, 0.4)'
    }
  ];

  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="section-title">كيف يعمل نظامنا؟</h2>
        <p className="section-subtitle">
          عملية بسيطة لكنها قوية - من جلب البيانات إلى الحساب النهائي
        </p>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-header">
                <div className="step-number">{step.number}</div>
                <div className="step-icon-wrapper" style={{ 
                  background: step.gradient,
                  boxShadow: `0 8px 32px ${step.glowColor}`
                }}>
                  <i className={`step-icon ${step.icon}`} />
                </div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
