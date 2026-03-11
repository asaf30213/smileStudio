export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">SMILE <span>STUDIO</span></div>
      <ul className="nav-links">
        <li><a href="#services">שירותים</a></li>
        <li><a href="#team">הצוות</a></li>
        <li><a href="#gallery">גלריה</a></li>
        <li><a href="#pricing">מחירים</a></li>
        <li><a href="#contact">יצירת קשר</a></li>
        <li><a href="#booking" className="nav-cta">קביעת תור</a></li>
      </ul>
    </nav>
  );
}
