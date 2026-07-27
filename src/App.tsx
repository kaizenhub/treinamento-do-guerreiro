/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Flame, 
  Shield, 
  Zap, 
  Cross, 
  Eye, 
  LockOpen, 
  Star, 
  CheckCircle2, 
  XOctagon,
  MoreHorizontal,
  ArrowUpRight,
  BookOpen,
  Facebook,
  Instagram,
  Youtube,
  Headset,
  MessageCircle,
  Users
} from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

function Helmet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 21v-9c0-2 4-2 4 0v4l2 2 2-2v-4c0-2 4-2 4 0v9h3v-9a9 9 0 0 0-18 0v9h3z" />
    </svg>
  );
}

// --- Shared Components ---


const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ScrollParallax: React.FC<{ children: React.ReactNode, offset?: number, className?: string }> = ({ children, offset = 50, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// --- Sections ---

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]); // Moves down slightly faster than scroll
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]); // Moves up contrary to scroll
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col md:justify-end overflow-hidden bg-[#050505]" id="hero">
      {/* Background Elements - Perfecting the moody, grainy, glowing look */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grain Overlay */}
        <div className="absolute inset-0 z-20 opacity-[0.25] mix-blend-overlay" style={{backgroundImage: "url('/noise.svg')"}}></div>
        
        {/* Supernatural Glow Vibe */}
        <motion.div style={{ y: y1, opacity }} className="absolute top-1/2 right-[10%] -translate-y-[40%] w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full blur-[100px] bg-gradient-radial from-[#FF6B1A]/10 via-[#F5A623]/5 to-transparent"></motion.div>
        <motion.div style={{ y: y2, opacity }} className="absolute top-1/2 right-[20%] -translate-y-[60%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full blur-[80px] bg-gradient-radial from-[#4361ee]/5 via-transparent to-transparent mix-blend-screen"></motion.div>

        {/* Glowing orb image placeholder to match the reference's ethereal center-right object */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: y1 }} 
          className="absolute inset-0 md:top-0 md:left-auto md:right-0 w-full md:w-[60%] h-full flex items-end md:items-center justify-center mix-blend-screen md:[mask-image:linear-gradient(to_right,transparent,black_40%,black)] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_40%,black)]"
        >
          <img 
             src="/hero-bg-mobile.webp" 
             alt="Supernatural atmosphere"
             width={750}
             height={1334}
             fetchPriority="high"
             className="block md:hidden w-full h-full object-cover object-[center_bottom]"
          />
          <img 
             src="/hero-bg.webp" 
             alt="Supernatural atmosphere"
             width={1920}
             height={1080}
             className="hidden md:block w-full h-full object-cover object-[70%_center]"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full pb-6 md:pb-10 pt-32 md:pt-40 flex flex-col flex-grow justify-between md:justify-end">
         <div className="flex flex-col w-full h-full flex-grow">
             <div className="max-w-[48rem] mt-0 md:mt-auto">
                <FadeIn delay={0.1}>
                  <h1 className="text-[40px] leading-[1.05] sm:text-6xl md:text-[5.5rem] font-sora font-medium tracking-tight mb-4 md:mb-6 text-white text-shadow-sm">
                    Você foi chamado.<br />
                    <span className="text-white md:text-gray-300">O extraordinário espera por você.</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-[15px] md:text-[15px] text-gray-300 mb-8 md:mb-10 max-w-[32rem] leading-relaxed font-light">
                    Existe uma diferença enorme entre sentir o chamado de Deus e estar preparado para caminhar nele. Comece a jornada hoje.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3} className="hidden md:block mb-16 md:mb-20 w-full max-w-[48rem] overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                  {/* Ticker Row */}
                  <motion.div 
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    className="flex w-max opacity-40 grayscale transition-opacity duration-500 hover:opacity-70"
                  >
                    <img src="/ticker.webp" alt="Logos" width={600} height={32} loading="lazy" className="h-6 md:h-8 object-contain pr-8 pointer-events-none" />
                    <img src="/ticker.webp" alt="Logos" width={600} height={32} loading="lazy" className="h-6 md:h-8 object-contain pr-8 pointer-events-none" />
                  </motion.div>
                </FadeIn>
             </div>

             <div className="flex-grow md:hidden min-h-[220px]"></div>

             {/* Bottom Strip mimicking the reference image perfectly */}
             <FadeIn delay={0.4} className="w-full mt-auto md:mt-0 pb-4 md:pb-0">
               {/* Divider line with active segment */}
               <div className="w-full h-[1px] bg-white/10 mb-6 relative">
                 <div className="absolute top-0 left-0 h-[2px] bg-[#e94e1b] w-[20%] shadow-[0_0_10px_rgba(233,78,27,0.5)] -translate-y-[0.5px]"></div>
               </div>

               {/* Features grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-6 xl:gap-12">
                  {[
                    { icon: <CheckCircle2 className="w-[16px] h-[16px] md:w-[14px] md:h-[14px]"/>, text: "Fase 1 integral para forjar as raízes" },
                    { icon: <Zap className="w-[16px] h-[16px] md:w-[14px] md:h-[14px]"/>, text: "Desenvolva autoridade e unção prática" },
                    { icon: <Flame className="w-[16px] h-[16px] md:w-[14px] md:h-[14px]"/>, text: "Trilhas de saúde espiritual focadas" },
                    { icon: <Star className="w-[16px] h-[16px] md:w-[14px] md:h-[14px]"/>, text: "Comunidade restrita com histórico real" }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex flex-col gap-2 md:gap-3">
                       <span className="text-[#e94e1b]">{feat.icon}</span>
                       <p className="text-gray-400 text-[13px] md:text-[11.5px] leading-[1.4] md:leading-[1.6] max-w-[190px] font-light block pr-2">{feat.text}</p>
                    </div>
                  ))}
               </div>
             </FadeIn>
         </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative border-b border-white/[0.02] overflow-hidden" id="pain">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left side: Graphic and bold text */}
            <FadeIn className="relative min-h-[400px] flex items-center justify-start lg:justify-center">
               <div className="absolute inset-0 bg-[#FF6B1A]/10 blur-[120px] rounded-full max-w-[80%] mx-auto pointer-events-none"></div>
               
               {/* Animated Fire backdrop - reduced particles on mobile for GPU performance */}
               <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none mix-blend-screen">
                 {/* Core Glow */}
                 <div className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-[#FF4500]/60 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '3s' }}></div>

                 {/* Flame particles - 4 on mobile, 8 on desktop (rendered via CSS visibility) */}
                 {[...Array(8)].map((_, i) => (
                   <motion.div
                     key={`flame-${i}`}
                     initial={{ 
                       y: 50, 
                       x: (i % 2 === 0 ? -1 : 1) * (i * 8), 
                       scale: 0.8, 
                       opacity: 0 
                     }}
                     animate={{ 
                       y: [20, -120 - (i * 20)], 
                       x: [(i % 2 === 0 ? -1 : 1) * (i * 8), (i % 2 === 0 ? -1 : 1) * (i * 15 + 10)],
                       scale: [0.8, 1.5, 0], 
                       opacity: [0, 0.8, 0] 
                     }}
                     transition={{ 
                       duration: 2 + (i % 3) * 0.5, 
                       repeat: Infinity, 
                       delay: i * 0.25,
                       ease: "easeOut"
                     }}
                     className={`absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full blur-[25px] ${i >= 4 ? 'hidden md:block' : ''} ${
                       i % 3 === 0 ? 'bg-[#FF8C00]' : i % 2 === 0 ? 'bg-[#FF4500]' : 'bg-[#FFD700]'
                     }`}
                     style={{
                       borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
                     }}
                   />
                 ))}
               </div>
               
               <div className="relative z-10 flex flex-col w-full">
                 <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-white font-sora font-medium text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                   O Seu<br />Chamado
                 </h2>
                 <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-white/50 font-sora font-medium text-left pl-12 md:pl-20 relative mt-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 md:w-14 h-[1px] bg-[#FF6B1A]/80 shadow-[0_0_10px_#FF6B1A]"></div>
                   Sua Realidade
                 </h2>
               </div>
            </FadeIn>

            {/* Right side: Content */}
            <FadeIn delay={0.2} className="flex flex-col items-start text-left lg:pl-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8">
                <span className="text-gray-300 text-[13px] font-medium tracking-wide">O que é a Mentoria?</span>
              </div>
              
              <h3 className="text-[28px] md:text-[34px] lg:text-[38px] text-white font-sora font-medium leading-[1.15] tracking-tight mb-8">
                Muitos recebem palavras proféticas e sentem um fogo queimando no coração!
              </h3>
              
              <div className="space-y-6 text-gray-400 font-light text-[15px] md:text-[17px] leading-relaxed">
                <p>
                  Muitos têm a certeza de que Deus os separou para algo grande. Mas o tempo passa e a sensação é de <strong className="text-white font-normal">estagnação</strong>. A frustração de saber quem você é no espírito, mas ainda não viver isso na prática.
                </p>
                <div className="w-8 h-[1px] bg-white/10 my-1"></div>
                <p className="text-gray-500 text-[14px]">
                  Você está diante da escolha mais importante para o seu ministério. Chegou a hora de transformar chamado em <span className="text-gray-300 font-medium">realidade</span> e ser verdadeiramente treinado.
                </p>
              </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TheJourney() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]" id="journey">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        <FadeIn>
           {/* Top Icon matching reference */}
           <div className="mx-auto w-[64px] h-[64px] bg-[#e8e8e8] rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10 hover:scale-105 transition-transform">
             <Helmet className="w-8 h-8 text-[#1a1a1a]" strokeWidth={2.5} />
           </div>
           
           <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-sora font-medium mb-6 text-white tracking-tight leading-[1.1] max-w-4xl mx-auto text-shadow-sm">
             Treinamento do Guerreiro
           </h2>
           <p className="text-[15px] sm:text-[16px] text-gray-400 mb-20 max-w-[38rem] mx-auto font-light leading-relaxed">
             Uma trilha completa de formação espiritual para quem decidiu que não vai mais viver abaixo do seu chamado.
           </p>
        </FadeIn>

        {/* Features layout matching reference (divided borders) */}
        <div className="mx-auto max-w-5xl border-y border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {[
              { icon: <Shield className="w-6 h-6"/>, title: "Raízes", desc: "A fundação de oração, jejum, constância e intimidade que suporta pesos de glória." },
              { icon: <CheckCircle2 className="w-6 h-6"/>, title: "Conduta", desc: "O caráter aprovado pelo Pai. Honra, santidade e alinhamento prático." },
              { icon: <Zap className="w-6 h-6"/>, title: "Poder", desc: "A manifestação do Reino. Autoridade, unção, ativação de dons e milagres." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="px-8 py-16 flex flex-col items-center group transition-colors hover:bg-white/[0.02]">
                  <div className="text-gray-400 mb-6 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-[17px] font-sora font-medium mb-3 text-white tracking-wide">{item.title}</h3>
                  <p className="text-[#888] text-[13.5px] leading-[1.7] font-light max-w-[240px] mx-auto text-center">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Phase1() {
  const pillars = [
    { 
      icon: BookOpen, 
      title: "01", 
      name: "Raízes", 
      highlight: "Oração e Palavra",
      desc: "como base da sua jornada.", 
      subDesc: "Módulos essenciais de Oração, Jejum, Palavra e Constância para construir sua fundação inabalável.", 
      color: "from-[#FF6B1A]" 
    },
    { 
      icon: Shield, 
      title: "02", 
      name: "Conduta", 
      highlight: "Caráter aprovado",
      desc: "no secreto e no público.", 
      subDesc: "Módulos de Honra, Santidade e Chamado. O alinhamento prático com o coração do Pai.", 
      color: "from-[#F5A623]" 
    },
    { 
      icon: Zap, 
      title: "03", 
      name: "Poder", 
      highlight: "Autoridade divina",
      desc: "manifesta na terra.", 
      subDesc: "Módulos de Autoridade, Unção, Dons e Ministérios. Operando nos dons do Espírito com precisão.", 
      color: "from-[#FF4500]" 
    }
  ];

  return (
    <section className="py-24 pt-32 bg-[#050505] relative border-b border-white/[0.02]" id="phase1">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
             <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium tracking-wider uppercase mb-6">
                Fase 1 — Base de Todas as Trilhas
             </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-sora font-medium mb-6 text-white tracking-tight leading-[1.1]">
               A fundação que você <span className="text-gray-400">precisa</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {pillars.map((block, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <ScrollParallax offset={(i - 1) * 30} className="h-full">
                <div className="relative overflow-hidden rounded-[32px] bg-[#0B0B0B] border border-white/[0.05] p-8 md:p-10 shadow-2xl h-full flex flex-col group transition-colors hover:border-white/[0.1]">
                  {/* Noise & Gradient background */}
                  <div className={`absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br ${block.color} via-transparent to-transparent opacity-[0.15] blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none group-hover:opacity-[0.25] transition-opacity duration-700`}></div>
                  <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-16">
                      <div className="flex items-center gap-3">
                        <div className="bg-white text-black p-1.5 rounded-lg flex items-center justify-center">
                          <block.icon className="w-4 h-4" strokeWidth={2.5} />
                        </div>
                        <span className="text-white font-medium text-[15px]">{block.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="border border-white/10 text-gray-400 text-[12px] font-medium px-3 py-1.5 rounded-full bg-white/[0.02]">Módulo Base</div>
                         <div className="border border-white/10 text-gray-400 p-1.5 rounded-full bg-white/[0.02]">
                            <MoreHorizontal className="w-[18px] h-[18px]" />
                         </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="mb-6">
                      <div className="flex items-start gap-2 mb-4">
                        <h3 className="text-6xl lg:text-[5rem] font-sora font-medium text-white tracking-tighter leading-none">
                          {block.title}
                        </h3>
                        <ArrowUpRight className="w-8 h-8 text-white/30" strokeWidth={1.5} />
                      </div>
                      
                      <p className="text-[18px] lg:text-[20px] text-white font-light leading-snug">
                        {block.highlight} <span className="text-gray-500">{block.desc}</span>
                      </p>
                    </div>

                    <div className="mb-12">
                      <p className="text-[13px] lg:text-[14px] text-gray-500 font-light leading-relaxed">
                        {block.subDesc}
                      </p>
                    </div>

                    {/* Pagination/Stepper */}
                    <div className="mt-auto flex gap-1.5">
                      {pillars.map((_, step) => (
                        <div 
                          key={step} 
                          className={`h-[3px] rounded-full flex-1 transition-colors duration-300 ${step === i ? 'bg-white' : 'bg-white/10'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollParallax>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrailsGrid() {
  const trails = [
    {
      title: "Curas e Milagres",
      desc: "Para quem foi chamado a levar a cura de Deus às pessoas. Se o seu coração queima ao ver alguém enfermo, esta é a sua base.",
      price: "299,00",
      link: "https://pay.kiwify.com.br/7rujz8h",
      icon: <Flame className="w-5 h-5 text-cyan-200" />,
      glowClass: "from-[#0044ff] via-[#00aaff] to-[#00ffcc]",
      intro: "São mais de 40 aulas onde você vai aprender como ministrar cura com autoridade, operar no sobrenatural e ver Deus transformar vidas através de você. Algumas delas são:",
      modules: [
        "Autoridade para ministrar cura",
        "Curando através da libertação",
        "Curas instantaneas e curas progressivas",
        "É vontade de Deus curar sempre?",
        "Porque pessoas perdem a cura",
        "Os 5 caminhos para cura",
        "Sensações de cura e a diferença de curas e milagres",
        "Como orar por cura com resultado",
        "Aula final crescimento de membros, oração e impartição",
        "Jesus te chamou pra curar"
      ],
      bonusLabel: "+ aulas bônus e muito mais..."
    },
    {
      title: "Ministério do Profeta",
      desc: "Para quem ouve a voz de Deus e precisa aprender a manejar esse dom com precisão e profundidade e clareza.",
      price: "299,00",
      link: "https://pay.kiwify.com.br/k2PLG6t",
      icon: <Eye className="w-5 h-5 text-purple-200" />,
      glowClass: "from-[#4400ff] via-[#8800ff] to-[#cc00ff]",
      intro: "São mais de 40 aulas onde você vai aprender como operar no ministério profético, ouvir a voz de Deus com clareza e se mover com precisão nos dons de revelação. Algumas delas são:",
      modules: [
        "O Chamado Profético",
        "Cuidados que os Profetas precisam ter",
        "Conversa de profeta",
        "Visões ou profecias que não se cumprem, por quê?",
        "Alinhamento profético",
        "Horários e significados dos portais",
        "Antes dos dons frutifique",
        "Como Deus fala aos Profetas",
        "Ataques de bruxos — como se defender",
        "Como abrir a visão Espiritual"
      ],
      bonusLabel: "+ aulas bônus e muito mais..."
    },
    {
      title: "Escola de Libertadores",
      desc: "Para quem foi chamado a blindar vidas e tirar cativos das mãos do inimigo em alta intensidade espiritual.",
      price: "299,00",
      link: "https://pay.kiwify.com.br/oOJsdEE",
      icon: <LockOpen className="w-5 h-5 text-orange-200" />,
      glowClass: "from-[#e94e1b] via-[#e94e1b] to-[#ff6b3d]",
      intro: "São mais de 40 aulas onde você vai aprender como operar em libertação, enfrentar batalhas espirituais de alto nível e tirar cativos das mãos do inimigo. Algumas delas são:",
      modules: [
        "Características do Guerreiro de Deus",
        "Seja liberto de uma vez por todas",
        "Como se proteger do mal",
        "Chaves antes de expulsar demônios",
        "Experiência com batalha espiritual",
        "Palavras são sementes que crescem em nós",
        "Traumas que aprisionam e regiões de cativeiro",
        "Sem frutos não tem ministério",
        "Ataques de bruxos — como se defender",
        "Portais espirituais dos sonhos — aprenda e ensine"
      ],
      bonusLabel: "+ aulas bônus e muito mais..."
    },
    {
      title: "Ministério Angelical",
      desc: "A dimensão celestial aberta. Compreenda a cultura angélica e como interagir na profundidade com os exércitos do Senhor.",
      price: "399,00",
      link: "https://pay.kiwify.com.br/qdD7jbG",
      icon: <Star className="w-5 h-5 text-amber-200" />,
      glowClass: "from-[#ff8800] via-[#ffaa00] to-[#ffcc00]",
      note: "Necessário passar por Cura, Libertação e Profético.",
      premium: true,
      intro: "São mais de 40 aulas onde você vai aprender como trabalhar com anjos na prática, reconhecer o ambiente espiritual e operar nesse nível com base bíblica e segurança. Algumas delas são:",
      modules: [
        "Conhecendo o Anjo do seu Ministério",
        "Pessoas comuns podem ter Interações Angelicais",
        "A responsabilidade desse chamado",
        "Construindo um Ambiente Angelical",
        "Autoridade para Ministrar com Anjos",
        "Anjos dos Profetas",
        "Anjos da Guarda e Anjos Ministeriais",
        "Anjos precisam ser Testados",
        "Ativação Angelical",
        "Anjos de Libertação"
      ],
      bonusLabel: "+ aulas bônus e muito mais..."
    }
  ];

  return (
    <section className="py-32 pt-40 bg-[#050505] relative" id="trails">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <FadeIn className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-sora font-medium mb-6 text-white tracking-tight leading-[1.1]">
            Escolha sua <span className="text-gray-400">trilha</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Cada trilha contém todos os módulos específicos e dá acesso integral à Fase 1. Seu treinamento completo para operar no reino.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          {trails.map((trail, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative overflow-hidden rounded-[32px] bg-[#0A0A0A] border border-white/[0.06] p-8 md:p-12 group transition-all duration-300 hover:border-white/[0.12] shadow-2xl h-full flex flex-col">
                {/* Noise overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                
                {/* Bottom Glow Blur Element */}
                <div className={`absolute -bottom-40 -inset-x-10 h-80 bg-gradient-to-r ${trail.glowClass} blur-[80px] opacity-[0.15] group-hover:opacity-[0.35] transition-opacity duration-700 pointer-events-none rounded-[100%]`}></div>
                
                {/* Highlight borders on bottom edge for that crisp luminous look */}
                <div className="absolute bottom-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 blur-[1px]"></div>
                <div className="absolute bottom-0 inset-x-20 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-80"></div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top: Icon, Title, Desc */}
                  <div className="mb-10">
                    <div className="w-[52px] h-[52px] rounded-full mb-8 flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#0f0f0f] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.8)]">
                      {trail.icon}
                    </div>
                    {trail.premium && (
                      <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                        Avançado
                      </div>
                    )}
                    <h3 className="text-[26px] md:text-[32px] font-sora font-medium text-white mb-4 leading-tight tracking-tight">
                      {trail.title}
                    </h3>
                    <p className="text-gray-400 text-[15.5px] font-light leading-relaxed">
                      {trail.desc}
                    </p>
                  </div>

                  {/* Middle: Modules */}
                  <div className="flex-1 mb-12">
                    {trail.note && (
                       <div className="mb-6 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-[12px] text-gray-300 font-light flex items-center gap-3">
                         <span className="text-amber-500">⚠️</span> {trail.note}
                       </div>
                    )}
                    {(trail as any).intro && (
                      <p className="text-[13.5px] text-gray-400 font-light leading-relaxed mb-6 italic">{(trail as any).intro}</p>
                    )}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {trail.modules.map((mod, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-[13.5px] font-light">
                          <CheckCircle2 className="w-[14px] h-[14px] text-white/30 mr-3 shrink-0 mt-[3px]" />
                          <span className="leading-snug">{mod}</span>
                        </li>
                      ))}
                      {(trail as any).bonusLabel && (
                        <li className="flex items-start sm:col-start-2 text-white/70 text-[13.5px] font-semibold mt-1">
                          <CheckCircle2 className="w-[14px] h-[14px] text-white/50 mr-3 shrink-0 mt-[3px]" />
                          <span className="leading-snug">{(trail as any).bonusLabel}</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Bottom: CTA */}
                  <div className="mt-auto pt-8 border-t border-white/[0.06] w-full">
                    <div className="relative group/btnwrap w-full">
                      <a href={trail.link} target="_blank" rel="noopener noreferrer" className="relative rounded-full px-6 py-4 flex items-center justify-center gap-2 text-[16px] font-medium text-white group/btn w-full">
                        {/* Gradient Border */}
                        <div 
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${trail.glowClass} pointer-events-none`}
                          style={{
                            padding: '1.5px',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude'
                          }}
                        ></div>
                        {/* Hover Glow Background */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${trail.glowClass} opacity-0 group-hover/btnwrap:opacity-[0.15] transition-opacity duration-300 pointer-events-none`}></div>
                        
                        <span className="relative z-10 tracking-wide">Garantir Minha Vaga</span>
                        <span className="relative z-10 text-xl leading-none transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoIs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="who" ref={ref}>
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <FadeIn className="flex-1 w-full order-2 md:order-1 relative group">
             <motion.div style={{ y }} className="aspect-[4/5] rounded-[32px] bg-[#0A0A0A] border border-white/[0.06] relative overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/[0.12]">
                <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                <motion.div style={{ y: glowY }} className="absolute -inset-x-20 top-0 h-80 bg-gradient-to-b from-[#FF6B1A]/10 to-transparent blur-[60px] opacity-[0.3] pointer-events-none"></motion.div>
                
                <img
                  src="/pastor-luciano.webp"
                  alt="Pastor Luciano Fae"
                  width={600}
                  height={750}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
             </motion.div>
          </FadeIn>
          <FadeIn className="flex-1 order-1 md:order-2" delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-sora font-medium mb-6 text-white tracking-tight leading-[1.1]">
              O <span className="text-gray-400">mensageiro</span>
            </h2>
            <p className="text-[16px] text-gray-400 mb-8 max-w-2xl font-light leading-relaxed">
              Luciano Fae é ministro de avivamento, cura e libertação em alto nível, com um chamado ardente para despertar a igreja e treinar os guerreiros desta geração. 
              Sua vida é dedicada a ver os céus invadirem a terra através dos filhos de Deus devidamente equipados e posicionados.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="relative overflow-hidden rounded-[24px] bg-[#0A0A0A] border border-white/[0.06] p-5 shadow-2xl flex-1 min-w-[160px]">
                 <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B1A]/10 to-transparent blur-xl pointer-events-none"></div>
                 <div className="relative z-10">
                   <div className="text-3xl font-sora font-medium text-white mb-1">56K+</div>
                   <div className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold leading-[1.4]">Seguidores</div>
                 </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] bg-[#0A0A0A] border border-white/[0.06] p-5 shadow-2xl flex-1 min-w-[160px]">
                 <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/10 to-transparent blur-xl pointer-events-none"></div>
                 <div className="relative z-10">
                   <div className="text-3xl font-sora font-medium text-white mb-1">+25</div>
                   <div className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold leading-[1.4]">Anos<br/>Ministério</div>
                 </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] bg-[#0A0A0A] border border-white/[0.06] p-5 shadow-2xl flex-1 min-w-[160px]">
                 <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B1A]/10 to-transparent blur-xl pointer-events-none"></div>
                 <div className="relative z-10">
                   <div className="text-3xl font-sora font-medium text-white mb-1">+400</div>
                   <div className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold leading-[1.4]">Alunos<br/>Mentorados</div>
                 </div>
              </div>
            </div>

          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Luana de Jesus",
      text: "Participei da mentoria com o apóstolo e foi um divisor de águas na minha vida. Aprendi princípios espirituais que fortaleceram minha fé e minha visão. Cada aula trouxe direção, clareza e crescimento pessoal. Senti o cuidado de Deus em cada palavra liberada. Hoje me sinto mais firme, alinhada e preparada para viver meu propósito. Sou grata por tudo que recebi e recomendo essa mentoria com todo meu coração."
    },
    {
      name: "Sílvia",
      text: "Sou a Sílvia Pires, e a mentoria para mim foi impactante, enriquecedora na minha vida. Quando cheguei na mentoria já tinha 15 anos de cristã. Mas foi com o conhecimento transformador da mentoria que em menos de 3 meses obtive uma evolução espiritual tremenda. Descobri formas de acessar o mundo espiritual, de quebrar maldições e alcançar libertação de verdade, as quais não são ensinadas na maioria dos lugares. E assim foi possível elevar o nível espiritual, de intimidade e comunhão com Deus. São ensinamentos valiosos que transformam nossas vidas do interior para o exterior! Gratidão por todo conhecimento que o Ap. Luciano entrega nessa mentoria!"
    },
    {
      name: "Euzamar",
      text: "Sou Euzamar da Silva, participei da mentoria com o pr Fae foi o melhor investimento que fiz, muito conhecimento e libertação e crescimento espiritual. Hoje consigo entender coisas que não entendia, através dele recebi impartições e estou muito feliz. Obrigado pr Fae por tudo, louvo a Deus pela sua vida."
    },
    {
      name: "Sandra",
      text: "Sou Sandra Silva. E entrei na mentoria e em um mês aprendi tanto o que uma vida inteira não tinha aprendido e em uma Live recebi variedades de línguas. Foi na mentoria que descobri meu chamado e meu ministério."
    },
    {
      name: "Solange Góis",
      text: "A mentoria realmente muda vidas. Em 40 anos de crente, não vivi o que estou vivendo em dois meses de mentoria. É realmente um ministério extraordinário."
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const autoAdvanceRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Calculate which dot is active based on scroll position
  const updateActiveIndex = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.getBoundingClientRect().width || 0;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollPos = el.scrollLeft;
    const index = Math.round(scrollPos / (cardWidth + gap));
    setActiveIndex(Math.min(index, testimonials.length - 1));
  };

  // Auto-advance (stops when user interacts)
  useEffect(() => {
    if (userInteracted) return;

    autoAdvanceRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const cardWidth = el.children[0]?.getBoundingClientRect().width || 0;
      const gap = 24;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const nextScroll = el.scrollLeft + cardWidth + gap;

      if (nextScroll > maxScroll + 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollTo({ left: nextScroll, behavior: 'smooth' });
      }
    }, 5000);

    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, [userInteracted]);

  // Detect user interaction
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isPointerDown = false;

    const handlePointerDown = () => { isPointerDown = true; };
    const handlePointerUp = () => { isPointerDown = false; };
    const handleScroll = () => {
      updateActiveIndex();
      if (isPointerDown) {
        setUserInteracted(true);
        if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
      }
    };
    const handleWheel = () => {
      setUserInteracted(true);
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };

    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointerup', handlePointerUp);
    el.addEventListener('scroll', handleScroll, { passive: true });
    el.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointerup', handlePointerUp);
      el.removeEventListener('scroll', handleScroll);
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Scroll to specific card when dot is clicked
  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.getBoundingClientRect().width || 0;
    const gap = 24;
    el.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
    setActiveIndex(index);
    setUserInteracted(true);
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden border-t border-white/[0.02]" id="testimonials">
      <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-sora font-medium text-white tracking-tight leading-[1.1]">
            Vidas <span className="text-[#F5A623]">transformadas</span>
          </h2>
        </FadeIn>

        {/* Scrollable carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="w-[85vw] sm:w-[75vw] md:w-[calc(33.333%-16px)] shrink-0 snap-start relative overflow-hidden rounded-[28px] bg-[#0A0A0A] border border-white/[0.06] p-8 lg:p-10 shadow-2xl flex flex-col group transition-all duration-300 hover:border-white/[0.12]"
              >
                <div className="absolute inset-0 z-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F5A623]/5 blur-[50px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="text-[#F5A623] text-[48px] font-serif leading-none mb-4 select-none" aria-hidden="true">
                    &ldquo;
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-[14px] lg:text-[15px] text-gray-300 font-light leading-relaxed flex-1 mb-8">
                    {testimonial.text}
                  </p>
                  
                  {/* Author */}
                  <div className="mt-auto pt-6 border-t border-white/[0.06]">
                    <div className="font-sora font-medium text-white text-[15px]">{testimonial.name}</div>
                    <div className="text-[12px] text-gray-500 font-light mt-1">Aluna da Mentoria</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`transition-all duration-400 rounded-full ${
                i === activeIndex
                  ? 'w-8 h-2.5 bg-[#F5A623]'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


function ForWhom() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/[0.02]" id="for-whom">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <FadeIn className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-sora font-medium mb-6 text-white tracking-tight leading-[1.1]">
            Para quem é <span className="text-gray-400">esta mentoria?</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          
          <FadeIn>
            <ScrollParallax offset={20}>
              <div className="relative overflow-hidden rounded-[32px] bg-[#0A0A0A] border border-white/[0.06] p-10 md:p-14 shadow-2xl h-full group transition-all duration-300 hover:border-white/[0.12]">
                <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-green-500/10 transition-colors duration-700"></div>

                <div className="relative z-10">
                  <div className="w-[56px] h-[56px] rounded-full mb-10 flex items-center justify-center bg-gradient-to-b from-[#1a2a1a] to-[#0f1a0f] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-green-400 transition-transform duration-500 group-hover:scale-110">
                    <CheckCircle2 className="w-6 h-6"/>
                  </div>
                  <h3 className="text-[26px] font-sora font-medium mb-8 text-white tracking-tight">Essa jornada é para você se…</h3>
                  <ul className="space-y-5">
                    {[
                      "Sente um chamado de Deus mas não sabe como começar",
                      "Quer se aprofundar nos mistérios do reino espiritual",
                      "Deseja ser treinado e ativado nos dons",
                      "Sabe que tem um propósito maior aqui na Terra"
                    ].map((text, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-[15px] font-light">
                        <CheckCircle2 className="w-[18px] h-[18px] text-green-400/80 mr-4 shrink-0 mt-[2px]" />
                        <span className="leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollParallax>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ScrollParallax offset={-30}>
              <div className="relative overflow-hidden rounded-[32px] bg-[#0A0A0A] border border-white/[0.06] p-10 md:p-14 shadow-2xl h-full group transition-all duration-300 hover:border-white/[0.12]">
                <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-red-500/10 transition-colors duration-700"></div>

                <div className="relative z-10">
                  <div className="w-[56px] h-[56px] rounded-full mb-10 flex items-center justify-center bg-gradient-to-b from-[#2a1a1a] to-[#1a0f0f] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-red-400 transition-transform duration-500 group-hover:scale-110">
                    <XOctagon className="w-6 h-6"/>
                  </div>
                  <h3 className="text-[26px] font-sora font-medium mb-8 text-white tracking-tight">Essa jornada NÃO é para você se…</h3>
                  <ul className="space-y-5">
                    {[
                      "Não quer pagar o preço da renúncia",
                      "Acha que já sabe tudo sobre o mundo espiritual",
                      "Procura atalhos e fórmulas mágicas",
                      "Não está disposto a ter seu caráter forjado"
                    ].map((text, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-[15px] font-light">
                        <XOctagon className="w-[18px] h-[18px] text-red-400/80 mr-4 shrink-0 mt-[2px]" />
                        <span className="leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollParallax>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Quando terei acesso ao treinamento?", a: "Seu acesso é liberado imediatamente após a confirmação do pagamento no seu email cadastrado." },
    { q: "Por quanto tempo tenho acesso?", a: "Você terá 1 ano de acesso a todo o conteúdo da trilha escolhida, incluindo a Fase 1." },
    { q: "É possível fazer o módulo Angelical direto?", a: "Não. Por se tratar de um nível profundo, exigimos que você passe antes pelas Trilhas de Cura, Libertação e Profético para segurança e alicerce adequados." },
    { q: "Posso acessar pelo celular?", a: "Sim, a plataforma é 100% responsiva e você também pode usar o app exclusivo para assistir offline." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/[0.02]" id="faq">
      <div className="container mx-auto px-6 max-w-[800px] relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sora font-medium mb-6 text-white tracking-tight">Perguntas <span className="text-gray-400">Frequentes</span></h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div 
                  className={`relative overflow-hidden rounded-[24px] bg-[#0A0A0A] border transition-all duration-300 shadow-2xl cursor-pointer ${isOpen ? 'border-white/[0.12]' : 'border-white/[0.06] hover:border-white/[0.12]'}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                  
                  <div className="p-7 md:p-8 relative z-10">
                    <div className="flex items-center justify-between font-sora font-medium text-[17px] text-white">
                      {faq.q}
                      <motion.span 
                        animate={{ rotate: isOpen ? -180 : 0 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                        className="bg-white/5 p-2 rounded-full ml-4 shrink-0"
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </motion.span>
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 text-gray-400 font-light leading-relaxed border-t border-white/[0.06] text-[15.5px]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EbookSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/[0.02]" id="ebook" ref={ref}>
      {/* Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>

      {/* Warm ambient glows */}
      <motion.div style={{ y: glowY }} className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A574]/8 blur-[140px] rounded-full pointer-events-none"></motion.div>
      <motion.div style={{ y: glowY }} className="absolute top-1/3 right-[10%] w-[400px] h-[400px] bg-[#F5A623]/5 blur-[120px] rounded-full pointer-events-none"></motion.div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0A0A0A] border border-white/[0.06] shadow-2xl group transition-all duration-500 hover:border-white/[0.12]">
          {/* Inner noise */}
          <div className="absolute inset-0 z-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>

          {/* Warm glow from bottom */}
          <div className="absolute -bottom-40 inset-x-0 h-80 bg-gradient-to-r from-[#D4A574] via-[#F5A623] to-[#D4A574] blur-[100px] opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-700 pointer-events-none rounded-[100%]"></div>

          {/* Highlight borders */}
          <div className="absolute bottom-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4A574]/20 to-transparent opacity-60 blur-[1px]"></div>
          <div className="absolute bottom-0 inset-x-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4A574]/40 to-transparent opacity-80"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 p-10 md:p-16 lg:p-20">

            {/* Left: Ebook Image */}
            <FadeIn className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <motion.div style={{ y: imgY }} className="relative group/img">
                {/* Soft glow behind the image */}
                <div className="absolute inset-0 bg-[#D4A574]/15 blur-[50px] rounded-3xl scale-110 pointer-events-none group-hover/img:bg-[#D4A574]/25 transition-colors duration-700"></div>

                <img
                  src="/ebook-espirito-santo.png"
                  alt="Ebook Fale nas Línguas do Espírito Santo - Luciano Faé"
                  width={380}
                  height={500}
                  loading="lazy"
                  className="relative z-10 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover/img:scale-[1.03] group-hover/img:-rotate-1"
                />
              </motion.div>
            </FadeIn>

            {/* Right: Content */}
            <FadeIn delay={0.2} className="flex-1 text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 mb-6">
                <BookOpen className="w-[14px] h-[14px] text-[#D4A574]" />
                <span className="text-[#D4A574] text-[13px] font-medium tracking-wide">E-book Exclusivo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-sora font-medium mb-6 text-white tracking-tight leading-[1.15]">
                Fale nas Línguas do{' '}
                <span className="text-[#D4A574]">Espírito Santo</span>
              </h2>

              <p className="text-[16px] text-gray-400 mb-8 font-light leading-relaxed max-w-[540px] mx-auto md:mx-0">
                Um guia profundo e prático para você entender, buscar e operar no dom de línguas. 
                Descubra o que a Bíblia realmente ensina sobre falar em línguas e como isso pode 
                transformar sua vida de oração e intimidade com Deus.
              </p>

              {/* Key points */}
              <ul className="space-y-4 mb-10 text-left">
                {[
                  "O fundamento bíblico do dom de línguas",
                  "Como buscar e receber essa manifestação",
                  "A diferença entre línguas devocional e profética",
                  "Exercícios práticos de ativação espiritual"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-[15px] font-light">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#D4A574]/80 mr-4 shrink-0 mt-[2px]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Author */}
              <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <img src="/pastor-luciano.webp" alt="Luciano Faé" width={40} height={40} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white text-[14px] font-medium">Luciano Faé</div>
                  <div className="text-gray-500 text-[12px] font-light">Autor</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative group/btnwrap w-full md:w-auto inline-block">
                <a
                  href="https://pay.kiwify.com.br/hj9p35O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-full px-8 py-4 flex items-center justify-center gap-3 text-[16px] font-medium text-white group/btn w-full md:w-auto"
                >
                  {/* Gradient Border */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4A574] via-[#F5A623] to-[#D4A574] pointer-events-none"
                    style={{
                      padding: '1.5px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                  ></div>
                  {/* Hover Glow Background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4A574] via-[#F5A623] to-[#D4A574] opacity-0 group-hover/btnwrap:opacity-[0.15] transition-opacity duration-300 pointer-events-none"></div>

                  <BookOpen className="relative z-10 w-5 h-5" />
                  <span className="relative z-10 tracking-wide">Quero Meu E-book</span>
                  <span className="relative z-10 text-xl leading-none transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="py-40 relative overflow-hidden bg-[#050505]" ref={ref}>
      <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
      <motion.div style={{ y: glowY, x: '-50%' }} className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full blur-[120px] bg-gradient-radial from-[#FF6B1A]/20 via-[#F5A623]/5 to-transparent pointer-events-none"></motion.div>
      
      <motion.div style={{ y: contentY }} className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <FadeIn>
          <div className="w-[80px] h-[80px] rounded-full mb-10 flex items-center justify-center bg-gradient-to-b from-[#2a1a1a] to-[#0f0f0f] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-white mx-auto">
            <Flame className="w-8 h-8"/>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-[5.5rem] font-sora font-medium mb-8 text-white tracking-tight leading-[1.05]">
            O chamado já veio.<br/>
            O treinamento <span className="text-gray-400">começa agora.</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-gray-400 font-light mb-14 max-w-2xl mx-auto leading-relaxed">
            Não atrase mais o propósito de Deus para a sua vida. Escolha sua trilha e conecte-se com seu destino prático.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5511947343653&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold text-[14px] sm:text-[15px] px-6 sm:px-10 py-4 check-btn rounded-full hover:bg-gray-200 transition-colors shadow-xl w-full sm:w-auto"
          >
            Escolha sua trilha e entre agora
          </a>
        </FadeIn>
      </motion.div>
    </section>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-8">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {/* O ícone do fogo fica para fora da margem. A margem é a mesma em todas as telas pois o tamanho do logo (h-10) é fixo. */}
          <img src="/logo.webp" alt="Luciano Fae Logo" width={200} height={40} className="h-10 w-auto object-contain -translate-y-1 -ml-3" />
        </div>

        {/* Nav Pill */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full border border-white/5 bg-white/[0.04] backdrop-blur-md">
          <button onClick={() => window.scrollTo(0, 0)} className="px-5 py-2 rounded-full bg-white/10 text-[13px] font-medium text-white transition-colors">Início</button>
          <button onClick={() => document.getElementById('trails')?.scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 rounded-full text-[13px] font-medium text-gray-400 hover:text-white flex items-center gap-1 transition-colors group">
            Trilhas
            <ChevronDown className="w-3.5 h-3.5 group-hover:text-white transition-colors opacity-70" />
          </button>
          <button onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 rounded-full text-[13px] font-medium text-gray-400 hover:text-white transition-colors">Jornada</button>
          <button onClick={() => document.getElementById('who')?.scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 rounded-full text-[13px] font-medium text-gray-400 hover:text-white transition-colors">Sobre nós</button>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:block text-[13px] font-medium px-4 py-2 hover:bg-white/5 rounded-full text-gray-300 hover:text-white transition-colors">Entrar</a>
          <button 
            onClick={() => document.getElementById('trails')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black font-semibold text-[13px] px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] pt-24 pb-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mb-20">
          <div className="lg:w-1/4">
            <img src="/logo.webp" alt="Luciano Fae Logo" width={200} height={40} loading="lazy" className="h-8 md:h-10 w-auto object-contain mb-4 -ml-3" />
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16 lg:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-white text-[12px] font-bold tracking-widest uppercase mb-2">Plataforma</span>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Início</a>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Sobre Nós</a>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">A Jornada</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white text-[12px] font-bold tracking-widest uppercase mb-2">Conteúdo</span>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Trilhas</a>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Módulo Base</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white text-[12px] font-bold tracking-widest uppercase mb-2">Ajuda</span>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Suporte</a>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Contato</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white text-[12px] font-bold tracking-widest uppercase mb-2">Legal</span>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Termos</a>
            </div>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-white/[0.08] mb-10"></div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 mb-6">
            <a href="https://www.facebook.com/oficinadocorpo.luciano" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
              <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/lucianofaeoficial/" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
             <a href="https://www.youtube.com/@pastorlucianofaeoficial" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.tiktok.com/@pastorlucianofae" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
              {/* TikTok */}
              <svg className="w-[14px] h-[14px] fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
          </div>
          <p className="text-[13px] text-gray-500 font-light">©Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsappSupportSection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/[0.02]" id="support">
      <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
      
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#4361ee]/5 blur-[140px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FF6B1A]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0A0A0A] border border-white/[0.06] p-10 md:p-16 lg:p-20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 group transition-all duration-500 hover:border-white/[0.12]">
          
          <div className="absolute inset-0 z-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
          {/* Subtle highlight border */}
          <div className="absolute bottom-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60 blur-[1px]"></div>

          <div className="flex-1 relative z-10 text-center md:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
                 <Users className="w-[14px] h-[14px] text-[#e94e1b]" />
                 <span className="text-gray-300 text-[13px] font-medium tracking-wide">Comunidade Exclusiva</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-sora font-medium mb-6 text-white tracking-tight leading-[1.15]">
                Você não vai <span className="text-gray-400">caminhar sozinho</span>
              </h2>
              <p className="text-[16px] text-gray-400 mb-0 font-light leading-relaxed max-w-[540px] mx-auto md:mx-0">
                O acompanhamento é fortalecido por um grupo exclusivo, onde os participantes recebem suporte direto, direcionamento e orientação, criando um ambiente seguro de crescimento espiritual e comunhão. Aqui você tira suas dúvidas, compartilha experiências e cresce junto com outros guerreiros que estão na mesma jornada. Isso não é só um curso online, é uma mentoria real, com pessoas reais, caminhando juntas e manifestando o reino de Deus na terra.
              </p>
            </FadeIn>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end shrink-0">
            <FadeIn delay={0.2} className="w-full md:w-auto">
              {/* Community visual card */}
              <div className="relative w-full md:w-[260px] rounded-[24px] bg-white/[0.03] border border-white/[0.08] p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#e94e1b]" />
                </div>
                {/* Stacked avatars placeholder */}
                <div className="flex -space-x-3">
                  {['#e94e1b', '#4361ee', '#F5A623', '#22c55e', '#a855f7'].map((color, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: color + '33', borderColor: '#0A0A0A', outline: `2px solid ${color}44` }}>
                      <span style={{ color }}>{String.fromCharCode(65 + i)}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-[13px] text-gray-400 font-light leading-relaxed">
                  <span className="text-white font-medium">+400 guerreiros</span><br />já estão nessa jornada
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[11px] text-green-400 font-medium tracking-wide">Grupo ativo agora</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

function ChatbotCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isVisible) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAnimated(true);
        setTimeout(() => setIsOpen(false), 5000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="mb-4 w-[280px] bg-[#0A0A0A] border border-white/10 rounded-2xl rounded-br-sm shadow-2xl p-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: "url('/noise.svg')"}}></div>
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FF6B1A]/10 blur-[30px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10 flex items-center justify-center">
                          <Headset className="w-4 h-4 text-green-400" />
                       </div>
                       <div>
                         <div className="text-[12px] font-semibold text-white">Equipe de Suporte</div>
                         <div className="text-[10px] text-green-400 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                           Online
                         </div>
                       </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                  </div>
                  <p className="text-gray-300 text-[13px] leading-relaxed font-light mt-3">
                    Olá! Precisando de ajuda para escolher a sua trilha de treinamento?
                  </p>
                  <a href="https://api.whatsapp.com/send/?phone=5511947343653&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="mt-4 block w-full bg-white text-black hover:bg-gray-200 font-sora font-medium py-2.5 px-4 rounded-xl text-center transition-colors text-[13px] shadow-md flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Iniciar Conversa
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => {
              if (!isOpen) setIsOpen(true);
              else window.open("https://api.whatsapp.com/send/?phone=5511947343653&text&type=phone_number&app_absent=0", "_blank"); 
            }}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 relative group"
          >
            <div className="absolute inset-0 rounded-full border border-white opacity-0 group-hover:animate-ping transition-all"></div>
            <Headset className="w-6 h-6 md:w-7 md:h-7" />
            
            {!isOpen && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-[#050505] rounded-full"></span>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-fire/30">
      <Header />
      <Hero />
      <PainSection />
      <TheJourney />
      <EbookSection />
      <Phase1 />
      <TrailsGrid />
      <WhoIs />
      <Testimonials />
      <ForWhom />
      <FinalCTA />
      <WhatsappSupportSection />
      <FAQ />

      <Footer />
      <ChatbotCTA />
    </div>
  );
}

