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
            <div className="footer-phone">
              <div className="phone-icon-wrapper">
                <i className="ri-phone-line phone-icon"></i>
              </div>
              <span className="phone-number">966504622623+</span>
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
          <p>&copy; 2024 جميع الحقوق محفوظة نظام الأداء المالي</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
