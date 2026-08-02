export function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={`contact-form${compact ? " compact" : ""}`}
      action="https://formsubmit.co/akengineeringscbe@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_subject" value="New AK Engineering website enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://ak-engineering-website-qvlp.vercel.app/thank-you" />
      <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

      <label>
        Name
        <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
      </label>
      <label>
        Work email
        <input type="email" name="email" placeholder="name@company.com" autoComplete="email" required />
      </label>
      <label>
        Phone number
        <input type="tel" name="phone" placeholder="Your contact number" autoComplete="tel" />
      </label>
      <label>
        Project requirement
        <textarea name="message" placeholder="Tell us what you need to move, sort or automate" rows={compact ? 4 : 6} required />
      </label>
      <button className="button white" type="submit">Send enquiry <span>↗</span></button>
      <p className="form-note">Your project details will be sent securely to the AK Engineering team.</p>
    </form>
  );
}
