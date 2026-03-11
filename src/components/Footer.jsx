export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">SMILE <span>STUDIO</span></div>
        <ul className="footer-links">
          <li><a href="#services">שירותים</a></li>
          <li><a href="#team">הצוות</a></li>
          <li><a href="#gallery">גלריה</a></li>
          <li><a href="#pricing">מחירים</a></li>
          <li><a href="#">פרטיות</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Smile Studio · כל הזכויות שמורות</span>
        <span>רחוב רוטשילד 42, תל אביב · 03-744-9183</span>
      </div>
    </footer>
  );
}
