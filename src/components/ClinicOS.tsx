import { BRAND, waLink } from "@/lib/data";

const FEATURES = [
  ["📅", "Smart appointments", "Rooms, machines and doctors scheduled without double-bookings, across every branch."],
  ["🗂", "Patient records", "Consent forms, treatment notes and before & after photos in one secure file."],
  ["💬", "WhatsApp automation", 'Confirmations, reminders, aftercare and "time for your next session" follow-ups.'],
  ["📈", "Revenue & lead source", "See which post, reel or ad brought each booking, and what it earned."],
];

const SCHEDULE = [
  ["10:00", "HydraFacial", "Room 2 · Dr. A.", "Checked in", false],
  ["11:30", "Laser · Full legs", "Laser suite · Session 3/6", "Confirmed", false],
  ["12:15", "Lip fillers", "Room 1 · Consultation", "Awaiting", true],
  ["14:00", "HIFU · Jawline", "Room 3 · Package", "Confirmed", false],
] as const;

const SOURCES = [
  ["Reels", 85],
  ["Ads", 62],
  ["Web", 44],
  ["Walk-in", 30],
  ["Ref.", 18],
] as const;

export default function ClinicOS() {
  return (
    <section className="soft" id="software">
      <div className="wrap soft-grid">
        <div className="reveal">
          <div className="eyebrow">Clinic OS · Software</div>
          <div className="sec-head" style={{ marginBottom: 28 }}>
            <h2 className="h-display">
              From DM<span className="h-serif">to treatment chair.</span>
            </h2>
            <p>Clinic management software built only for aesthetic clinics. It connects to your ads, website and WhatsApp, so no lead gets lost.</p>
          </div>
          <div className="feat">
            {FEATURES.map(([icon, title, body]) => (
              <div key={title}>
                <i>{icon}</i>
                <p>
                  <b>{title}</b>
                  <span>{body}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="soft-ctas">
            <a href={BRAND.clinicOsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-teal">
              Explore Clinic OS ↗
            </a>
            <a href={waLink("Hi! I'd like a demo of Clinic OS for my clinic.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Book a demo on WhatsApp
            </a>
          </div>
        </div>
        <a href={BRAND.clinicOsUrl} target="_blank" rel="noopener noreferrer" className="dash reveal" title="Open Clinic OS" aria-label="Clinic OS dashboard preview">
          <div className="dash-top">
            <b>
              Clinic<span>OS</span>
            </b>
            <span className="pill">Lahore branch · Today</span>
          </div>
          <div className="kpis">
            <div className="kpi">
              <small>Appointments</small>
              <b>24</b>
              <em>▲ 6 vs last Tue</em>
            </div>
            <div className="kpi">
              <small>New leads</small>
              <b>37</b>
              <em>▲ from Reels</em>
            </div>
            <div className="kpi">
              <small>Show-up rate</small>
              <b>92%</b>
              <em>▲ auto-reminders</em>
            </div>
          </div>
          <div className="dash-cols">
            <div className="panel">
              <h6>Today&apos;s schedule</h6>
              {SCHEDULE.map(([t, name, sub, st, wait]) => (
                <div className="appt" key={t}>
                  <time>{t}</time>
                  <p>
                    {name}
                    <small>{sub}</small>
                  </p>
                  <span className={`st${wait ? " w" : ""}`}>{st}</span>
                </div>
              ))}
            </div>
            <div className="panel">
              <h6>Bookings by source</h6>
              <div className="bars">
                {SOURCES.map(([l, h]) => (
                  <i key={l} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="bars-l">
                {SOURCES.map(([l]) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
              <div className="wa">
                <i>✓</i>
                <p>
                  <b>Reminder sent</b>
                  <br />
                  &quot;Hi Ayesha, see you tomorrow at 11:30 for your laser session ✨&quot;
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
