/*
  QueryWise – Landing Page (React + TailwindCSS)
  ------------------------------------------------
  Observação sobre estrutura de pastas:
  Para pré-visualização aqui, todos os componentes estão neste arquivo.
  Ao usar no seu projeto, recomendo separar assim:

  src/
  ├─ components/
  │  ├─ Header.tsx
  │  ├─ Hero.tsx
  │  ├─ Features.tsx
  │  ├─ HowItWorks.tsx
  │  ├─ Benefits.tsx
  │  ├─ Testimonials.tsx
  │  ├─ CTASection.tsx
  │  └─ Footer.tsx
  ├─ App.tsx
  └─ main.tsx

  Tecnologias:
  - React + TailwindCSS
  - lucide-react para ícones
  - framer-motion para microanimações sutis
*/
/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */

import { motion } from "framer-motion";
import {
    BookText,
    Bot,
    CheckCircle2,
    ChevronRight,
    Linkedin,
    Mail,
    MessageSquareText,
    Phone,
    ShieldCheck,
    Sparkles,
    Tags,
    Users,
    Zap,
} from "lucide-react";
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="#home" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center shadow-sm">
                            <Bot className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-slate-800 text-lg tracking-tight">
                            Query<span className="text-blue-600">Wise</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
                        <a href="#home" className="hover:text-blue-700 transition">
                            Home
                        </a>
                        <a href="#features" className="hover:text-blue-700 transition">
                            Funcionalidades
                        </a>
                        <a href="#how" className="hover:text-blue-700 transition">
                            Como Funciona
                        </a>
                        <a href="#contact" className="hover:text-blue-700 transition">
                            Contato
                        </a>
                    </nav>

                    <div className="flex gap-4 items-center">
                        <div>
                            <a className="hover:underline hover:text-blue-800" href="/">Entrar</a>
                        </div>
                        <a
                            href="https://wa.me/5547991122432?text=Olá%20gostaria%20de%20uma%20demonstração%20do%20QueryWise"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 transition"
                        >
                            Solicitar Demonstração <ChevronRight className="h-4 w-4" />
                        </a>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700"
                        aria-label="Abrir menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-slate-200 bg-white">
                    <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4 text-slate-700">
                        <a
                            href="#home"
                            className="hover:text-blue-700"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            className="hover:text-blue-700"
                            onClick={() => setOpen(false)}
                        >
                            Funcionalidades
                        </a>
                        <a
                            href="#how"
                            className="hover:text-blue-700"
                            onClick={() => setOpen(false)}
                        >
                            Como Funciona
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-blue-700"
                            onClick={() => setOpen(false)}
                        >
                            Contato
                        </a>
                        <a
                            href="https://wa.me/5547991122432?text=Olá%20gostaria%20de%20uma%20demonstração%20do%20QueryWise"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
                        >
                            Solicitar Demonstração <ChevronRight className="h-4 w-4" />
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

