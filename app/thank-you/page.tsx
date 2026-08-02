import { SiteFooter, SiteHeader } from "../components/SiteShell";

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page thank-you-page">
        <p className="eyebrow"><span /> Enquiry received</p>
        <h1>Thank you.<br />We’ll be in touch.</h1>
        <p className="page-lead">Your requirement has been sent to AK Engineering. Our team will review the details and contact you shortly.</p>
        <div className="thank-you-actions">
          <a className="button" href="/">Back to home <span>↗</span></a>
          <a className="text-link" href="tel:+919952551805">Call +91 99525 51805</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
