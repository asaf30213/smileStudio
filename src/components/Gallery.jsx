const base = import.meta.env.BASE_URL

const galleryItems = [
  {
    img: `${base}pic1.png`,
    treatment: 'ציפויי חרסינה',
    detail: '8 ציפויים · 2 ביקורים · מיכל, 34',
  },
  {
    img: `${base}pic2.png`,
    treatment: 'השתלת שיניים',
    detail: '3 שתלים · שיקום מיידי · שירה, 12',
  },
  {
    img: `${base}pic3.png`,
    treatment: 'יישור + הלבנה',
    detail: 'Invisalign 14 חודשים · דוד, 63',
  },
  {
    img: `${base}pic4.png`,
    treatment: 'שיקום מלא',
    detail: '20 כתרים · 6 ביקורים · אירנה, 35',
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="section-label">
          <div className="eyebrow-line"></div>
          <span>תוצאות אמיתיות</span>
        </div>
        <h2 className="section-title"><em>תוצאות</em></h2>
      </div>

      <div className="gallery-scroll">
        {galleryItems.map((item, i) => (
          <div className="gallery-card" key={i}>
            <div className="gallery-img-single">
              <img src={item.img} alt={item.treatment} />
            </div>
            <div className="gallery-treatment">{item.treatment}</div>
            <div className="gallery-detail">{item.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
