const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#5b8fb9">
    <path d="M6 1l1.3 2.8 3.1.4-2.2 2.2.5 3.1L6 8l-2.7 1.5.5-3.1L1.6 4.2l3.1-.4L6 1z" />
  </svg>
);

const reviews = [
  {
    text: '"הגעתי עם פחד מרופא שיניים שליווה אותי כל החיים. יצאתי עם חיוך שלא הכרתי. הצוות שינה לי את החיים."',
    avatar: 'מ',
    name: "מיכל ג'",
    treatment: 'ציפויי חרסינה · 2024',
  },
  {
    text: '"שלוש שתלות ביום אחד. הגעתי בשעה 9, יצאתי בשעה 2 עם שיניים חדשות. הטכנולוגיה כאן ממש מתקדמת."',
    avatar: 'ד',
    name: "דוד א'",
    treatment: 'השתלות שיניים · 2024',
  },
  {
    text: '"המרפאה הכי יפה שראיתי. לא מרגיש שאתה אצל רופא שיניים. מרגיש כמו מכון מקצועי עם אנשי מקצוע מהשורה הראשונה."',
    avatar: 'ש',
    name: "שירה מ'",
    treatment: 'Invisalign · 2024',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-label">
        <div className="eyebrow-line"></div>
        <span style={{ color: 'var(--gold)' }}>מה אומרים עלינו</span>
      </div>
      <h2 className="section-title">המטופלים <em style={{ color: 'var(--gold)' }}>מדברים</em></h2>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.name}>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="review-text">{r.text}</p>
            <div className="review-author">
              <div className="author-avatar">{r.avatar}</div>
              <div>
                <span className="author-name">{r.name}</span>
                <span className="author-treatment">{r.treatment}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
