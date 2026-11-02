import { FormEvent, ReactNode, useState } from 'react'

type IconName =
  | 'arrow'
  | 'calendar'
  | 'call'
  | 'check'
  | 'chevron'
  | 'clock'
  | 'close'
  | 'doctor'
  | 'heart'
  | 'instagram'
  | 'location'
  | 'menu'
  | 'shield'
  | 'sparkle'
  | 'tooth'

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4m8-4v4M3 10h18" /></>,
    call: <path d="M8.5 3.5 11 8 8 10c1.6 3.2 3.8 5.4 7 7l2-3 4.5 2.5-.8 3.1c-.3 1-1.2 1.7-2.2 1.6C9.8 20.3 3.7 14.2 2.8 5.5c-.1-1 .6-1.9 1.6-2.2l3.1-.8Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    doctor: <><circle cx="12" cy="7" r="4" /><path d="M4 21c.5-5 3-8 8-8s7.5 3 8 8M8 14.5l4 3 4-3" /></>,
    heart: <path d="M20.8 4.7a5.4 5.4 0 0 0-7.6 0L12 5.9l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.7a5.4 5.4 0 0 0 0-7.6Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    shield: <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8 7.5 9.5 4.3-1.5 7.5-4.9 7.5-9.5V6L12 3Z" />,
    sparkle: <path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Zm14-3 .8 2.2 2.2.8-2.2.8L19 18l-.8-2.2L16 15l2.2-.8L19 12Z" />,
    tooth: <path d="M12 4.5c-2.2-2-5.6-2-7.2.1-2.1 2.7-.7 6.4.4 9.3.8 2.1 1.4 6.6 3.3 6.6 2.1 0 1.4-5.5 3.5-5.5s1.4 5.5 3.5 5.5c1.9 0 2.5-4.5 3.3-6.6 1.1-2.9 2.5-6.6.4-9.3-1.6-2.1-5-2.1-7.2-.1Z" />,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const services = [
  { icon: 'tooth' as IconName, title: 'ایمپلنت دندان', text: 'جایگزینی اصولی دندان از دست‌رفته با طراحی طبیعی و برنامه درمانی دقیق.' },
  { icon: 'sparkle' as IconName, title: 'لمینت و کامپوزیت', text: 'اصلاح فرم و رنگ دندان‌ها با رویکردی ظریف، طبیعی و متناسب با چهره.' },
  { icon: 'shield' as IconName, title: 'ارتودنسی', text: 'مرتب‌سازی دندان‌ها با روش‌های متناسب با سن، شرایط فک و سبک زندگی شما.' },
  { icon: 'sparkle' as IconName, title: 'سفید کردن دندان', text: 'روشن‌تر شدن لبخند با مواد استاندارد و زیر نظر مستقیم دندان‌پزشک.' },
  { icon: 'heart' as IconName, title: 'عصب‌کشی', text: 'درمان دقیق ریشه با هدف حفظ دندان، کنترل درد و بازگشت آسایش.' },
  { icon: 'tooth' as IconName, title: 'ترمیم دندان', text: 'بازسازی دندان‌های آسیب‌دیده با مواد باکیفیت و حفظ ظاهر طبیعی.' },
]

const doctors = [
  {
    name: 'دکتر نازنین فرهمند',
    specialty: 'دندان‌پزشک زیبایی و ترمیمی',
    bio: 'با تمرکز بر طراحی لبخند طبیعی و درمان‌های محافظه‌کارانه متناسب با نیاز هر مراجعه‌کننده.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'دکتر آرمان نیک‌روش',
    specialty: 'دندان‌پزشک جراحی و ایمپلنت',
    bio: 'برنامه‌ریزی دقیق درمان و همراهی قدم‌به‌قدم برای تجربه‌ای آگاهانه، آرام و قابل‌اعتماد.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'دکتر سارا مهدوی',
    specialty: 'دندان‌پزشک ارتودنسی',
    bio: 'ارائه طرح درمان شخصی‌سازی‌شده با توجه به فرم صورت و شرایط منحصربه‌فرد هر بیمار.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85',
  },
]

