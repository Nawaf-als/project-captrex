import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'جلب الطلبات المدفوعة فقط',
      description: 'نظامنا يتصل بمنصاتك التجارية ويجلب تلقائياً جميع الطلبات المدفوعة فقط. لا مزيد من التصفية اليدوية أو فحص كل طلب على حدة.',
      icon: '📦'
    },
    {
      number: '02',
      title: 'معالجة ذكية للبيانات المالية',
      description: 'باستخدام تقنيات متقدمة، يقوم النظام بتحليل وتنظيم بياناتك المالية بدقة. يتم التحقق من كل معلومة تلقائياً لضمان الدقة الكاملة.',
      icon: '🧠'
    },
    {
      number: '03',
      title: 'حساب تلقائي للشحن والضريبة والعمولات',
      description: 'يحسب النظام تلقائياً جميع التكاليف: الشحن، الضرائب، العمولات، والرسوم. كل شيء محسوب بدقة متناهية حسب القوانين والمعايير المطبقة.',
      icon: '💰'
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
                <div className="step-icon">{step.icon}</div>
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
