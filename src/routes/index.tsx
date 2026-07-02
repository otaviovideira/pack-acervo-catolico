import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Check,
  Star,
  Shield,
  Clock,
  Mail,
  Download,
  Sparkles,
  Gamepad2,
  HandHeart,
  Users,
  Target,
  Tent,
  ClipboardList,
  ChevronDown,
  Play,
} from "lucide-react";

import heroPack from "@/assets/hero-pack.jpg";
import cardYouth from "@/assets/card-youth.jpg";
import cardPrayer from "@/assets/card-prayer.jpg";
import cardRetreat from "@/assets/card-retreat.jpg";
import mariaAvatar from "@/assets/testimonial-maria.jpg";
import carlosAvatar from "@/assets/testimonial-carlos.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const includes = [
  { icon: Gamepad2, title: "Juegos Bíblicos", qty: "+20 dinámicas", value: "$19,90" },
  { icon: HandHeart, title: "Guías de Oración", qty: "+15 guías", value: "$14,90" },
  { icon: Users, title: "Rompehielos Cristianos", qty: "+18 actividades", value: "$12,90" },
  { icon: Target, title: "Actividades Dinámicas", qty: "+25 propuestas", value: "$17,90" },
  { icon: Tent, title: "Dinámicas para Retiros", qty: "+22 materiales", value: "$19,90" },
  { icon: ClipboardList, title: "Guiones para Encuentros", qty: "+20 guiones", value: "$14,90" },
];

const benefits = [
  "Captar la atención de jóvenes y niños desde el primer minuto",
  "Encuentros más dinámicos, participativos y memorables",
  "Enseñar la fe de forma práctica, no sólo teórica",
  "Hacer que quieran volver la próxima semana",
  "Sentirte seguro y preparado al guiar cada encuentro",
];

const steps = [
  { n: "01", title: "Elige el tema", body: "Abre el pack y selecciona el eje del encuentro." },
  { n: "02", title: "Selecciona los recursos", body: "Toma la dinámica, guía o guion que necesitas." },
  { n: "03", title: "Aplica en tu encuentro", body: "Imprime, lee y guía. Cero preparación previa." },
  { n: "04", title: "Observa la participación", body: "Grupos más vivos, semana tras semana." },
];

const compatible = [
  "Catequesis", "Pastoral juvenil", "Retiros espirituales",
  "Encuentros parroquiales", "Formación cristiana", "Movimientos católicos",
];

const bonuses = [
  { title: "Cancionero de Bolsillo", desc: "Cantos católicos organizados por momento litúrgico." },
  { title: "Manual Antifallas", desc: "Qué hacer cuando el grupo no responde o algo falla." },
  { title: "Calendario Litúrgico Perpetuo", desc: "Guía visual del año litúrgico completo." },
  { title: "Código del Compromiso Católico", desc: "Marco espiritual para líderes." },
  { title: "Arsenal Pastoral 50X", desc: "50 recursos rápidos para reuniones express." },
  { title: "Kit Catequesis Encantada", desc: "Materiales para niños de 6 a 12 años." },
  { title: "Matrimonio Firme™", desc: "Retiro breve para parejas de la parroquia." },
];

const testimonials = [
  {
    name: "María G.",
    role: "Catequista · México",
    text: "Antes pasaba horas armando cada encuentro. Ahora abro el pack, elijo la dinámica y listo. Los chicos participan como nunca.",
    img: mariaAvatar,
  },
  {
    name: "Carlos R.",
    role: "Líder Pastoral · Colombia",
    text: "Los guiones para encuentros son oro puro. Estructurados, fieles a la doctrina y fáciles de aplicar. Recomendado 100%.",
    img: carlosAvatar,
  },
];

const faqs = [
  {
    q: "¿Cómo recibo el material?",
    a: "Acceso inmediato por e-mail después del pago. Es 100% digital, descargas en menos de 2 minutos y lo guardas para siempre.",
  },
  {
    q: "¿Funciona para mi parroquia o grupo?",
    a: "Sí. Está en español neutro para toda LATAM y es adaptable a cualquier contexto. Ya lo usan más de 1.655 líderes en +15 países.",
  },
  {
    q: "No soy muy tecnológico, ¿podré usarlo?",
    a: "Absolutamente. Son PDFs listos para imprimir. No necesitas programas especiales ni conocimientos técnicos.",
  },
  {
    q: "¿El contenido es doctrinalmente correcto?",
    a: "Sí. Todos los recursos fueron elaborados siguiendo la doctrina católica y el Magisterio de la Iglesia.",
  },
  {
    q: "¿Y si no me gusta?",
    a: "Tienes 7 días de garantía incondicional. Escribes un e-mail y te devolvemos el 100% del dinero. Sin preguntas.",
  },
];

