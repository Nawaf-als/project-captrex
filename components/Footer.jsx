import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">تواصل معنا</h3>
            <p className="footer-description">
              نحن هنا للإجابة على أسئلتك ومساعدتك في البدء
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">معلومات الاتصال</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <i className="ri-phone-line contact-icon"></i>
                </div>
                <span className="contact-text">966504622623+</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <i className="ri-map-pin-line contact-icon"></i>
                </div>
                <span className="contact-text">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">سريع الوصول</h4>
            <div className="footer-links">
              <a href="#faq" className="footer-link">الأسئلة الشائعة</a>
              <a href="#" className="footer-link">حول النظام</a>
              <a href="#" className="footer-link">الخصوصية</a>
              <a href="#" className="footer-link">الشروط والأحكام</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 جميع الحقوق محفوظة. نظام الأداء المالي</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