const faqs = [
  ['چگونه نوبت رزرو کنم؟', 'فرم رزرو آنلاین را تکمیل کنید یا با شماره کلینیک تماس بگیرید. همکاران ما برای هماهنگی زمان مناسب با شما تماس خواهند گرفت.'],
  ['آیا مشاوره قبل از درمان انجام می‌شود؟', 'بله، پیش از شروع درمان معاینه و مشاوره انجام می‌شود تا نیازها، گزینه‌های درمانی و مسیر پیشنهادی به‌طور شفاف بررسی شوند.'],
  ['چه خدماتی ارائه می‌دهید؟', 'خدمات ایمپلنت، زیبایی و ترمیمی، ارتودنسی، سفید کردن، درمان ریشه و مراقبت‌های پیشگیرانه در کلینیک ارائه می‌شود.'],
  ['ساعات کاری کلینیک چیست؟', 'شنبه تا چهارشنبه از ساعت ۹ تا ۲۰ و پنج‌شنبه‌ها از ساعت ۹ تا ۱۵ در خدمت شما هستیم.'],
]

function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`section-title ${center ? 'section-title--center' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell" dir="rtl">
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="#home" aria-label="کلینیک دندان‌پزشکی لبخند">
            <span className="brand__mark"><Icon name="tooth" size={26} /></span>
            <span><strong>کلینیک لبخند</strong><small>دندان‌پزشکی تخصصی</small></span>
          </a>
          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="منوی اصلی">
            <button className="nav__close" onClick={closeMenu} aria-label="بستن منو"><Icon name="close" /></button>
            {['صفحه اصلی', 'خدمات', 'پزشکان', 'درباره ما', 'نظرات بیماران', 'تماس با ما'].map((item, index) => (
              <a key={item} href={['#home', '#services', '#doctors', '#about', '#reviews', '#contact'][index]} onClick={closeMenu}>{item}</a>
            ))}
          </nav>
          <div className="header__actions">
            <a className="header__phone" href="tel:02112345678"><Icon name="call" size={18} /><span>۰۲۱ ۱۲۳۴ ۵۶۷۸</span></a>
            <a className="btn btn--primary btn--small" href="#appointment">رزرو نوبت</a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="نمایش منو"><Icon name="menu" /></button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__wash" />
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="eyebrow-pill"><span /> تجربه‌ای آرام، دقیق و انسانی</div>
              <h1>لبخندی زیبا،<br /><em>با اطمینان و آرامش</em></h1>
              <p>با بهره‌گیری از تجهیزات مدرن و تیمی متخصص، سلامت و زیبایی لبخند شما در اولویت ماست.</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#appointment"><Icon name="calendar" size={19} />رزرو نوبت آنلاین</a>
                <a className="btn btn--ghost" href="#services">مشاهده خدمات<Icon name="arrow" size={18} /></a>
              </div>
              <div className="hero__trust">
                <div><Icon name="shield" /><span><strong>درمان شفاف</strong><small>توضیح کامل مسیر درمان</small></span></div>
                <div><Icon name="heart" /><span><strong>مراقبت شخصی</strong><small>متناسب با نیاز شما</small></span></div>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__image-frame">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=90" alt="فضای روشن و مدرن کلینیک دندان‌پزشکی" />
              </div>
              <div className="hero__note">
                <span className="hero__note-icon"><Icon name="sparkle" /></span>
                <span><small>هدف ما</small><strong>یک تجربه درمانی آرام و خوشایند</strong></span>
              </div>
              <div className="hero__badge"><Icon name="check" /><span>استانداردهای<br />بهداشتی دقیق</span></div>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-head">
              <SectionTitle eyebrow="خدمات کلینیک" title="مراقبتی کامل برای لبخند شما" text="از درمان‌های ضروری تا طراحی لبخند، هر مسیر درمان با معاینه دقیق و گفت‌وگوی شفاف آغاز می‌شود." />
              <a className="text-link" href="#appointment">مشاوره برای انتخاب خدمت <Icon name="arrow" size={17} /></a>
            </div>
            <div className="services__grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="service-card__number">۰{index + 1}</span>
                  <span className="service-card__icon"><Icon name={service.icon} size={28} /></span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#appointment">اطلاعات بیشتر <Icon name="arrow" size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about__grid">
            <div className="about__visual">
              <img className="about__main-image" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90" alt="دندان‌پزشک در حال گفت‌وگو با مراجعه‌کننده" />
              <div className="about__caption"><Icon name="heart" /><span>از اولین مشاوره تا پایان درمان، کنار شما هستیم.</span></div>
            </div>
            <div className="about__content">
              <SectionTitle eyebrow="چرا کلینیک لبخند؟" title="اعتماد شما، ارزشمندترین بخش درمان است" text="در کلینیک لبخند، کیفیت فقط به نتیجه درمان محدود نمی‌شود؛ از زمان ورود تا پیگیری پس از درمان، تجربه‌ای محترمانه و منظم برای شما می‌سازیم." />
              <div className="features">
                {[
                  ['sparkle', 'تجهیزات مدرن', 'استفاده از فناوری‌های به‌روز تشخیصی و درمانی'],
                  ['doctor', 'پزشکان متخصص', 'همکاری تیمی برای انتخاب مسیر درمان مناسب'],
                  ['shield', 'رعایت اصول بهداشتی', 'پروتکل‌های دقیق ضدعفونی و آماده‌سازی'],
                  ['heart', 'محیط آرام و مجهز', 'فضایی روشن و دلنشین برای کاهش اضطراب'],
                  ['check', 'برخورد حرفه‌ای', 'شنیدن دغدغه‌های شما با احترام و حوصله'],
                  ['clock', 'نوبت‌دهی منظم', 'مدیریت زمان و هماهنگی دقیق مراجعه'],
                ].map(([icon, title, text]) => (
                  <div className="feature" key={title}>
                    <span><Icon name={icon as IconName} size={21} /></span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="doctors section" id="doctors">
          <div className="container">
            <SectionTitle eyebrow="تیم درمان" title="پزشکانی که با دقت گوش می‌دهند" text="اطلاعات زیر نمونه و قابل ویرایش است؛ هر درمان پس از معاینه و مشاوره اختصاصی برنامه‌ریزی می‌شود." center />
            <div className="doctors__grid">
              {doctors.map((doctor) => (
                <article className="doctor-card" key={doctor.name}>
                  <div className="doctor-card__image"><img src={doctor.image} alt={`پرتره نمونه ${doctor.name}`} /></div>
                  <div className="doctor-card__body">
                    <span>{doctor.specialty}</span>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.bio}</p>
                    <a className="btn btn--outline" href="#appointment">رزرو نوبت <Icon name="calendar" size={17} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery section">
          <div className="container">
            <div className="section-head">
              <SectionTitle eyebrow="فضای کلینیک" title="طراحی‌شده برای آرامش شما" text="محیطی پاکیزه، روشن و مجهز که با هدف آسودگی مراجعه‌کنندگان شکل گرفته است." />
            </div>
            <div className="gallery__grid">
              <figure className="gallery__item gallery__item--large"><img src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?auto=format&fit=crop&w=1400&q=85" alt="اتاق درمان مدرن" /><figcaption>اتاق‌های درمان مدرن</figcaption></figure>
              <figure className="gallery__item"><img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85" alt="تجهیزات دندان‌پزشکی" /><figcaption>تجهیزات دقیق</figcaption></figure>
              <figure className="gallery__item gallery__item--wide"><img src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?auto=format&fit=crop&w=1200&q=85" alt="پذیرش کلینیک" /><figcaption>پذیرش آرام و صمیمی</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="container reviews__grid">
            <div className="reviews__intro">
              <SectionTitle eyebrow="تجربه مراجعه‌کنندگان" title="حسی که از یک مراقبت خوب باقی می‌ماند" text="نظرات زیر صرفاً نمونه‌های نمایشی و قابل ویرایش برای طراحی وب‌سایت هستند و به‌عنوان نظر تأییدشده منتشر نشده‌اند." />
              <div className="reviews__quote">“</div>
            </div>
            <div className="reviews__cards">
              {[
                ['مریم رستگار', 'نمونه نظر بیمار', 'از توضیح مرحله‌به‌مرحله درمان و آرامشی که تیم کلینیک ایجاد کرد بسیار راضی بودم. همه‌چیز منظم و حرفه‌ای پیش رفت.'],
                ['سامان بهشتی', 'نمونه نظر بیمار', 'فضای کلینیک بسیار تمیز و آرام بود و برای انتخاب روش درمان، با حوصله به تمام سؤال‌هایم پاسخ داده شد.'],
                ['الهام کریمی', 'نمونه نظر بیمار', 'برخورد محترمانه و پیگیری پس از درمان برای من ارزشمند بود. تجربه‌ای مطمئن و دور از اضطراب داشتم.'],
              ].map(([name, type, text]) => (
                <article className="review-card" key={name}>
                  <div className="stars" aria-label="پنج ستاره">★★★★★</div>
                  <p>{text}</p>
                  <div className="review-card__person"><span>{name.charAt(0)}</span><div><strong>{name}</strong><small>{type}</small></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="appointment section" id="appointment">
          <div className="container appointment__shell">
            <div className="appointment__aside">
              <span className="appointment__eyebrow">رزرو آسان و سریع</span>
              <h2>اولین قدم برای لبخندی سالم‌تر را بردارید</h2>
              <p>فرم را تکمیل کنید؛ همکاران ما برای هماهنگی زمان مناسب و پاسخ به پرسش‌های شما تماس می‌گیرند.</p>
              <div className="appointment__assurance">
                <span><Icon name="check" /></span>
                <div><strong>بدون تعهد به شروع درمان</strong><small>ابتدا شرایط شما بررسی و گزینه‌ها شفاف توضیح داده می‌شوند.</small></div>
              </div>
              <a className="appointment__call" href="tel:02112345678"><Icon name="call" /><span><small>رزرو تلفنی</small><strong>۰۲۱ ۱۲۳۴ ۵۶۷۸</strong></span></a>
            </div>
            <form className="appointment__form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="success-message" role="status">
                  <span><Icon name="check" size={32} /></span>
                  <h3>درخواست شما ثبت شد</h3>
                  <p>برای هماهنگی نهایی نوبت، در اولین فرصت با شما تماس خواهیم گرفت.</p>
                  <button type="button" className="btn btn--outline" onClick={() => setSubmitted(false)}>ثبت درخواست دیگر</button>
                </div>
              ) : (
                <>
                  <div className="form-heading"><h3>درخواست رزرو نوبت</h3><span>پاسخ‌گویی در ساعات کاری</span></div>
                  <div className="form-grid">
                    <label><span>نام و نام خانوادگی</span><input required type="text" placeholder="مثلاً سارا احمدی" /></label>
                    <label><span>شماره موبایل</span><input required type="tel" inputMode="tel" placeholder="۰۹۱۲ ۱۲۳ ۴۵۶۷" dir="rtl" /></label>
                    <label><span>انتخاب خدمت</span><select required defaultValue=""><option value="" disabled>خدمت مورد نظر</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label>
                    <label><span>تاریخ مراجعه</span><input required type="text" placeholder="مثلاً ۱۴۰۴/۰۳/۲۰" /></label>
                    <label className="form-grid__full"><span>توضیحات <small>(اختیاری)</small></span><textarea rows={3} placeholder="اگر نکته‌ای درباره شرایط خود دارید، بنویسید..." /></label>
                  </div>
                  <button className="btn btn--primary btn--wide" type="submit">درخواست رزرو نوبت <Icon name="arrow" size={18} /></button>
                  <p className="form-note"><Icon name="shield" size={16} /> اطلاعات شما با حفظ حریم خصوصی بررسی می‌شود.</p>
                </>
              )}
            </form>
          </div>
        </section>

        <section className="faq section">
          <div className="container faq__grid">
            <SectionTitle eyebrow="پرسش‌های پرتکرار" title="پاسخ‌های روشن، پیش از مراجعه" text="اگر پاسخ پرسش خود را پیدا نکردید، با ما تماس بگیرید تا راهنمایی‌تان کنیم." />
            <div className="faq__list">
              {faqs.map(([question, answer], index) => (
                <article className={`faq__item ${openFaq === index ? 'faq__item--open' : ''}`} key={question}>
                  <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>{question}</span><Icon name="chevron" size={20} />
                  </button>
                  <div className="faq__answer"><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact__shell">
            <div className="contact__info">
              <SectionTitle eyebrow="تماس با ما" title="برای دیدار شما آماده‌ایم" />
              <div className="contact__items">
                <div><span><Icon name="location" /></span><p><small>نشانی کلینیک (قابل ویرایش)</small><strong>تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۴</strong></p></div>
                <div><span><Icon name="call" /></span><p><small>شماره تماس</small><strong>۰۲۱ ۱۲۳۴ ۵۶۷۸</strong></p></div>
                <div><span><Icon name="clock" /></span><p><small>ساعات کاری</small><strong>شنبه تا چهارشنبه ۹ تا ۲۰، پنج‌شنبه ۹ تا ۱۵</strong></p></div>
              </div>
              <div className="social-row"><span>ما را دنبال کنید</span><a href="#" aria-label="اینستاگرام"><Icon name="instagram" /></a><a href="#" aria-label="شبکه اجتماعی"><Icon name="arrow" /></a></div>
            </div>
            <div className="map-placeholder">
              <div className="map-placeholder__roads" />
              <span className="map-placeholder__pin"><Icon name="location" size={27} /></span>
              <div><strong>کلینیک لبخند</strong><small>موقعیت نمایشی روی نقشه</small></div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta__inner">
            <div><span>آماده‌اید؟</span><h2>برای داشتن لبخندی زیباتر، همین امروز اقدام کنید.</h2></div>
            <a className="btn btn--light" href="#appointment">رزرو نوبت آنلاین <Icon name="calendar" size={19} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand"><a className="brand brand--light" href="#home"><span className="brand__mark"><Icon name="tooth" size={26} /></span><span><strong>کلینیک لبخند</strong><small>دندان‌پزشکی تخصصی</small></span></a><p>مراقبت حرفه‌ای از سلامت و زیبایی لبخند شما، در فضایی آرام و قابل‌اعتماد.</p></div>
          <div><h3>دسترسی سریع</h3><a href="#services">خدمات</a><a href="#doctors">پزشکان</a><a href="#about">درباره ما</a></div>
          <div><h3>خدمات منتخب</h3><a href="#services">ایمپلنت دندان</a><a href="#services">طراحی لبخند</a><a href="#services">ارتودنسی</a></div>
          <div><h3>ارتباط با ما</h3><a href="tel:02112345678">۰۲۱ ۱۲۳۴ ۵۶۷۸</a><a href="#contact">نشانی و ساعات کاری</a><a href="#appointment">رزرو نوبت</a></div>
        </div>
        <div className="container footer__bottom"><span>© ۱۴۰۴ کلینیک دندان‌پزشکی لبخند</span><span>اطلاعات این وب‌سایت نمونه و قابل ویرایش است.</span></div>
      </footer>

      <div className="mobile-actions">
        <a href="tel:02112345678"><Icon name="call" size={19} />تماس</a>
        <a href="#appointment"><Icon name="calendar" size={19} />رزرو نوبت</a>
      </div>
    </div>
  )
}

export default App