const recentBuyers = [
  { name: "Patricia L.", city: "Guadalajara, MX", mins: 2 },
  { name: "Pedro M.", city: "Lima, PE", mins: 6 },
  { name: "Andrés C.", city: "Bogotá, CO", mins: 11 },
  { name: "Sofía R.", city: "Buenos Aires, AR", mins: 18 },
];

// ─────────────────────────────────────────────────────────────
// Small helpers
// ─────────────────────────────────────────────────────────────
function useCountdown(initialSeconds: number) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return { mm, ss };
}

function CTA({ children = "Quiero acceder al Pack por $9,90" }: { children?: React.ReactNode }) {
  return (
    <a
      href="#oferta"
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--success)] px-7 py-4 text-base font-semibold text-[color:var(--success-foreground)] shadow-[0_8px_24px_-8px_rgba(34,150,90,0.5)] transition hover:brightness-110 hover:-translate-y-0.5"
    >
      <Sparkles className="h-4 w-4" />
      {children}
    </a>
  );
}

// Scroll-triggered reveal wrapper
function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return (
    <Tag ref={ref as never} className={`reveal${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Reveal><Benefits /></Reveal>
      <Reveal><Includes /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Compatibility /></Reveal>
      <Reveal><VideoProof /></Reveal>
      <Reveal><Problem /></Reveal>
      <Reveal><Offer /></Reveal>
      <Reveal><Social /></Reveal>
      <Reveal><Guarantee /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="container-narrow flex items-center justify-between pt-6">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/95 text-[color:var(--ink)]">
          <span className="font-display text-lg leading-none">✦</span>
        </div>
        <span className="font-display text-xl">Pastoral 360</span>
      </div>
      <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        <a href="#incluye" className="hover:text-foreground">Incluye</a>
        <a href="#como-funciona" className="hover:text-foreground">Cómo funciona</a>
        <a href="#testimonios" className="hover:text-foreground">Testimonios</a>
        <a href="#faq" className="hover:text-foreground">FAQ</a>
      </div>
      <a
        href="#oferta"
        className="rounded-full glass-strong px-4 py-2 text-sm font-medium text-foreground transition hover:brightness-110"
      >
        Acceder por $9,90
      </a>
    </header>

  );
}

function Hero() {
  return (
    <section className="container-narrow pt-12 pb-8 md:pt-16">
      <div className="max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--success)]" />
          +1.655 líderes en 15 países ya lo usan
        </div>
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-foreground md:text-5xl">
          ¿Sin tiempo y sin ideas cada semana?{" "}
          <span className="italic text-[color:var(--sky)]">Aquí tienes todo listo</span> para tus
          encuentros, retiros y catequesis.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Pack con <strong className="text-foreground">+360 recursos católicos digitales</strong> en
          PDF, listos para imprimir y aplicar. Diseñado para catequistas, líderes y coordinadores
          pastorales de toda Latinoamérica.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CTA />
          <div className="text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Acceso inmediato después del pago
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span>💳 Pago único</span>
          <span>·</span>
          <span>Acceso vitalicio</span>
          <span>·</span>
          <span>Garantía de 7 días</span>
        </div>
      </div>

      {/* Hero image card */}
      <div className="relative mt-14 overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
        <img
          src={heroPack}
          alt="Vista previa del Pack Pastoral 360 con guías impresas y tableta"
          width={1600}
          height={1024}
          className="h-[380px] w-full object-cover md:h-[520px]"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--success)]" />
          Vista previa del pack completo
        </div>
        <div className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-foreground shadow md:flex">
          <Download className="h-4 w-4" /> Entrega por e-mail en minutos
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "+360 recursos",
    "Español neutro LATAM",
    "PDF listo para imprimir",
    "+1.655 líderes activos",
    "15 países",
    "Acceso vitalicio",
    "Doctrinalmente correcto",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-secondary/60 py-4 overflow-hidden">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-2xl text-muted-foreground">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-[color:var(--gold)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <section className="container-narrow py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Con este pack vas a poder
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Guiar encuentros que los jóvenes{" "}
            <span className="italic text-[color:var(--sky)]">no quieren perderse</span>.
          </h2>
        </div>
        <ul className="space-y-4">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--success)] text-white">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-base text-foreground">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Includes() {
  return (
    <section id="incluye">
      <div className="container-narrow py-16">

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Qué incluye
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            6 colecciones. <span className="italic">+360 recursos.</span> Un solo pack.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada colección es un PDF independiente, listo para imprimir y usar sin preparación previa.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {includes.map(({ icon: Icon, title, qty, value }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-[color:var(--success)]/10 px-2.5 py-1 text-xs font-semibold text-[color:var(--success)]">
                  INCLUIDO
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{qty}</p>
              <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">Valor individual</span>
                <span className="text-base font-semibold text-foreground line-through decoration-[color:var(--danger)]/70">
                  {value}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-between gap-4 rounded-2xl glass-dark p-6 text-foreground">
          <div>
            <p className="text-sm opacity-70">Valor total si lo compras por separado</p>
            <p className="font-display text-4xl">
              $99,40 <span className="text-sm opacity-70">USD</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-70">Hoy pagas una sola vez</p>
            <p className="font-display text-4xl text-[color:var(--gold)]">$9,90</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="container-narrow py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Cómo funciona
        </p>
        <h2 className="font-display text-4xl md:text-5xl">
          De abrir el pack a guiar el encuentro en <span className="italic">4 pasos</span>.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <span className="font-display text-4xl text-[color:var(--sky)]">{s.n}</span>
            <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Compatibility() {
  return (
    <section className="container-narrow pb-8">
      <div className="overflow-hidden rounded-3xl glass p-8 text-foreground md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
              100% compatible
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Funciona en cualquier parroquia o grupo.
            </h3>
            <p className="mt-3 text-foreground/75">
              Español neutro, adaptable a la realidad de tu comunidad.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {compatible.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-foreground backdrop-blur"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoProof() {
  return (
    <section className="container-narrow py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Los recursos en acción
        </p>
        <h2 className="font-display text-4xl md:text-5xl">
          Mira cómo se ven <span className="italic">en un encuentro real</span>.
        </h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[cardYouth, cardRetreat, cardPrayer].map((src, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
          >
            <img
              src={src}
              alt="Recurso pastoral en acción"
              width={900}
              height={1200}
              loading="lazy"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
              <span className="font-display text-xl">
                {["Juegos & dinámicas", "Retiros", "Oración"][i]}
              </span>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[color:var(--ink)]">
                <Play className="h-4 w-4 fill-current" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section>
      <div className="container-narrow py-16">

        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Seamos honestos
          </p>
          <h2 className="text-center font-display text-4xl md:text-5xl">
            ¿Por qué no te ha funcionado <span className="italic">antes</span>?
          </h2>
          <div className="mt-10 space-y-4 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">No es falta de esfuerzo.</strong> Es falta de un
              sistema al que recurrir cuando el domingo se acerca.
            </p>
            <p>
              Sin estructura, todo depende del improviso: buscar ideas en internet, adaptar dinámicas
              genéricas, imprimir a último momento…
            </p>
            <p>
              Y eso genera <strong className="text-foreground">frustración</strong>, encuentros
              tibios y ganas de tirar la toalla.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--danger)]">
              Antes
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>· Horas buscando ideas</li>
              <li>· Grupos distraídos y silenciosos</li>
              <li>· Miedo al “y ahora qué hago”</li>
              <li>· Encuentros que no dejan huella</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[color:var(--success)]/30 bg-[color:var(--success)]/5 p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--success)]">
              Después
            </p>
            <ul className="space-y-2 text-foreground">
              <li>✓ Encuentros participativos</li>
              <li>✓ Preparación en 10 minutos</li>
              <li>✓ Estructura clara semana a semana</li>
              <li>✓ Grupos que quieren volver</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const { mm, ss } = useCountdown(23 * 60 + 47);
  return (
    <section id="oferta" className="container-narrow py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border-2 border-[color:var(--danger)]/70 bg-card shadow-[var(--shadow-elevated)]">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)]">
            <span>🔥 Precios promocionales solo por hoy</span>
            <span className="flex items-center gap-2 tabular-nums">
              <Clock className="h-4 w-4" />
              Termina en {mm}:{ss}
            </span>
          </div>

          <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">
                Accede al Pack Completo <span className="italic">hoy</span>.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Todo el sistema pastoral, en un solo pago. Guárdalo para siempre.
              </p>

              <div className="mt-6 flex items-end gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Antes</p>
                  <p className="font-display text-3xl text-muted-foreground line-through">$97</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hoy</p>
                  <p className="font-display text-6xl text-[color:var(--success)]">$9,90</p>
                  <p className="text-xs text-muted-foreground">USD · pago único · acceso vitalicio</p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-foreground">
                {[
                  "+360 recursos católicos digitales en PDF",
                  "Entrega inmediata por e-mail",
                  "Actualizaciones futuras incluidas",
                  "Español neutro para toda LATAM",
                  "Garantía incondicional de 7 días",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[color:var(--success)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#oferta"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--success)] px-7 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,150,90,0.6)] transition hover:brightness-110 md:w-auto"
                >
                  <Sparkles className="h-5 w-5" /> Quiero el Pack por $9,90
                </a>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span>💳 Visa</span>
                  <span>Mastercard</span>
                  <span>MercadoPago</span>
                  <span>PayPal</span>
                  <span>· Conversión automática a tu moneda</span>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl bg-secondary/70 p-6 md:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[color:var(--danger)]">
                + 7 bonos incluidos gratis
              </p>
              <ul className="space-y-3">
                {bonuses.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--gold)] text-[10px] font-bold text-[color:var(--ink)]">
                      ✦
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{b.title}</p>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section id="testimonios">
      <div className="container-narrow py-16">

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2 flex items-center justify-center gap-1 text-[color:var(--gold)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Cientos de líderes parroquiales <span className="italic">ya lo usan</span>.
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span><strong className="text-foreground">+1.655</strong> líderes activos</span>
            <span><strong className="text-foreground">+15</strong> países</span>
            <span><strong className="text-foreground">4,9/5</strong> valoración media</span>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="mb-3 flex items-center gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-foreground">“{t.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="container-narrow py-20 md:py-24">
      <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:grid-cols-[auto_1fr] md:p-12">
        <div className="grid h-32 w-32 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] shadow-[var(--shadow-elevated)]">
          <div className="text-center">
            <Shield className="mx-auto h-7 w-7" />
            <p className="mt-1 font-display text-2xl leading-none">7 días</p>
            <p className="text-[10px] font-semibold uppercase tracking-widest">Garantía</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-4xl">
            Garantía 100% sin riesgo.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Si en 7 días sientes que no es para ti, escribes un e-mail y te devolvemos el 100% del
            dinero. Sin preguntas. Sin complicaciones.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            🔒 Pago seguro · Compra protegida por certificado SSL
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="container-narrow py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Preguntas frecuentes
        </p>
        <h2 className="font-display text-4xl md:text-5xl">
          Todo lo que quieres <span className="italic">saber antes</span>.
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((f, i) => (
          <FAQItem key={i} {...f} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="px-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-xl">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-6 text-muted-foreground float-in">{a}</p>}
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="container-narrow pb-24">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl glass-dark p-10 text-center text-foreground md:p-16">
        <h2 className="font-display text-4xl md:text-6xl">
          Empieza el próximo encuentro <span className="italic text-[color:var(--gold)]">listo</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Un solo pago de $9,90 USD y todo el sistema es tuyo, para siempre.
        </p>
        <div className="mt-8">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--success)] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,150,90,0.6)] transition hover:brightness-110"
          >
            <Sparkles className="h-5 w-5" /> Acceder por $9,90
          </a>
        </div>
        <p className="mt-4 text-xs text-foreground/60">
          Garantía de 7 días · Acceso instantáneo · Pago único
        </p>
      </div>

    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-narrow py-10 text-xs text-muted-foreground">
        <p className="mx-auto max-w-3xl text-center">
          Este sitio no forma parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO
          está avalado por Facebook. FACEBOOK es una marca registrada de FACEBOOK, Inc. Los
          resultados pueden variar según el compromiso y aplicación de cada líder.
        </p>
        <p className="mt-6 text-center">© {new Date().getFullYear()} Pack Pastoral 360. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// Social proof popup (rotating recent buyers)
// ─────────────────────────────────────────────────────────────
function SalesPopup() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % recentBuyers.length);
        setVisible(true);
      }, 500);
    }, 8000);
    return () => clearInterval(cycle);
  }, []);

  const b = recentBuyers[i];
  return (
    <div
      className={`fixed bottom-4 left-4 z-50 hidden max-w-xs items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)] transition md:flex ${
        visible ? "float-in opacity-100" : "opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--success)]/10 text-[color:var(--success)]">
        <Check className="h-5 w-5" />
      </div>
      <div className="text-sm">
        <p className="font-semibold text-foreground">{b.name}</p>
        <p className="text-muted-foreground">{b.city}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Acaba de comprar · hace {b.mins} min
        </p>
      </div>
    </div>
  );
}
