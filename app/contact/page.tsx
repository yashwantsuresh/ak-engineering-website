import { SiteFooter, SiteHeader } from "../components/SiteShell";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  return <><SiteHeader /><main className="inner-page"><p className="eyebrow"><span /> Project enquiries</p><h1>Let’s build the right line.</h1><p className="page-lead">Tell us what you need to move, sort or automate. We’ll help define the right conveyor or custom machine approach.</p><div className="contact-page-layout"><div className="contact-page-card"><div><strong>Call us</strong><a href="tel:+919952551805">+91 99525 51805</a></div><div><strong>Email us</strong><a href="https://mail.google.com/mail/?view=cm&fs=1&to=akengineeringscbe@gmail.com&su=AK%20Engineering%20Enquiry" target="_blank" rel="noreferrer">akengineeringscbe@gmail.com</a></div><div><strong>Workshop</strong><p>Pattanam Road, Sulur, Coimbatore, Tamil Nadu 641016</p></div></div><ContactForm /></div></main><SiteFooter /></>;
}
