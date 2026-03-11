const base = import.meta.env.BASE_URL

const doctors = [
  {
    img: `${base}docPic1.png`,
    name: 'ד"ר רונית לוי',
    role: 'מנהלת רפואית · שיקום הפה',
  },
  {
    img: `${base}docPic2.png`,
    name: 'ד"ר אלין אובציניקוב',
    role: 'מומחה השתלות · כירורגיה',
  },
  {
    img: `${base}docPic3.png`,
    name: 'ד"ר רעי כהן',
    role: 'אורתודנטיה · Invisalign',
  },
];

const credentials = [
  'בוגרי האוניברסיטה העברית ואוניברסיטת תל אביב',
  'השתלמויות בארה"ב, גרמניה ואיטליה',
  'חברי האיגוד הישראלי לרפואת שיניים',
  'מרצים בפורומים בינלאומיים',
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="section-label">
        <div className="eyebrow-line"></div>
        <span>הצוות שלנו</span>
      </div>

      <div className="team-grid">
        <div className="team-copy">
          <h3>
            נבחרת מומחים<br />
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gold)', fontSize: 'inherit' }}>
              בשורה הראשונה
            </em>
          </h3>
          <p>
            כל רופא בצוות שלנו הוא מומחה בתחומו, עם השתלמויות בינלאומיות וניסיון במקרים מורכבים.
            אנחנו עובדים כצוות — כי הפה שלך ראוי לכל המומחיות שלנו.
          </p>
          <div className="credentials">
            {credentials.map((c) => (
              <div className="credential" key={c}>
                <div className="cred-dot"></div>
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="doctors-row">
          {doctors.map((d) => (
            <div className="doctor-card" key={d.name}>
              <div className="doctor-photo">
                <img src={d.img} alt={d.name} />
              </div>
              <div className="doctor-name">{d.name}</div>
              <div className="doctor-role">{d.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
