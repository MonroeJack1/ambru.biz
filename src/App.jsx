import { useState } from 'react'
import { ArrowRight, BarChart3, Bot, BrainCircuit, BriefcaseBusiness, CheckCircle2, ChevronDown, Clock3, Cpu, GraduationCap, Lightbulb, Mail, Menu, MessageSquare, MousePointerClick, Network, Rocket, Sparkles, Target, Workflow, X, Zap } from 'lucide-react'

const navLinks = [
  ['Services', '#services'],
  ['AI Consulting', '#consulting'],
  ['Automation', '#automation'],
  ['Learning', '#learning'],
  ['Contact', '#contact'],
]

const pains = [
  'Too many AI tools, not enough clarity',
  'Manual tasks slow down your team',
  'Marketing lacks structure and consistency',
  'Entrepreneurs need practical AI skills, not theory',
]

const services = [
  ['AI Marketing Strategy', 'Create smarter campaigns, content systems, customer journeys, and brand messages using AI-assisted workflows.', Target],
  ['AI Business Consulting', 'Identify where AI can create the biggest impact in your company, from operations to sales and decision-making.', BriefcaseBusiness],
  ['AI Automation for Companies', 'Automate repetitive tasks, internal processes, reporting, customer communication, and team workflows.', Workflow],
  ['AI Learning for Entrepreneurs', 'Practical training that helps business owners understand, use, and apply AI in real daily business scenarios.', GraduationCap],
  ['Content & Growth Systems', 'Build repeatable systems for social media, email, landing pages, offers, and campaign planning.', Rocket],
  ['Custom AI Workflows', 'Design tailored workflows using AI tools, automations, prompts, documents, and internal business processes.', Cpu],
]

const impact = [
  ['Save Time', 'Automate repetitive work and reduce manual effort across your daily operations.', Clock3],
  ['Improve Marketing', 'Create better content, clearer offers, and more consistent communication.', BarChart3],
  ['Learn Faster', 'Use AI to understand your market, improve decisions, and develop business skills faster.', BrainCircuit],
]

const steps = [
  ['Business Discovery', 'We understand your business model, goals, bottlenecks, and current workflows.'],
  ['AI Opportunity Map', 'We identify where AI can save time, improve marketing, or support your team.'],
  ['System Design', 'We create practical AI workflows, automation logic, prompts, and implementation plans.'],
  ['Training & Support', 'We help you and your team learn how to use AI confidently and effectively.'],
]

const useCases = [
  'Social media content planning', 'Email marketing campaigns', 'Customer support automation', 'Sales follow-up systems', 'Internal reporting', 'Lead qualification', 'Document processing', 'Business research', 'Training and onboarding', 'Personal productivity for founders',
]

const modules = [
  ['AI Fundamentals for Business', 'Understand what AI can and cannot do for your company.'],
  ['Prompting for Entrepreneurs', 'Learn how to ask better questions and get better business outputs.'],
  ['AI for Marketing', 'Use AI for content, campaigns, customer research, and brand positioning.'],
  ['AI for Operations', 'Use AI to simplify tasks, organize work, and automate business processes.'],
]

const testimonials = [
  ['Small business owner', 'The strategy helped us understand where AI actually fits in our business.'],
  ['Founder', 'We saved hours every week by automating repetitive internal tasks.'],
  ['Marketing consultant', 'The training made AI simple and useful for our daily work.'],
]

function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = variant === 'secondary'
    ? 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
    : variant === 'light'
      ? 'bg-white text-slate-950 hover:bg-slate-100'
      : 'bg-cyan-400 text-slate-950 shadow-[0_18px_55px_rgba(34,211,238,.28)] hover:bg-cyan-300'
  return <a className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-cyan-300/40 ${styles} ${className}`} {...props}>{children}</a>
}

function Card({ children, className = '' }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,.08)] ${className}`}>{children}</div>
}

