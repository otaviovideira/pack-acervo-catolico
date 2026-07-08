import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Check,
  Star,
  Shield,
  ShieldCheck,
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
  X,
} from "lucide-react";

import heroPack from "@/assets/preview-pack-completo.png.asset.json";
import cardYouth from "@/assets/card-youth.jpg";
import cardPrayer from "@/assets/card-prayer.jpg";
import cardRetreat from "@/assets/card-retreat.jpg";
import mariaAvatar from "@/assets/testimonial-maria.jpg";
import carlosAvatar from "@/assets/testimonial-carlos.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

// ─────────────────────────────────────────────────────────────
// Dados
// ─────────────────────────────────────────────────────────────
const includes = [
  { icon: Gamepad2, title: "Jogos Bíblicos", qty: "+20 dinâmicas", value: "R$59,90" },
  { icon: HandHeart, title: "Guias de Oração", qty: "+15 guias", value: "R$44,90" },
  { icon: Users, title: "Quebra-gelos Cristãos", qty: "+18 atividades", value: "R$39,90" },
  { icon: Target, title: "Atividades Dinâmicas", qty: "+25 propostas", value: "R$54,90" },
  { icon: Tent, title: "Dinâmicas para Retiros", qty: "+22 materiais", value: "R$59,90" },
  { icon: ClipboardList, title: "Roteiros para Encontros", qty: "+20 roteiros", value: "R$44,90" },
];

const benefits = [
  "Prender a atenção de jovens e crianças desde o primeiro minuto",
  "Encontros mais dinâmicos, participativos e memoráveis",
  "Ensinar a fé de forma prática, não apenas teórica",
  "Fazer com que queiram voltar na semana seguinte",
  "Sentir-se seguro e preparado ao conduzir cada encontro",
];

const steps = [
  { n: "01", title: "Escolha o tema", body: "Abra o pack e selecione o eixo do encontro." },
  { n: "02", title: "Selecione os recursos", body: "Pegue a dinâmica, guia ou roteiro que precisa." },
  { n: "03", title: "Aplique no seu encontro", body: "Imprima, leia e conduza. Zero preparação prévia." },
  { n: "04", title: "Veja a participação", body: "Grupos mais vivos, semana após semana." },
];

const compatible = [
  "Catequese", "Pastoral juvenil", "Retiros espirituais",
  "Encontros paroquiais", "Formação cristã", "Movimentos católicos",
];

const bonuses = [
  { title: "Cancioneiro de Bolso", desc: "Cantos católicos organizados por momento litúrgico." },
  { title: "Manual Antifalhas", desc: "O que fazer quando o grupo não responde ou algo dá errado." },
  { title: "Calendário Litúrgico Perpétuo", desc: "Guia visual do ano litúrgico completo." },
  { title: "Código do Compromisso Católico", desc: "Base espiritual para líderes." },
  { title: "Arsenal Pastoral 50X", desc: "50 recursos rápidos para reuniões express." },
  { title: "Kit Catequese Encantada", desc: "Materiais para crianças de 6 a 12 anos." },
  { title: "Matrimônio Firme™", desc: "Retiro breve para casais da paróquia." },
];

const testimonials = [
  {
    name: "Maria G.",
    role: "Catequista · São Paulo",
    text: "Antes eu passava horas montando cada encontro. Agora abro o pack, escolho a dinâmica e pronto. As crianças participam como nunca.",
    img: mariaAvatar,
  },
  {
    name: "Carlos R.",
    role: "Líder Pastoral · Belo Horizonte",
    text: "Os roteiros para encontros são ouro puro. Estruturados, fiéis à doutrina e fáceis de aplicar. Recomendo 100%.",
    img: carlosAvatar,
  },
];

const faqs = [
  {
    q: "Como recebo o material?",
    a: "Acesso imediato por e-mail após o pagamento. É 100% digital, você baixa em menos de 2 minutos e guarda para sempre.",
  },
  {
    q: "Funciona para minha paróquia ou grupo?",
    a: "Sim. Está em português do Brasil e é adaptável a qualquer contexto. Já é utilizado por mais de 1.655 líderes em +15 países.",
  },
  {
    q: "Não sou muito tecnológico, vou conseguir usar?",
    a: "Com certeza. São PDFs prontos para imprimir. Não precisa de programas especiais nem de conhecimentos técnicos.",
  },
  {
    q: "O conteúdo é doutrinalmente correto?",
    a: "Sim. Todos os recursos foram elaborados seguindo a doutrina católica e o Magistério da Igreja.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas.",
  },
];

