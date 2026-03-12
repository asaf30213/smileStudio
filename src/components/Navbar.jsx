import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

      <button className={`nav-hamburger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="תפריט">
        <span /><span /><span />
      </button>

      {open && (
        <ul className="nav-mobile-menu">
          <li><a href="#services" onClick={() => setOpen(false)}>שירותים</a></li>
          <li><a href="#team" onClick={() => setOpen(false)}>הצוות</a></li>
          <li><a href="#gallery" onClick={() => setOpen(false)}>גלריה</a></li>
          <li><a href="#pricing" onClick={() => setOpen(false)}>מחירים</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>יצירת קשר</a></li>
          <li><a href="#booking" className="nav-cta" onClick={() => setOpen(false)}>קביעת תור</a></li>
        </ul>
      )}
    </nav>
  );
}
