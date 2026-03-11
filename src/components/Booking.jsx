const points = [
  'ייעוץ ראשוני חינם',
  'תוכנית טיפול דיגיטלית',
  'מימון ב-0% ריבית',
  'זמינות מהירה',
];

export default function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="booking-copy">
        <div className="section-label">
          <div className="eyebrow-line"></div>
          <span>קביעת תור</span>
        </div>
        <h2>מוכנים<br /><em>לחיוך החדש</em><br />שלכם?</h2>
        <p>ייעוץ ראשוני ללא עלות. נבנה יחד תוכנית טיפול מותאמת אישית.</p>
        <div className="booking-points">
          {points.map((p) => (
            <div className="booking-point" key={p}>
              <div className="cred-dot"></div>
              {p}
            </div>
          ))}
        </div>
        <button className="btn-dark">קביעת תור עכשיו ←</button>
      </div>

      <div className="booking-form">
        <div className="form-title">ייעוץ חינם</div>
        <div className="form-sub">נחזור אליכם תוך 24 שעות</div>
        <div className="form-row">
          <input type="text" placeholder="שם מלא" />
          <input type="text" placeholder="טלפון" />
        </div>
        <div className="form-group">
          <select defaultValue="">
            <option value="" disabled>סוג הטיפול המבוקש</option>
            <option>השתלות שיניים</option>
            <option>אסתטיקה דנטלית</option>
            <option>יישור שיניים</option>
            <option>שיקום מלא</option>
            <option>אחר</option>
          </select>
        </div>
        <div className="form-group">
          <select defaultValue="">
            <option value="" disabled>מתי נוח לך?</option>
            <option>בוקר (08:00–12:00)</option>
            <option>צהריים (12:00–16:00)</option>
            <option>אחה&quot;צ (16:00–20:00)</option>
          </select>
        </div>
        <button className="submit-btn">קביעת ייעוץ חינם ←</button>
        <button className="wa-btn">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 00-6.07 10.47L1 15l3.63-.94A7 7 0 108 1zm0 12.6a5.6 5.6 0 01-2.85-.78l-.2-.12-2.16.56.57-2.1-.13-.22A5.6 5.6 0 118 13.6z" />
          </svg>
          שלח הודעה בוואטסאפ
        </button>
      </div>
    </section>
  );
}
