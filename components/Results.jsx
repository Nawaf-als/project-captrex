import { useState, useEffect } from 'react';
import './Results.css';

function Results() {
  const [counters, setCounters] = useState({
    processingTime: 0,
    ordersProcessed: 0,
    accuracy: 0
  });

  const stats = [
    {
      value: counters.processingTime,
      suffix: ' ثانية',
      label: 'متوسط زمن المعالجة',
      description: 'للطلب الواحد',
      icon: 'ri-time-line',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      value: counters.ordersProcessed,
      suffix: ' ألف',
      label: 'عدد الطلبات المعالجة',
      description: 'شهرياً',
      icon: 'ri-stack-line',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      glowColor: 'rgba(139, 92, 246, 0.4)'
    },
    {
      value: counters.accuracy,
      suffix: '%',
      label: 'نسبة الدقة',
      description: 'في الحسابات',
      icon: 'ri-checkbox-circle-line',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
      glowColor: 'rgba(124, 58, 237, 0.4)'
    }
  ];

  useEffect(() => {
    const targetValues = { processingTime: 2.5, ordersProcessed: 150, accuracy: 99.9 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      
      setCounters({
        processingTime: (targetValues.processingTime * progress).toFixed(1),
        ordersProcessed: Math.floor(targetValues.ordersProcessed * progress),
        accuracy: (targetValues.accuracy * progress).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="results section">
      <div className="container">
        <h2 className="section-title">أرقام تتحدث عن نفسها</h2>
        <p className="section-subtitle">
          نتائج حقيقية توضح قوة وكفاءة نظامنا
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper" style={{ 
                background: stat.gradient,
                boxShadow: `0 8px 32px ${stat.glowColor}`
              }}>
                <i className={`stat-icon ${stat.icon}`} />
              </div>
              <div className="stat-value">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
