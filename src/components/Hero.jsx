const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="#5b8fb9">
    <path d="M5 1l1.1 2.3L9 3.6 6.9 5.6l.5 2.6L5 6.9 2.6 8.2l.5-2.6L1 3.6l2.9-.3L5 1z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow fade-up fade-up-1">
          <div className="eyebrow-line"></div>
          <span className="eyebrow-text">מרפאת יוקרה · תל אביב</span>
        </div>

        <h1 className="hero-title fade-up fade-up-2">
          <span style={{ color: '#5b8fb9' }}>החיוך</span><br />
          שתמיד<br />
          <em>חלמת עליו</em>
        </h1>

        <p className="hero-subtitle fade-up fade-up-3">
        רפואת שיניים מתקדמת בסביבה טכנולוגית, מומחים מהשורה הראשונה, וחוויה שתגרום לך לחייך — כבר בכניסה.        </p>

        <div className="hero-actions fade-up fade-up-4">
          <button className="btn-dark" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>קביעת תור ←</button>
          <a href="#gallery" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
              <path d="M5.5 7l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            צפה בגלריה
          </a>
        </div>

        <div className="hero-stats fade-up fade-up-4">
          <div>
            <span className="stat-num">1<span>,</span>200<span>+</span></span>
            <span className="stat-label">מטופלים מרוצים</span>
          </div>
          <div>
            <span className="stat-num">15<span>+</span></span>
            <span className="stat-label">שנות ניסיון</span>
          </div>
          <div>
            <span className="stat-num">4<span>.</span>9</span>
            <span className="stat-label">דירוג ממוצע</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <video
          className="hero-img-main"
          src={`${import.meta.env.BASE_URL}4490999-uhd_3840_2160_25fps.mp4`}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.82) brightness(0.96)' }}
        />

        <div className="hero-badge">
          <div className="badge-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2l1.8 3.6L15 6.5l-3 2.9.7 4.1L9 11.5l-3.7 2 .7-4.1-3-2.9 4.2-.9L9 2z" stroke="#5b8fb9" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="badge-text">
            <div className="stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <strong>מרפאה מדורגת #4 בתל אביב</strong>
            <span>Google · 340 ביקורות</span>
          </div>
        </div>
      </div>
    </section>
  );
}