function DashboardVisual() {
  return (
    <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur" aria-label="AI business dashboard visual">
      <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
          <div className="mb-4 flex items-center justify-between"><span className="text-sm font-semibold text-white">AI marketing insights</span><Sparkles className="h-5 w-5 text-cyan-300" aria-hidden="true" /></div>
          <div className="space-y-3">
            {['Offer clarity', 'Content velocity', 'Lead quality'].map((label, i) => <div key={label}><div className="mb-1 flex justify-between text-xs text-slate-300"><span>{label}</span><span>{82 + i * 5}%</span></div><div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-cyan-300" style={{ width: `${82 + i * 5}%` }} /></div></div>)}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white"><Workflow className="h-5 w-5 text-amber-300" aria-hidden="true" />Automation workflow</div>
          <div className="space-y-2 text-xs text-slate-300">
            {['New lead captured', 'AI qualifies request', 'CRM update created', 'Follow-up email drafted'].map((item) => <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2" key={item}><CheckCircle2 className="h-4 w-4 text-cyan-300" aria-hidden="true" />{item}</div>)}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white p-5 text-slate-950">
          <div className="text-sm font-semibold">Business growth metrics</div>
          <div className="mt-5 grid grid-cols-3 items-end gap-2" aria-label="Bar chart">
            {[38, 56, 72, 88, 66, 94].map((height, i) => <div className="rounded-t-xl bg-slate-900" key={i} style={{ height }} />)}
          </div>
          <p className="mt-3 text-xs text-slate-500">Campaign planning • Reporting • Decisions</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white"><Bot className="h-5 w-5 text-cyan-300" aria-hidden="true" />AI assistant preview</div>
          <div className="rounded-2xl bg-white/5 p-3 text-xs leading-relaxed text-slate-300">“Here are 5 practical automations that can save your team 8+ hours per week.”</div>
          <div className="mt-3 flex gap-2"><span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs text-cyan-100">Ready</span><span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs text-amber-100">3 tasks done</span></div>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, text, center = true }) {
  return <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}><p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-500">{eyebrow}</p><h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>{text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}</div>
}

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Primary navigation">
          <a href="#top" className="flex items-center gap-3 font-bold tracking-tight text-white focus:outline-none focus:ring-4 focus:ring-cyan-300/40 rounded-full"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400 text-slate-950">A</span>ambru.biz</a>
          <div className="hidden items-center gap-7 lg:flex">{navLinks.map(([label, href]) => <a className="text-sm text-slate-300 transition hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-300/30 rounded-full" href={href} key={label}>{label}</a>)}</div>
          <Button href="#contact" className="hidden lg:inline-flex">Book a Strategy Call</Button>
          <button className="rounded-2xl border border-white/10 p-3 text-white lg:hidden" aria-label="Open navigation menu" onClick={() => setOpen(true)}><Menu /></button>
        </nav>
        {open && <div className="fixed inset-0 z-50 bg-slate-950/95 p-6 lg:hidden"><div className="flex items-center justify-between"><strong>ambru.biz</strong><button aria-label="Close navigation menu" onClick={() => setOpen(false)}><X /></button></div><div className="mt-10 grid gap-6">{navLinks.map(([label, href]) => <a onClick={() => setOpen(false)} className="text-2xl font-semibold" href={href} key={label}>{label}</a>)}<Button href="#contact" onClick={() => setOpen(false)}>Book a Strategy Call</Button></div></div>}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 py-20 md:py-28">
          <div className="absolute left-1/2 top-0 -z-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">AI Strategy • Marketing • Automation • Learning</p>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">Build a Smarter Business with AI</h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">Ambru.biz helps entrepreneurs use AI for marketing, automation, consulting, and faster business learning — without complexity or wasted time.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Button href="#contact">Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Button><Button href="#services" variant="secondary">Explore Services</Button></div>
              <p className="mt-6 text-sm text-slate-400">Practical AI systems for entrepreneurs, founders, and growing companies.</p>
            </div>
            <DashboardVisual />
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-5 py-6">
          <div className="mx-auto grid max-w-7xl gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">{['AI Strategy', 'Marketing Systems', 'Business Automation', 'Entrepreneur Learning'].map((item) => <div className="rounded-2xl border border-white/10 px-5 py-4 font-semibold text-white" key={item}>{item}</div>)}</div>
        </section>

        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Problem" title="Most Businesses Know AI Is Important. Few Know Where to Start." text="AI can save time, improve marketing, automate repetitive tasks, and help entrepreneurs make better decisions. But without a clear strategy, it becomes another confusing tool instead of a real business advantage." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{pains.map((pain) => <Card className="hover:-translate-y-1 transition" key={pain}><Lightbulb className="mb-5 h-7 w-7 text-cyan-500" /><h3 className="text-lg font-bold text-slate-950">{pain}</h3></Card>)}</div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Services" title="Services Designed for Modern Entrepreneurs" text="From strategy to implementation, Ambru.biz helps you turn AI into practical business systems." />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, text, Icon]) => <Card key={title} className="group hover:-translate-y-1 transition"><div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></Card>)}</div>
          </div>
        </section>

        <section id="consulting" className="bg-white px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1fr] lg:items-center">
            <div><SectionHeader center={false} eyebrow="Business impact" title="Turn AI into a Practical Business System" /><div className="mt-8 grid gap-5">{impact.map(([title, text, Icon]) => <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" key={title}><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-cyan-600"><Icon /></div><div><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-1 text-slate-600">{text}</p></div></div>)}</div></div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300" aria-label="AI system diagram">
              <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-center text-lg font-black text-cyan-100">AI<br />Core</div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">{['Marketing', 'Operations', 'Sales', 'Learning', 'Reporting', 'Automation'].map((node) => <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center" key={node}>{node}</div>)}</div>
            </div>
          </div>
        </section>

        <section id="automation" className="bg-slate-50 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Process" title="How We Work" />
            <div className="mt-14 grid gap-6 lg:grid-cols-4">{steps.map(([title, text], index) => <Card key={title} className="relative"><span className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-slate-950 font-black text-cyan-300">{index + 1}</span><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></Card>)}</div>
          </div>
        </section>

        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Use cases" title="Practical AI Use Cases" text="Real business applications, not abstract theory." />
            <div className="mt-10 flex flex-wrap justify-center gap-3">{useCases.map((item) => <span className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700" key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section id="learning" className="bg-slate-950 px-5 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1fr] lg:items-start">
            <div><p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">AI Learning</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">AI Learning for Entrepreneurs</h2><p className="mt-5 text-lg leading-8 text-slate-300">Learn how to use AI as a real business partner — not just as a chatbot. Ambru.biz helps entrepreneurs build practical AI skills for marketing, operations, planning, productivity, and decision-making.</p><Button href="#contact" className="mt-8" variant="light">Explore AI Training</Button></div>
            <div className="grid gap-5 sm:grid-cols-2">{modules.map(([title, text]) => <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6" key={title}><GraduationCap className="mb-5 h-7 w-7 text-amber-300" /><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}</div>
          </div>
        </section>

        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Trust" title="Built for Entrepreneurs Who Want Practical Results" /><div className="mt-12 grid gap-6 md:grid-cols-3">{testimonials.map(([role, quote]) => <Card key={role}><MessageSquare className="mb-5 h-7 w-7 text-cyan-500" /><p className="text-lg leading-8 text-slate-700">“{quote}”</p><p className="mt-6 font-bold text-slate-950">{role}</p></Card>)}</div></div>
        </section>

        <section className="bg-slate-950 px-5 py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-amber-300/10 p-8 text-center shadow-2xl md:p-14">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">Ready to Make AI Useful for Your Business?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Let’s identify where AI can create the biggest impact in your company and turn it into a practical action plan.</p>
            <Button href="#contact" className="mt-8">Book a Strategy Call</Button>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.75fr]">
            <div><SectionHeader center={false} eyebrow="Contact" title="Contact Ambru.biz" text="Whether you need AI consulting, marketing systems, automation, or entrepreneur training, Ambru.biz can help you move from confusion to clarity." />
              <form className="mt-8 grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl" aria-label="Contact form">
                <div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-slate-700">Name<input className="min-h-12 rounded-2xl border border-slate-200 px-4 focus:outline-none focus:ring-4 focus:ring-cyan-300/30" required /></label><label className="grid gap-2 text-sm font-semibold text-slate-700">Email<input type="email" className="min-h-12 rounded-2xl border border-slate-200 px-4 focus:outline-none focus:ring-4 focus:ring-cyan-300/30" required /></label></div>
                <div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-slate-700">Phone<input className="min-h-12 rounded-2xl border border-slate-200 px-4 focus:outline-none focus:ring-4 focus:ring-cyan-300/30" /></label><label className="grid gap-2 text-sm font-semibold text-slate-700">Company<input className="min-h-12 rounded-2xl border border-slate-200 px-4 focus:outline-none focus:ring-4 focus:ring-cyan-300/30" /></label></div>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">What do you need help with?<select className="min-h-12 rounded-2xl border border-slate-200 px-4 focus:outline-none focus:ring-4 focus:ring-cyan-300/30"><option>AI Consulting</option><option>Marketing</option><option>Automation</option><option>AI Learning</option><option>Other</option></select></label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">Message<textarea className="min-h-36 rounded-2xl border border-slate-200 p-4 focus:outline-none focus:ring-4 focus:ring-cyan-300/30" /></label>
                <button className="min-h-12 rounded-full bg-slate-950 px-6 font-bold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-300/40">Send Message</button>
              </form>
            </div>
            <aside className="rounded-[2rem] bg-slate-950 p-8 text-white lg:mt-28"><Mail className="mb-6 h-10 w-10 text-cyan-300" /><h3 className="text-3xl font-black">Start with clarity</h3><p className="mt-4 leading-8 text-slate-300">Tell us what you want to improve, automate, or learn. We’ll help you find the most practical next step.</p><div className="mt-8 space-y-3 text-sm text-slate-300"><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Strategy call bookings</p><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Service inquiries</p><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Practical AI guidance</p></div></aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><strong className="text-xl text-white">ambru.biz</strong><p className="mt-2 max-w-xl text-slate-400">AI consulting, marketing systems, automation, and practical learning for modern entrepreneurs.</p></div><div className="flex flex-wrap gap-4 text-sm text-slate-300">{navLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div></div><p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">© 2026 ambru.biz. All rights reserved.</p>
      </footer>
    </div>
  )
}
