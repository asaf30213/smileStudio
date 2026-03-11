const items = [
  'רישיון משרד הבריאות',
  'טכנולוגיה דיגיטלית מתקדמת',
  'מומחים בעלי תארים בינלאומיים',
  'טיפול ללא כאבים',
  'מימון נוח',
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {items.map((item) => (
        <div className="trust-item" key={item}>
          <div className="trust-dot"></div>
          {item}
        </div>
      ))}
    </div>
  );
}
