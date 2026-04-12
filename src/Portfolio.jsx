import { useState, useEffect, useRef } from "react";
import profileImg from './assets/reynan.png';

const data = {
  name: "Reynan Jumaylab",
  title: "Data Entry · Graphic Designer · Web Developer",
  tagline: "Crafting digital experiences from Bohol, Philippines",
  bio: "A 22-year-old Information Technology student from Cambailan, Catigbian, Bohol. Motivated, detail-oriented, and eager to grow — seeking hands-on opportunities to develop technical and creative skills.",
  email: "jumaylab06@gmail.com",
  phone: "09389279884",
  location: "Catigbian, Bohol, PH",
  languages: ["English", "Tagalog", "Bisaya"],
  skills: [
    { category: "Graphic Design", icon: "✦", items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"] },
    { category: "Web Development", icon: "◈", items: ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "VS Code", "Web Projects", "UI Design"] },
    { category: "Office & Data", icon: "◉", items: ["Data Entry", "Microsoft Word", "Microsoft Excel", "Fast Typing"] },
    { category: "Soft Skills", icon: "◆", items: ["Creativity", "Critical Thinking", "Leadership", "Management", "Hard-working", "Communication", "Teamwork"] },
  ],
  experience: [
    {
      role: "Student Labor",
      org: "Bohol Island State University",
      type: "Academic",
      desc: "Selected by the school to serve as student laborer — providing information to students, organizing events, and assisting administrative tasks using Microsoft Word and Excel.",
      color: "#6366f1",
    },
    {
      role: "Freelance Data Encoder",
      org: "Remote / Local",
      type: "Freelance",
      desc: "Working as a freelance data encoder requiring fast typing, strong attention to detail, and clear communication with clients.",
      color: "#06b6d4",
    },
    {
      role: "Local Tutor & Project Creator",
      org: "Catigbian, Bohol",
      type: "Community",
      desc: "Tutoring kids locally and creating academic & web-based projects for students from nearby schools.",
      color: "#f59e0b",
    },
  ],
  education: [
    { level: "College", school: "Bohol Island State University", course: "BS Information Technology", years: "Present" },
    { level: "Junior & Senior High", school: "Hagbuaya High School", course: "", years: "2016 – 2022" },
    { level: "Elementary", school: "Pedro H. Escueta Memorial School", course: "", years: "2011 – 2016" },
  ],
  awards: [
    { title: "Letter Slam Winner", sub: "CCIS Days", emoji: "🏆" },
    { title: "Milktea Shop Web Project", sub: "Featured Project", emoji: "💻" },
    { title: "Perpetual Certification", sub: "ICT", emoji: "📜" },
  ],
  pasona: {
    pain: {
      label: "Pain",
      icon: "⚡",
      color: "#ef4444",
      heading: "Struggling to find reliable creative & technical help?",
      body: "Many businesses and students waste weeks searching for someone who can both design beautifully AND build functional websites — only to end up with mismatched results, missed deadlines, or sky-high agency fees.",
    },
    agitate: {
      label: "Agitate",
      icon: "🔥",
      color: "#f97316",
      heading: "The cost of the wrong hire is higher than you think.",
      body: "Poor data entry leads to costly errors. Mediocre design loses clients before they even read a word. A broken website can cost you sales every single day. Every hour spent fixing someone else's mistakes is an hour you can't spend growing.",
    },
    solution: {
      label: "Solution",
      icon: "✦",
      color: "#e2c87a",
      heading: "One person. Every skill you need.",
      body: "I bridge the gap between design and development — delivering pixel-perfect visuals, clean functional code, and accurate data work under one roof. No miscommunication between teams. No bloated budgets. Just results.",
    },
    offer: {
      label: "Offer",
      icon: "◈",
      color: "#06b6d4",
      heading: "Here's what I bring to your project.",
      items: [
        "Custom graphic design (logos, posters, UI mockups)",
        "Responsive web development with React & PHP",
        "Fast, accurate data encoding & spreadsheet work",
        "Academic & business project support",
        "Local tutoring & digital skills training",
      ],
    },
    narrow: {
      label: "Narrow",
      icon: "◉",
      color: "#8b5cf6",
      heading: "Best fit for you if…",
      items: [
        "You're a small business or startup needing affordable creative work",
        "You're a student who needs a web or design project done right",
        "You need someone detail-oriented for data entry tasks",
        "You want a long-term collaborator, not just a one-time gig",
      ],
    },
    action: {
      label: "Action",
      icon: "◆",
      color: "#10b981",
      heading: "Let's build something together.",
      body: "Whether it's a logo, a website, or a data project — reach out today and let's talk about how I can help you move forward. Fast response. No pressure.",
      cta: "Contact Me Now",
    },
  },
  satisfaction: {
    stats: [
      { value: "10+", label: "Projects Completed", icon: "◈" },
      { value: "100%", label: "On-Time Delivery", icon: "◉" },
      { value: "3×", label: "Skill Domains", icon: "✦" },
      { value: "4+", label: "Years of Practice", icon: "◆" },
    ],
    testimonials: [
      {
        quote: "Reynan delivered our school project website ahead of schedule. Clean design, zero bugs — exactly what we needed.",
        name: "Classmate, BISU",
        role: "Web Project Collaborator",
        initials: "JM",
        color: "#6366f1",
      },
      {
        quote: "His data encoding work was fast and incredibly accurate. Found him reliable even under tight deadlines.",
        name: "Local Client",
        role: "Freelance Data Entry",
        initials: "LC",
        color: "#06b6d4",
      },
      {
        quote: "He tutored my younger sibling in IT basics patiently and effectively. Highly recommend him as a tutor.",
        name: "Community Member",
        role: "Local Tutor",
        initials: "CM",
        color: "#f59e0b",
      },
    ],
    proofPoints: [
      { label: "Milktea Shop Website", detail: "Full UI design + PHP backend — featured project at BISU", tag: "Web Dev" },
      { label: "CCIS Letter Slam", detail: "Won competitive academic event — recognized for quick thinking", tag: "Award" },
      { label: "ICT Certification", detail: "Perpetual certification in Information & Communications Technology", tag: "Cert" },
    ],
  },
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(48px)",
      transition: `opacity 0.75s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.75s cubic-bezier(.16,1,.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function FloatingOrb({ size, x, y, color, delay }) {
  return (
    <div style={{
      position: "absolute", width: size, height: size, borderRadius: "50%",
      background: color, filter: "blur(80px)", opacity: 0.25,
      top: y, left: x, pointerEvents: "none",
      animation: `orbFloat ${6 + delay}s ease-in-out infinite alternate`,
      animationDelay: `${delay}s`,
    }} />
  );
}

function NavDot({ active, label, onClick }) {
  return (
    <button onClick={onClick} title={label} style={{
      width: active ? 28 : 8, height: 8, borderRadius: 4,
      background: active ? "#e2c87a" : "rgba(255,255,255,0.25)",
      border: "none", cursor: "pointer", transition: "all 0.35s cubic-bezier(.16,1,.3,1)",
      padding: 0,
    }} />
  );
}

function SkillTag({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block", padding: "6px 14px", borderRadius: 20,
        fontSize: 12, fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em",
        background: hovered ? "#e2c87a" : "rgba(255,255,255,0.07)",
        color: hovered ? "#0d0d14" : "rgba(255,255,255,0.75)",
        border: `1px solid ${hovered ? "#e2c87a" : "rgba(255,255,255,0.12)"}`,
        cursor: "default", transition: "all 0.22s ease", userSelect: "none",
      }}>
      {label}
    </span>
  );
}

function GlassCard({ children, style = {}, glow }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        border: `1px solid ${hovered ? "rgba(226,200,122,0.35)" : "rgba(255,255,255,0.09)"}`,
        borderRadius: 20,
        transition: "all 0.35s cubic-bezier(.16,1,.3,1)",
        boxShadow: hovered && glow ? "0 0 40px rgba(226,200,122,0.12)" : "none",
        transform: hovered ? "translateY(-3px)" : "none",
        ...style,
      }}>
      {children}
    </div>
  );
}

// PASONA step card
function PasonaCard({ data: d, index, scrollToContact }) {
  const [hovered, setHovered] = useState(false);
  const isAction = d.label === "Action";

  return (
    <AnimatedSection delay={index * 100}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? `linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`
            : "rgba(255,255,255,0.03)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${hovered ? d.color + "55" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 20,
          padding: "32px 28px",
          transition: "all 0.35s cubic-bezier(.16,1,.3,1)",
          boxShadow: hovered ? `0 0 48px ${d.color}18` : "none",
          transform: hovered ? "translateY(-4px)" : "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle colored top accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${d.color}, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.35s ease",
          borderRadius: "20px 20px 0 0",
        }} />

        {/* Step label + icon */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: d.color + "22",
            border: `1px solid ${d.color}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, color: d.color,
          }}>{d.icon}</div>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: d.color, fontWeight: 500,
          }}>{d.label}</span>
        </div>

        {/* Heading */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(18px, 2.5vw, 24px)",
          fontWeight: 600, lineHeight: 1.3,
          marginBottom: 14, color: "#fff",
        }}>{d.heading}</h3>

        {/* Body text */}
        {d.body && (
          <p style={{
            fontSize: 14, color: "rgba(255,255,255,0.45)",
            lineHeight: 1.8, marginBottom: d.cta ? 24 : 0,
          }}>{d.body}</p>
        )}

        {/* List items */}
        {d.items && (
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {d.items.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                <span style={{ color: d.color, fontSize: 10, marginTop: 6, flexShrink: 0 }}>◆</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button for Action step */}
        {isAction && d.cta && (
          <button
            onClick={scrollToContact}
            style={{
              background: d.color,
              color: "#080811",
              border: "none",
              padding: "12px 28px",
              borderRadius: 40,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.04em",
              marginTop: 8,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.boxShadow = `0 0 24px ${d.color}55`; }}
            onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
          >
            {d.cta} →
          </button>
        )}
      </div>
    </AnimatedSection>
  );
}

