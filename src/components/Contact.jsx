import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const topics = [
  'Career Counselling',
  'Psychometric Assessment',
  'College & Course Guidance',
  'Scholarship & Financial Aid',
  'Resume & Interview Prep',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.topic) e.topic = 'Please select a topic';
    return e;
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <section className="contact section-pad" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="section-label">08 — Contact &amp; Booking</span>
            <h2 className="section-title">Book a <span>Free Session</span></h2>
            <p className="section-desc">
              Students can book a counselling session directly through the contact form. A counsellor responds within 24 hours.
              Sessions are confidential, free, and available both online and in-person.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="ci-label">EMAIL</span>
                <a href="mailto:hello@futuredots.in" className="ci-value">hello@futuredots.in</a>
              </div>
              <div className="contact-item">
                <span className="ci-label">PHONE</span>
                <a href="tel:+919876543210" className="ci-value">+91 98765 43210</a>
              </div>
              <div className="contact-item">
                <span className="ci-label">LOCATION</span>
                <span className="ci-value ci-white">Mumbai, India</span>
              </div>
              <div className="contact-item">
                <span className="ci-label">AVAILABILITY</span>
                <span className="ci-value ci-white">Online &amp; In-Person, Pan India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="success-msg">
                <span>🎉</span>
                <h3>Session Request Received!</h3>
                <p>A counsellor will reach out within 24 hours. Your future starts here.</p>
                <button onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', topic: '', message: '' }); }}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-field${errors.firstName ? ' error' : ''}`}>
                    <label>First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Rahul" autoComplete="given-name" />
                    {errors.firstName && <span className="err">{errors.firstName}</span>}
                  </div>
                  <div className={`form-field${errors.lastName ? ' error' : ''}`}>
                    <label>Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Gupta" autoComplete="family-name" />
                    {errors.lastName && <span className="err">{errors.lastName}</span>}
                  </div>
                </div>
                <div className={`form-field${errors.email ? ' error' : ''}`}>
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className={`form-field${errors.topic ? ' error' : ''}`}>
                  <label>Topic of Help Needed</label>
                  <select name="topic" value={form.topic} onChange={handleChange}>
                    <option value="">Select a topic…</option>
                    {topics.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.topic && <span className="err">{errors.topic}</span>}
                </div>
                <div className="form-field">
                  <label>Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us briefly about your situation…" />
                </div>
                <button type="submit" className="submit-btn">Book My Free Session →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