function Hero() {
    return (
        <section
            id="home"
            className="pt-28 pb-16 sm:pt-32 bg-gradient-to-b from-white to-slate-50"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900"
                    >
                        Centralize seu conhecimento. Responda seus clientes com
                        inteligência.
                    </motion.h1>
                    <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        O QueryWise conecta sua base de conhecimento ao WhatsApp usando RAG
                        e embeddings para identificar similaridades e responder
                        automaticamente quando houver conteúdo relevante — mantendo o
                        atendimento humano quando necessário.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
                        >
                            Comece Agora <ChevronRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#how"
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50"
                        >
                            Ver como funciona
                        </a>
                    </div>
                    <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                        <div className="inline-flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4" /> Privacidade e segurança
                        </div>
                        <div className="inline-flex items-center gap-2">
                            <Zap className="h-4 w-4" /> Implantação rápida
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="relative"
                >
                    {/* Mockup simples do chat */}
                    <div className="mx-auto w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-lg">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-blue-600 grid place-items-center">
                                    <Bot className="h-4 w-4 text-white" />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-slate-800">
                                        Bot QueryWise
                                    </div>
                                    <div className="text-slate-500">online</div>
                                </div>
                            </div>
                            <Sparkles className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="max-w-[80%] rounded-2xl bg-slate-100 p-3 text-slate-700">
                                Olá! 👋Seja bem-vindo ao QueryWise. Envie sua mensagem abaixo e o sistema irá realizar uma consulta por similaridade para verificar se já existe algum conhecimento registrado que possa te ajudar.
                            </div>
                            <div className="ml-auto max-w-[80%] rounded-2xl bg-blue-600 p-3 text-white">
                                O sistema não envia e-mails de confirmação.
                            </div>
                            <div className="max-w-[80%] rounded-2xl bg-slate-100 p-3 text-slate-700">
                                Verifique a fila de mensagens e reenvie usando o comando{" "}
                                <code className="px-1 py-0.5 bg-slate-200 rounded">/retry</code>
                                .
                            </div>
                            <div className="text-xs text-slate-500">
                                Se não existir conhecimento compatível, o time de suporte assume o
                                atendimento.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SectionTitle({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-3 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </div>
    );
}

function Features() {
    const items = [
        {
            icon: BookText,
            title: "Problemas + Soluções",
            desc: "Cadastre conhecimentos no formato estruturado para respostas consistentes e auditáveis.",
        },
        {
            icon: Tags,
            title: "Organização por Tags",
            desc: "Classifique por tags para filtrar, priorizar e localizar conteúdos em segundos.",
        },
        {
            icon: MessageSquareText,
            title: "WhatsApp Inteligente",
            desc: "Intercepta mensagens, busca similaridades via embeddings e responde automaticamente.",
        },
        {
            icon: Users,
            title: "Continuidade Humanizada",
            desc: "Sem correspondência relevante? O atendimento humano continua sem fricção.",
        },
    ];

    return (
        <section id="features" className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Funcionalidades"
                    subtitle="Tudo que você precisa para acelerar seu suporte e centralizar o conhecimento."
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map(({ icon: Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="h-11 w-11 rounded-xl bg-blue-50 grid place-items-center mb-4">
                                <Icon className="h-5 w-5 text-blue-700" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                {desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        {
            title: "1. Mensagem no WhatsApp",
            desc: "O cliente envia uma dúvida e o QueryWise intercepta o contato.",
        },
        {
            title: "2. Busca por similaridade",
            desc: "A aplicação consulta a base por embeddings e recupera o conteúdo mais relevante.",
        },
        {
            title: "3. Resposta automática ou humana",
            desc: "Se houver match suficiente, respondemos na hora; caso contrário, o time assume.",
        },
    ];

    return (
        <section id="how" className="py-16 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Como Funciona"
                    subtitle="RAG + embeddings a serviço do seu atendimento, com continuidade humanizada."
                />
                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                                {i + 1}
                            </div>
                            <h4 className="mt-4 text-base font-semibold text-slate-900">
                                {s.title}
                            </h4>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Benefits() {
    const items = [
        { text: "Atendimento mais rápido" },
        { text: "Redução de retrabalho" },
        { text: "Base de conhecimento em evolução contínua" },
        { text: "Integração simples e segura" },
    ];
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Benefícios"
                    subtitle="Resultados práticos desde os primeiros dias de uso."
                />
                <div className="grid md:grid-cols-2 gap-6">
                    {items.map((b) => (
                        <div
                            key={b.text}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5 shadow-sm"
                        >
                            <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5" />
                            <p className="text-slate-700">{b.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    const cards = [
        {
            name: "Ana Ribeiro",
            role: "Líder de Suporte",
            text: "Reduzimos o tempo de primeira resposta em 42% na primeira semana. O time ficou mais leve e o cliente, mais satisfeito.",
        },
        {
            name: "Carlos Mendes",
            role: "Head de Operações",
            text: "Organizar o conhecimento em problema + solução mudou o jogo. Agora temos histórico e repetibilidade.",
        },
        {
            name: "Marina Souza",
            role: "CX Manager",
            text: "A continuidade humana sem atrito é essencial. Quando não há resposta automática, nosso time já entra com contexto.",
        },
    ];
    return (
        <section className="py-16 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Depoimentos"
                    subtitle="Algumas palavras de quem já acelerou o suporte com o QueryWise."
                />
                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((c) => (
                        <motion.figure
                            key={c.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <blockquote className="text-slate-700 leading-relaxed">
                                “{c.text}”
                            </blockquote>
                            <figcaption className="mt-4 text-sm text-slate-500">
                                <span className="font-medium text-slate-800">{c.name}</span> •{" "}
                                {c.role}
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    Transforme seu suporte com o poder da inteligência no atendimento.
                    Experimente o QueryWise agora.
                </h3>
                <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
                    Coloque seu conhecimento para trabalhar — com respostas automáticas
                    precisas e continuidade humanizada.
                </p>
                <div className="mt-6">
                    <a
                        href="https://wa.me/5547991122432?text=Olá%20gostaria%20de%20uma%20demonstração%20do%20QueryWise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-blue-700 font-medium shadow hover:bg-blue-50"
                    >
                        Solicitar Demonstração <ChevronRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer id="contact" className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center shadow-sm">
                            <Bot className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-slate-800 text-lg tracking-tight">
                            Query<span className="text-blue-600">Wise</span>
                        </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 max-w-xs">
                        Agilidade no suporte, centralização do conhecimento e respostas
                        inteligentes — em um só lugar.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-900">Links</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        <li>
                            <a href="#home" className="hover:text-blue-700">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="hover:text-blue-700">
                                Funcionalidades
                            </a>
                        </li>
                        <li>
                            <a href="#how" className="hover:text-blue-700">
                                Como Funciona
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-900">Contato</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4" /> contato@querywise.dev
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4" /> +55 (11) 99999-9999
                        </li>
                        <li className="flex items-center gap-2">
                            <Linkedin className="h-4 w-4" /> /company/querywise
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-900">Newsletter</h4>
                    <p className="mt-3 text-sm text-slate-600">
                        Receba novidades, guias e boas práticas.
                    </p>
                    <form className="mt-3 flex gap-2">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="flex-1 rounded-2xl border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <button className="rounded-2xl bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700">
                            Inscrever
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} QueryWise. Desenvolvido por Geferson Holdorf
            </div>
        </footer>
    );
}

export default function LandingPage() {
    return (
        <div className="min-h-screen scroll-smooth text-slate-800">
            <Header />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Benefits />
                <Testimonials />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
