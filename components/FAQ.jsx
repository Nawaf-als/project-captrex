import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'كم يستغرق النظام لمعالجة الطلبات؟',
      answer: 'يستغرق النظام في المتوسط 2-3 ثوانٍ لمعالجة كل طلب. حتى مع الآلاف من الطلبات، يتم الانتهاء من المعالجة في دقائق معدودة.'
    },
    {
      question: 'كيف أتأكد من دقة الحسابات؟',
      answer: 'نظامنا يستخدم خوارزميات متعددة للتحقق من كل حساب. بالإضافة إلى ذلك، يمكنك مراجعة التقارير التفصيلية التي تظهر كل خطوة في عملية الحساب.'
    },
    {
      question: 'هل يمكن الاعتماد على النظام في الحسابات المالية المهمة؟',
      answer: 'نعم بالتأكيد. النظام مصمم خصيصاً للتعامل مع الحسابات المالية الحساسة. نسبة الدقة تصل إلى 99.9% ونوفر نسخ احتياطية يومية لجميع بياناتك.'
    },
    {
      question: 'ماذا لو كان لدي آلاف الطلبات؟ هل سيتباطأ النظام؟',
      answer: 'لا، على الإطلاق. نظامنا مصمم ليتعامل مع أي حجم من الطلبات. سواء كانت 100 أو 100,000 طلب، الأداء يبقى ثابتاً وسريعاً.'
    },
    {
      question: 'هل بياناتي آمنة؟',
      answer: 'نعم، أمان بياناتك هو أولويتنا القصوى. نستخدم تشفيراً متقدماً، ونسخ احتياطية يومية، ونتبع أفضل معايير الأمان في الصناعة.'
    },
    {
      question: 'كيف يمكنني تجربة النظام؟',
      answer: 'يمكنك النقر على زر "اطلب تجربة" في أعلى الصفحة وسنقوم بالتواصل معك لإعداد تجربة مجانية تمكنك من رؤية النظام في العمل.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <h2 className="section-title">أسئلة شائعة</h2>
        <p className="section-subtitle">
          كل ما تريد معرفته عن أداء ودقة نظامنا
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