function ContactForm({ email }) {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
    padding: "14px 18px", color: "#fff", fontSize: 14,
    fontFamily: "'DM Sans', sans-serif", outline: "none",
    transition: "border-color 0.2s ease",
  };

  const handleSubmit = () => {
    if (!fields.name || !fields.email || !fields.message) {
      setStatus("error"); return;
    }
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(fields.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`)}`;
    window.open(gmailUrl, "_blank");
    setStatus("sent");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Name + Email row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
        {[
          { key: "name", placeholder: "Your name", type: "text" },
          { key: "email", placeholder: "Your email", type: "email" },
        ].map(f => (
          <input
            key={f.key}
            type={f.type}
            placeholder={f.placeholder}
            value={fields[f.key]}
            onChange={e => setFields(p => ({ ...p, [f.key]: e.target.value }))}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(226,200,122,0.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
        ))}
      </div>

      {/* Subject */}
      <input
        type="text"
        placeholder="Subject (optional)"
        value={fields.subject}
        onChange={e => setFields(p => ({ ...p, subject: e.target.value }))}
        style={inputStyle}
        onFocus={e => e.target.style.borderColor = "rgba(226,200,122,0.5)"}
        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
      />

      {/* Message */}
      <textarea
        placeholder="Tell me about your project..."
        value={fields.message}
        onChange={e => setFields(p => ({ ...p, message: e.target.value }))}
        rows={6}
        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
        onFocus={e => e.target.style.borderColor = "rgba(226,200,122,0.5)"}
        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
      />

      {/* Error message */}
      {status === "error" && (
        <p style={{ fontSize: 13, color: "#ef4444", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>
          ◆ Please fill in your name, email, and message.
        </p>
      )}

      {/* Submit row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        {status === "sent"
          ? <p style={{ fontSize: 13, color: "#10b981", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>✦ Message opened in your mail app!</p>
          : <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: "'DM Mono', monospace" }}>Opens Gmail in a new tab</p>
        }
        <button
          onClick={handleSubmit}
          style={{
            background: "#e2c87a", color: "#080811", border: "none",
            padding: "13px 32px", borderRadius: 40, cursor: "pointer",
            fontSize: 14, fontWeight: 600, letterSpacing: "0.04em",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.boxShadow = "0 0 24px rgba(226,200,122,0.4)"; }}
          onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
        >
          Send Message →
        </button>
      </div>
    </div>
  );
}

const sections = ["Home", "Skills", "Experience", "Education", "Awards", "Why Me", "Proof", "Contact"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      sectionRefs.current.forEach((ref, i) => {
        if (ref && ref.offsetTop <= scrollY) setActiveSection(i);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (i) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  };

  const pasonaSteps = Object.values(data.pasona);

  return (
    <div style={{
      background: "#080811",
      color: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&family=Cormorant+Garamond:ital,wght@0,600;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080811; }
        ::-webkit-scrollbar-thumb { background: #e2c87a44; border-radius: 4px; }
        @keyframes orbFloat { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(20px,-30px) scale(1.1); } }
        @keyframes heroReveal { 0% { opacity:0; transform: translateY(30px); } 100% { opacity:1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes rotateSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:0.6; transform: scale(1); } 50% { opacity:1; transform: scale(1.05); } }
        @keyframes lineGrow { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #e2c87a;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          max-width: 60px;
          height: 1px;
          background: #e2c87a55;
        }
      `}</style>

      {/* Custom cursor glow */}
      <div style={{
        position: "fixed", pointerEvents: "none", zIndex: 9999,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(226,200,122,0.06) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        left: cursorPos.x, top: cursorPos.y,
        transition: "left 0.12s ease, top 0.12s ease",
      }} />

      {/* Ambient orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <FloatingOrb size={500} x="-10%" y="-5%" color="#6366f1" delay={0} />
        <FloatingOrb size={400} x="60%" y="30%" color="#06b6d4" delay={2} />
        <FloatingOrb size={350} x="20%" y="60%" color="#e2c87a" delay={4} />
        <FloatingOrb size={300} x="75%" y="70%" color="#f59e0b" delay={1} />
      </div>

      {/* Noise texture overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* Fixed nav */}
      <nav style={{
        position: "fixed", top: "50%", right: 28, transform: "translateY(-50%)",
        zIndex: 100, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        {sections.map((s, i) => (
          <NavDot key={s} active={activeSection === i} label={s} onClick={() => scrollTo(i)} />
        ))}
      </nav>

      {/* ─── HERO ─── */}
      <section
        ref={el => sectionRefs.current[0] = el}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          padding: "0 24px",
        }}
      >
        <div style={{
          maxWidth: 1100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ display: "flex", justifyContent: "start", marginBottom: 32 }}>
              <div style={{ position: "relative", width: 80, height: 80 }}>
                <svg viewBox="0 0 80 80" style={{ width: 80, height: 80, animation: "rotateSlow 12s linear infinite", position: "absolute" }}>
                  <path id="circlePath" d="M40,10 a30,30 0 1,1 -0.01,0" fill="none" />
                  <text fontSize="8.5" fill="#e2c87a99" fontFamily="DM Mono, monospace" letterSpacing="3">
                    <textPath href="#circlePath">AVAILABLE FOR WORK ••••• </textPath>
                  </text>
                </svg>
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 36, height: 36, borderRadius: "50%",
                  background: "linear-gradient(135deg, #e2c87a, #f59e0b)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 600, color: "#080811",
                }}>RJ</div>
              </div>
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 30,
              color: "#e2c87aaa",
              marginBottom: 10,
              animation: "heroReveal 0.7s 0.2s both",
            }}>Hello, I'm</p>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(48px, 7vw, 90px)",
              lineHeight: 1,
              marginBottom: 16,
            }}>
              Reynan<br />
              <span style={{ color: "rgba(255,255,255,0.15)", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Jumaylab</span>
            </h1>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20, marginLeft: 100 }}>
              {["IT Student", "Graphic Designer", "Web Developer"].map((t, i) => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{t}</span>
                  {i < 2 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#e2c87a" }} />}
                </span>
              ))}
            </div>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 30 }}>
              {data.tagline}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginLeft: 100 }}>
              <button
                onClick={() => scrollTo(2)}
                style={{
                  background: "#e2c87a", color: "#080811", border: "none",
                  padding: "12px 26px", borderRadius: 40, cursor: "pointer",
                }}
              >View Experience</button>
              <button
                onClick={() => scrollTo(7)}
                style={{
                  background: "transparent", color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "12px 26px", borderRadius: 40, cursor: "pointer",
                }}
              >Get In Touch</button>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "100%", maxWidth: 360,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 20, padding: 20,
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}>
              <img
                src={profileImg}
                alt="Reynan"
                style={{ width: "100%", height: 390, objectFit: "cover", borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section ref={el => sectionRefs.current[1] = el} style={{ minHeight: "100vh", padding: "100px 24px", position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-label">02 · Expertise</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 600, lineHeight: 1, marginBottom: 60, letterSpacing: "-0.02em" }}>
            Skills &<br /><span style={{ color: "rgba(255,255,255,0.2)", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Expertise</span>
          </h2>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {data.skills.map((s, i) => (
            <AnimatedSection key={s.category} delay={i * 80}>
              <GlassCard glow style={{ padding: "28px 24px", height: "100%", cursor: "pointer" }}>
                <div style={{ fontSize: 22, marginBottom: 12, color: "#e2c87a" }}>{s.icon}</div>
                <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: 16, textTransform: "uppercase" }}>{s.category}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.items.map(item => <SkillTag key={item} label={item} />)}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section ref={el => sectionRefs.current[2] = el} style={{ minHeight: "100vh", padding: "100px 24px", position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-label">03 · Work</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 600, lineHeight: 1, marginBottom: 60, letterSpacing: "-0.02em" }}>
            Experience
          </h2>
        </AnimatedSection>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {data.experience.map((exp, i) => (
            <AnimatedSection key={exp.role} delay={i * 100}>
              <GlassCard glow style={{ padding: "32px 28px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: exp.color, boxShadow: `0 0 12px ${exp.color}` }} />
                      <h3 style={{ fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 500 }}>{exp.role}</h3>
                    </div>
                    <div style={{ fontSize: 13, color: "#e2c87a99", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em", marginBottom: 12, marginLeft: 22 }}>{exp.org}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginLeft: 22 }}>{exp.desc}</p>
                  </div>
                  <span style={{
                    background: `${exp.color}18`, border: `1px solid ${exp.color}44`,
                    color: exp.color, padding: "5px 14px", borderRadius: 20,
                    fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}>{exp.type}</span>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section ref={el => sectionRefs.current[3] = el} style={{ minHeight: "80vh", padding: "100px 24px", position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-label">04 · Education</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 600, lineHeight: 1, marginBottom: 60, letterSpacing: "-0.02em" }}>
            Academic<br /><span style={{ color: "rgba(255,255,255,0.2)", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Background</span>
          </h2>
        </AnimatedSection>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #e2c87a44, transparent)" }} />
          {data.education.map((edu, i) => (
            <AnimatedSection key={edu.level} delay={i * 100}>
              <div style={{ display: "flex", gap: 32, paddingBottom: 40, position: "relative" }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{
                    width: 31, height: 31, borderRadius: "50%",
                    background: i === 0 ? "#e2c87a" : "rgba(226,200,122,0.15)",
                    border: "1.5px solid #e2c87a",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 500,
                    color: i === 0 ? "#080811" : "#e2c87a",
                    fontFamily: "'DM Mono', monospace",
                  }}>{String(data.education.length - i).padStart(2, "0")}</div>
                </div>
                <GlassCard style={{ flex: 1, padding: "20px 24px", cursor: "pointer" }}>
                  <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 6, textTransform: "uppercase" }}>{edu.years}</div>
                  <div style={{ fontSize: "clamp(15px,2vw,18px)", fontWeight: 500, marginBottom: 4 }}>{edu.school}</div>
                  {edu.course && <div style={{ fontSize: 13, color: "#e2c87aaa" }}>{edu.course}</div>}
                  <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>{edu.level}</div>
                </GlassCard>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── AWARDS ─── */}
      <section ref={el => sectionRefs.current[4] = el} style={{ padding: "100px 24px", position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-label">05 · Recognition</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 600, lineHeight: 1, marginBottom: 60, letterSpacing: "-0.02em" }}>
            Awards
          </h2>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {data.awards.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 100}>
              <GlassCard glow style={{ padding: "32px 24px", textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{a.emoji}</div>
                <div style={{ fontSize: "clamp(14px,2vw,16px)", fontWeight: 500, marginBottom: 8 }}>{a.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>{a.sub}</div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={300}>
          <div style={{ marginTop: 60 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>Languages spoken</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {data.languages.map(lang => (
                <div key={lang} style={{
                  padding: "10px 22px", borderRadius: 40,
                  border: "1px solid rgba(226,200,122,0.25)",
                  background: "rgba(226,200,122,0.06)",
                  fontSize: 14, color: "#e2c87a",
                  letterSpacing: "0.04em",
                }}>{lang}</div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── PASONA ─── */}
      <section ref={el => sectionRefs.current[5] = el} style={{ padding: "100px 24px", position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-label">06 · Why Me</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 600, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The Case<br />
            <span style={{ color: "rgba(255,255,255,0.2)", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>For Hiring Me</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", marginBottom: 60 }}>
            Pain · Agitate · Solution · Offer · Narrow · Action · Service
          </p>
        </AnimatedSection>

        {/* First row: Pain + Agitate (2 col) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 16 }}>
          <PasonaCard data={data.pasona.pain} index={0} scrollToContact={() => scrollTo(7)} />
          <PasonaCard data={data.pasona.agitate} index={1} scrollToContact={() => scrollTo(7)} />
        </div>

        {/* Solution: full width */}
        <div style={{ marginBottom: 16 }}>
          <PasonaCard data={data.pasona.solution} index={2} scrollToContact={() => scrollTo(7)} />
        </div>

        {/* Offer + Narrow (2 col) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 16 }}>
          <PasonaCard data={data.pasona.offer} index={3} scrollToContact={() => scrollTo(7)} />
          <PasonaCard data={data.pasona.narrow} index={4} scrollToContact={() => scrollTo(7)} />
        </div>

        {/* Action: full width, accented */}
        <div style={{ marginBottom: 0 }}>
          <PasonaCard data={data.pasona.action} index={5} scrollToContact={() => scrollTo(7)} />
        </div>
      </section>

      {/* ─── SATISFACTION ─── */}
      <section ref={el => sectionRefs.current[6] = el} style={{ padding: "100px 24px", position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-label">07 · Proof</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 600, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Results &<br />
            <span style={{ color: "rgba(255,255,255,0.2)", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Satisfaction</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", marginBottom: 60 }}>
            Real work. Real outcomes. Real people.
          </p>
        </AnimatedSection>

        {/* Stats Row */}
        <AnimatedSection delay={50}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 48, cursor: "pointer" }}>
            {data.satisfaction.stats.map((stat, i) => (
              <div key={stat.label} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "28px 20px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(226,200,122,0.3)"; e.currentTarget.style.background = "rgba(226,200,122,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ fontSize: 12, color: "#e2c87a", marginBottom: 10 }}>{stat.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 600, color: "#fff", lineHeight: 1, marginBottom: 8 }}>{stat.value}</div>
                <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection delay={100}>
          <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 20 }}>
            What people say
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48, cursor: "pointer" }}>
            {data.satisfaction.testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 80}>
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20, padding: "28px 24px",
                  height: "100%", display: "flex", flexDirection: "column", gap: 20,
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${t.color}44`; e.currentTarget.style.boxShadow = `0 0 32px ${t.color}12`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {/* Quote mark */}
                  <div style={{ fontSize: 40, lineHeight: 1, color: t.color, opacity: 0.4, fontFamily: "'Cormorant Garamond', serif", marginBottom: -10 }}>"</div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontStyle: "italic", flex: 1 }}>
                    {t.quote}
                  </p>
                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: `${t.color}22`, border: `1px solid ${t.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 600, color: t.color,
                      fontFamily: "'DM Mono', monospace", flexShrink: 0,
                    }}>{t.initials}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{t.name}</div>
                      <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Proof Points */}
        <AnimatedSection delay={200}>
          <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 20 }}>
            Verified work
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {data.satisfaction.proofPoints.map((p, i) => (
              <div key={p.label} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, padding: "18px 22px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: 16, flexWrap: "wrap",
                transition: "all 0.25s ease", cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(226,200,122,0.25)"; e.currentTarget.style.paddingLeft = "28px"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.paddingLeft = "22px"; }}
              >
                <div style={{ flex: 1, cursor: "pointer" }}>
                  <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{p.label}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>{p.detail}</div>
                </div>
                <span style={{
                  background: "rgba(226,200,122,0.1)", border: "1px solid rgba(226,200,122,0.25)",
                  color: "#e2c87a", padding: "4px 12px", borderRadius: 20,
                  fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}>{p.tag}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ─── CONTACT ─── */}
      <section ref={el => sectionRefs.current[7] = el} style={{ minHeight: "80vh", padding: "100px 24px 120px", position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <AnimatedSection>
          <div className="section-label">08 · Contact</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,7vw,80px)", fontWeight: 600, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Let's work<br />
            <span style={{ color: "rgba(255,255,255,0.15)", WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>together.</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, marginBottom: 48 }}>
            Have a project in mind? Send me a message and I'll get back to you as soon as possible.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <ContactForm email={data.email} />
        </AnimatedSection>
      </section>

      {/* Footer */}
      <div style={{ padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 2, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, maxWidth: 960, margin: "0 auto", cursor: "pointer" }}>
        <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>
          © {new Date().getFullYear()} Reynan Malto Jumaylab
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { label: data.email, href: `mailto:${data.email}` },
            { label: data.phone, href: null },
            { label: data.location, href: null },
          ].map(c => (
            c.href
              ? <a key={c.label} href={c.href} style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s ease" }}
                  onMouseEnter={e => e.target.style.color = "#e2c87a"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
                >{c.label}</a>
              : <span key={c.label} style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "rgba(255,255,255,0.2)" }}>{c.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}