const recentBuyers = [
  { name: "Patrícia L.", city: "São Paulo, SP", mins: 2 },
  { name: "Pedro M.", city: "Rio de Janeiro, RJ", mins: 6 },
  { name: "André C.", city: "Belo Horizonte, MG", mins: 11 },
  { name: "Sofia R.", city: "Curitiba, PR", mins: 18 },
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

function CTA({ children = "Quero acessar o Pack por R$27,00" }: { children?: React.ReactNode }) {
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
      <ExitIntentPopup />
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
        <span className="font-display text-xl">Acervo Católico</span>
      </div>
      <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        <a href="#incluye" className="hover:text-foreground">Inclui</a>
        <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
        <a href="#testimonios" className="hover:text-foreground">Depoimentos</a>
        <a href="#faq" className="hover:text-foreground">FAQ</a>
      </div>
      <a
        href="#oferta"
        className="rounded-full glass-strong px-4 py-2 text-sm font-medium text-foreground transition hover:brightness-110"
      >
        Acessar por R$27,00
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
          +1.655 líderes em 15 países já utilizam
        </div>
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-foreground md:text-5xl">
          Sem tempo e sem ideias toda semana?{" "}
          <span className="italic text-[color:var(--sky)]">Aqui está tudo pronto</span> para seus
          encontros, retiros e catequeses.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Pack com <strong className="text-foreground">+360 recursos católicos digitais</strong> em
          PDF, prontos para imprimir e aplicar. Feito para catequistas, líderes e coordenadores
          pastorais de todo o Brasil.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CTA />
          <div className="text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Acesso imediato após o pagamento
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span>💳 Pagamento único</span>
          <span>·</span>
          <span>Acesso vitalício</span>
          <span>·</span>
          <span>Garantia de 7 dias</span>
        </div>
      </div>

      {/* Hero image card */}
      <div className="relative mt-14 aspect-[1558/1009] overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
        <img
          src={heroPack.url}
          alt="Prévia do Pack Acervo Católico Premium com livros e tablet"
          width={1558}
          height={1009}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--success)]" />
          Prévia do pack completo
        </div>
        <div className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-foreground shadow md:flex">
          <Download className="h-4 w-4" /> Entrega por e-mail em minutos
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="container-narrow py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Com este pack você vai conseguir
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Conduzir encontros que os jovens{" "}
            <span className="italic text-[color:var(--sky)]">não querem perder</span>.
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
            O que inclui
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            6 coleções. <span className="italic">+360 recursos.</span> Um único pack.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada coleção é um PDF independente, pronto para imprimir e usar sem preparação prévia.
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
                  INCLUÍDO
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
            <p className="text-sm opacity-70">Valor total se comprar separadamente</p>
            <p className="font-display text-4xl">
              R$304,40 <span className="text-sm opacity-70">BRL</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-70">Hoje você paga uma única vez</p>
            <p className="font-display text-4xl text-[color:var(--gold)]">R$27,00</p>
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
          Como funciona
        </p>
        <h2 className="font-display text-4xl md:text-5xl">
          De abrir o pack a conduzir o encontro em <span className="italic">4 passos</span>.
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
              100% compatível
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Funciona em qualquer paróquia ou grupo.
            </h3>
            <p className="mt-3 text-foreground/75">
              Em português do Brasil, adaptável à realidade da sua comunidade.
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
          Os recursos em ação
        </p>
        <h2 className="font-display text-4xl md:text-5xl">
          Veja como ficam <span className="italic">em um encontro real</span>.
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
              alt="Recurso pastoral em ação"
              width={900}
              height={1200}
              loading="lazy"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
              <span className="font-display text-xl">
                {["Jogos & dinâmicas", "Retiros", "Oração"][i]}
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
            Vamos ser honestos
          </p>
          <h2 className="text-center font-display text-4xl md:text-5xl">
            Por que não funcionou para você <span className="italic">antes</span>?
          </h2>
          <div className="mt-10 space-y-4 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">Não é falta de esforço.</strong> É falta de um
              sistema pronto para recorrer quando o domingo se aproxima.
            </p>
            <p>
              Sem estrutura, tudo depende do improviso: buscar ideias na internet, adaptar dinâmicas
              genéricas, imprimir em cima da hora…
            </p>
            <p>
              E isso gera <strong className="text-foreground">frustração</strong>, encontros
              mornos e vontade de jogar a toalha.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--danger)]">
              Antes
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>· Horas buscando ideias</li>
              <li>· Grupos distraídos e em silêncio</li>
              <li>· Medo do “e agora, o que faço?”</li>
              <li>· Encontros que não deixam marca</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[color:var(--success)]/30 bg-[color:var(--success)]/5 p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--success)]">
              Depois
            </p>
            <ul className="space-y-2 text-foreground">
              <li>✓ Encontros participativos</li>
              <li>✓ Preparação em 10 minutos</li>
              <li>✓ Estrutura clara semana a semana</li>
              <li>✓ Grupos que querem voltar</li>
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
            <span>🔥 Preços promocionais só por hoje</span>
            <span className="flex items-center gap-2 tabular-nums">
              <Clock className="h-4 w-4" />
              Termina em {mm}:{ss}
            </span>
          </div>

          <div className="grid gap-8 bg-gradient-to-b from-[rgba(20,14,10,0.55)] via-[rgba(20,14,10,0.72)] to-[rgba(20,14,10,0.85)] p-6 md:grid-cols-[1.1fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-3xl md:text-5xl">
                Acesse o Pack Completo <span className="italic text-[color:var(--gold)]">hoje</span>.
              </h2>
              <p className="mt-3 text-foreground/80">
                Todo o sistema pastoral, em um único pagamento. Guarde para sempre.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-center md:text-left">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Valor total se comprar separadamente</p>
                  <p className="font-display text-2xl text-white/40 line-through decoration-white/30">R$ 304,40 <span className="text-sm font-medium text-white/30">BRL</span></p>
                </div>

                <div className="mb-4 flex w-full items-center justify-center gap-3 md:justify-start">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20 md:w-20"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shadow-[0_0_10px_var(--gold)]"></div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20 md:w-20"></div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[color:var(--gold)]">Hoje você paga uma única vez</p>
                  <div className="flex items-start justify-center gap-1 md:justify-start">
                    <span className="mt-2 font-display text-2xl font-bold text-[color:var(--gold)]">R$</span>
                    <span className="font-display text-6xl font-extrabold tracking-tight text-[color:var(--gold)] drop-shadow-[0_2px_12px_rgba(245,196,81,0.35)]">27,00</span>
                  </div>
                  <p className="text-xs text-white/50">pagamento único · acesso vitalício</p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-foreground">
                {[
                  "+360 recursos católicos digitais em PDF",
                  "Entrega imediata por e-mail",
                  "Atualizações futuras inclusas",
                  "Português do Brasil",
                  "Garantia incondicional de 7 dias",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://pay.cakto.com.br/rh7p47q_954233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-4 text-lg font-bold text-[color:var(--ink)] shadow-[0_10px_30px_-10px_rgba(245,196,81,0.5)] transition hover:brightness-110 md:w-auto"
                >
                  <Sparkles className="h-5 w-5" /> Quero o Pack por R$27,00
                </a>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/60">
                  <span>💳 Visa</span>
                  <span>Mastercard</span>
                  <span>Pix</span>
                  <span>Boleto</span>
                  <span>· Parcelamento no cartão</span>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                + 7 bônus inclusos grátis
              </p>
              <ul className="space-y-3">
                {bonuses.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--gold)] text-[10px] font-bold text-[color:var(--ink)]">
                      ✦
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{b.title}</p>
                      <p className="text-sm text-white/60">{b.desc}</p>
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
            Centenas de líderes paroquiais <span className="italic">já usam</span>.
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span><strong className="text-foreground">+1.655</strong> líderes ativos</span>
            <span><strong className="text-foreground">+15</strong> países</span>
            <span><strong className="text-foreground">4,9/5</strong> avaliação média</span>
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
        <div className="relative mx-auto h-40 w-40 shrink-0">
          <div className="absolute inset-0 animate-pulse rounded-full bg-[color:var(--gold)]/30 blur-2xl" />
          <div
            className="relative grid h-40 w-40 place-items-center rounded-full text-[color:var(--ink)] shadow-[var(--shadow-elevated)]"
            style={{
              background:
                "conic-gradient(from 210deg, #f5c451, #fff2c9, #f5c451, #d99a2b, #f5c451)",
            }}
          >
            <div className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-b from-[color:var(--gold)] to-[#e0a83a] ring-4 ring-white/40">
              <div className="text-center">
                <ShieldCheck className="mx-auto h-8 w-8 drop-shadow" strokeWidth={2.5} />
                <p className="mt-1 font-display text-3xl leading-none tracking-tight">7</p>
                <p className="-mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em]">Dias</p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] opacity-80">
                  Garantia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-4xl">
            Garantia 100% sem risco.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Se em 7 dias sentir que não é para você, basta enviar um e-mail e devolvemos 100% do
            valor. Sem perguntas. Sem complicação.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            🔒 Pagamento seguro · Compra protegida por certificado SSL
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
          Perguntas frequentes
        </p>
        <h2 className="font-display text-4xl md:text-5xl">
          Tudo o que você quer <span className="italic">saber antes</span>.
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
          Comece o próximo encontro <span className="italic text-[color:var(--gold)]">pronto</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Um único pagamento de R$27,00 e todo o sistema é seu, para sempre.
        </p>
        <div className="mt-8">
          <a
            href="https://pay.cakto.com.br/rh7p47q_954233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--success)] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,150,90,0.6)] transition hover:brightness-110"
          >
            <Sparkles className="h-5 w-5" /> Acessar por R$27,00
          </a>
        </div>
        <p className="mt-4 text-xs text-foreground/60">
          Garantia de 7 dias · Acesso instantâneo · Pagamento único
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
          Este site não faz parte do site do Facebook nem da Facebook Inc. Além disso, este site NÃO
          é endossado pelo Facebook. FACEBOOK é uma marca registrada da FACEBOOK, Inc. Os
          resultados podem variar conforme o comprometimento e a aplicação de cada líder.
        </p>
        <p className="mt-6 text-center">© {new Date().getFullYear()} Pack Acervo Católico. Todos os direitos reservados.</p>
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
          Acabou de comprar · há {b.mins} min
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Exit Intent Popup — Downsell R$19,90
// ─────────────────────────────────────────────────────────────
function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exit_popup_shown") === "1") {
      setShown(true);
      return;
    }

    const trigger = () => {
      if (shown) return;
      setShown(true);
      setOpen(true);
      sessionStorage.setItem("exit_popup_shown", "1");
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let mobileTimer: number | undefined;
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (lastScroll - y > 40 && y < 200) trigger();
      lastScroll = y;
    };

    document.addEventListener("mouseout", onMouseOut);
    if (isMobile) {
      window.addEventListener("scroll", onScroll, { passive: true });
      mobileTimer = window.setTimeout(trigger, 45000);
    }

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      if (mobileTimer) window.clearTimeout(mobileTimer);
    };
  }, [shown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      <button
        aria-label="Fechar"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[color:var(--gold)]/40 bg-gradient-to-b from-[rgba(20,14,10,0.98)] to-[rgba(10,7,5,0.98)] p-6 shadow-2xl md:p-8">
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--gold)]">
          <Sparkles className="h-3.5 w-3.5" /> ESPERE! Oferta única nesta página
        </div>

        <h2
          id="exit-popup-title"
          className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl"
        >
          Antes de sair… leve o Pack completo por{" "}
          <span className="text-[color:var(--gold)] drop-shadow-[0_2px_12px_rgba(245,196,81,0.35)]">
            R$19,90
          </span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-white/80">
          Sabemos que o valor faz diferença. Por isso, só agora,{" "}
          <strong className="text-white">liberamos o mesmo Pack com +360 recursos católicos</strong>{" "}
          — jogos bíblicos, guias de oração, dinâmicas para retiros e encontros — por menos que um
          lanche.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-white/85">
          {[
            "Acesso imediato após o pagamento",
            "Mesmo conteúdo completo, sem cortes",
            "Vitalício — pague uma vez, use para sempre",
            "Garantia incondicional de 7 dias",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-baseline justify-center gap-3">
          <span className="text-sm text-white/50 line-through">De R$27,00</span>
          <span className="font-display text-5xl font-extrabold text-[color:var(--gold)] drop-shadow-[0_2px_16px_rgba(245,196,81,0.45)]">
            R$19,90
          </span>
        </div>

        <a
          href="https://pay.cakto.com.br/akpp5t6"
          onClick={() => setOpen(false)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-4 text-base font-bold text-[color:var(--ink)] shadow-[0_10px_40px_-10px_rgba(245,196,81,0.6)] transition hover:brightness-110"
        >
          <Sparkles className="h-5 w-5" /> Sim, quero garantir por R$19,90
        </a>

        <button
          onClick={() => setOpen(false)}
          className="mt-3 w-full text-center text-xs text-white/50 underline-offset-2 hover:text-white/80 hover:underline"
        >
          Não, prefiro perder esta oferta
        </button>

        <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-white/50">
          <ShieldCheck className="h-3.5 w-3.5" /> Pagamento seguro · 7 dias de garantia
        </p>
      </div>
    </div>
  );
}
