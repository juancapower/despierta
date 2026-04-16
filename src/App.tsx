/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Heart, 
  Sparkles, 
  Activity, 
  Calendar, 
  MapPin, 
  Clock,
  Instagram, 
  Twitter,
  Youtube,
  Facebook,
  Check,
  Download,
  Play,
  X,
  MessageCircle
} from 'lucide-react';
import DiagnosticoPiloto from './components/DiagnosticoPiloto';
import ProximosEventos from './components/ProximosEventos';

const WHATSAPP_LINK = "https://chat.whatsapp.com/CU66rNoc1hEB8hOFiy21Pe";

const galleryImages = [
  "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512311/DtP_Inicio_gelwvj.png",
  "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512311/TallerPNL_pizarra_onq7x1.png",
  "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512311/TallerPNL_grito_gyud5d.png",
  "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512312/TallerPNL_romperhojas_reoath.png",
  "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512312/TallerPNL_abrazos_qcbg7z.png"
];

const testimonials = [
  {
    name: "Karen G.",
    text: "Me pareció impresionante, me gustó mucho. De manera resumida abordó las cosas muy elementales que deberíamos conocer para activar nuestro poder. Me gustó mucho.",
    image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512311/DtP_TestimonioKarenG_cyiseb.png"
  },
  {
    name: "Fiorella S.",
    text: "Tenemos una nueva forma de ver las cosas, de cómo la superación de nosotros mismos puede ayudarnos bastante para poder avanzar en nuestro día a día y poder ayudarnos a nosotros mismos.",
    image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512312/DtP_TestimonioFiorellaS_wvfo9b.png"
  },
  {
    name: "Alvaro V.",
    text: "Genial, descubridor, muy poderoso como JuanCa Power y de demasiado valor para mi vida, mi gente, para mi corazón, para mi familia.",
    image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512312/DtP_Testimonio_AlvaroV_fz0ykt.png"
  },
  {
    name: "Gabriella V.",
    text: "Muy interesante, entretenido, con nuevas creencias, me ayudó bastante, muchísimo, muchísimo. Tenía una situación muy difícil, así que estoy viendo ya la forma de cómo solucionarla.",
    image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512313/DtP_TestimonioLadyV_ptjeho.png"
  },
  {
    name: "Ybeth A.",
    text: "Me pareció muy interesante de verdad. Me ha hecho recordar que a veces como personas olvidamos lo fuerte que somos y el cambio está en nosotros mismos así que me voy con otra mentalidad.",
    image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775512313/DtP_Testimonio_YbethA_evfhin.png"
  }
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian selection:bg-gold/30 selection:text-gold relative overflow-hidden">
      {/* Humo Dorado Global */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(230,81,0,0.1),transparent_50%)]" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-obsidian/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="https://juancapower.com" target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-bold tracking-widest text-white hover:text-gold transition-colors">
            POWER<span className="text-gold">.</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://juancapower.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-gold transition-colors"
            >
              Inicio
            </a>
            <a 
              href="https://digital.juancapower.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-gold transition-colors"
            >
              Agencia Digital
            </a>
            <a 
              href="#proximos-eventos"
              className="text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-gold transition-colors"
            >
              Próximos Eventos
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase border border-gold/50 text-gold px-6 py-2.5 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-300 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" /> Unirme al Salón Power
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(197,160,89,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(230,81,0,0.05),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-orange" />
              <span className="text-sm font-medium tracking-widest uppercase text-white/80">Gira Nacional</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <img 
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1773382331/logo_ofofvn.png" 
              alt="Despierta tu Power" 
              className="w-full max-w-2xl mx-auto mb-8 object-contain drop-shadow-[0_0_40px_rgba(197,160,89,0.4)]"
            />
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-white">
              La primera edición fue <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">solo el comienzo.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light mb-12">
              Únete al <span className="text-white font-bold">Salón Power</span> y accede a nuestros próximos eventos de desarrollo personal y material exclusivo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap max-w-4xl mx-auto">
              <a 
                href="#proximos-eventos"
                className="group relative inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                Próximos Eventos
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange to-[#cc4800] text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(230,81,0,0.4)] hover:shadow-[0_0_60px_rgba(230,81,0,0.6)] cursor-pointer w-full sm:w-auto border border-orange/50"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative">Unirme al Salón Power</span>
                <WhatsAppIcon className="relative w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors font-semibold tracking-wider uppercase text-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                  <Play className="w-4 h-4 text-gold" fill="currentColor" />
                </div>
                Ver resumen de la 1ra Edición
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gradient-to-b from-obsidian to-[#121524] py-16 border-y border-gold/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gold/20">
            <FadeIn delay={0.1} className="flex flex-col items-center p-4">
              <Check className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Primera edición completada ✅</h3>
              <p className="text-white/60">Un éxito rotundo en nuestra primera edición</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col items-center p-4">
              <Sparkles className="w-10 h-10 text-orange mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">20 personas transformadas</h3>
              <p className="text-white/60">En una sola tarde de inmersión</p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col items-center p-4">
              <Activity className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Próxima edición en camino 🔥</h3>
              <p className="text-white/60">Prepárate para lo que viene</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <ProximosEventos />

      {/* Gallery Section */}
      <section className="py-24 bg-[#121524] relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">LA EXPERIENCIA <span className="text-gold">EN VIVO</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Así se vivió la primera edición. Ver para creer.</p>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <FadeIn key={index} delay={index * 0.1} className={`relative rounded-2xl overflow-hidden group ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <div className="aspect-square w-full h-full">
                  <img 
                    src={src} 
                    alt={`Evento Despierta el Power ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-obsidian relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(230,81,0,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">CASOS DE <span className="text-orange">ÉXITO</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Lo que dicen quienes ya despertaron su power.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col hover:border-gold/30 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-gold/50"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <div className="flex text-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 italic flex-grow">"{testimonial.text}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Next Event Banner */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-orange/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn className="max-w-4xl mx-auto bg-obsidian/80 backdrop-blur-md border border-orange/30 p-10 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(230,81,0,0.15)]">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4 tracking-tight text-white">PRÓXIMA EDICIÓN <br/><span className="text-orange">MUY PRONTO</span></h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-medium">
              Perú 2026 <span className="text-gold">·</span> Cupos limitados <span className="text-gold">·</span> Precio exclusivo para miembros del Salón Power
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-orange rounded-full hover:bg-[#cc4800] transition-colors text-lg shadow-lg shadow-orange/20"
            >
              ÚNETE AL GRUPO AHORA
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Diagnóstico Piloto Automático */}
      <section className="py-24 relative z-10 bg-obsidian border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">¿Vives o solo existes?</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Descubre tu nivel de "Vida en Simulación" con este diagnóstico rápido de 4 preguntas.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <DiagnosticoPiloto />
          </FadeIn>
        </div>
      </section>

      {/* El Origen */}
      <section className="py-32 relative border-t border-white/5 bg-obsidian">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">El Origen</h2>
            <div className="w-12 h-1 bg-orange mx-auto mb-12 rounded-full" />
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light mb-8 font-serif-italic">
              "Vivimos en piloto automático, ejecutando programas mentales obsoletos que limitan nuestro verdadero potencial."
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Tras años optimizando sistemas complejos en el mundo de la <span className="text-gold font-medium">Tecnología de la Información</span>, descubrí que el sistema más poderoso y menos comprendido es la <span className="text-gold font-medium">Mente Humana</span>. Despierta tu Power nace de la necesidad de aplicar ingeniería a nuestras emociones, utilizando PNL para reescribir nuestro código fuente.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* El Sistema POWER 4 */}
      <section className="py-32 relative bg-[#0f111a]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">El Sistema POWER 4</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Un enfoque integral para alinear las cuatro dimensiones fundamentales de tu ser.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Espíritu", desc: "Conecta con tu propósito más profundo y tu visión de vida." },
              { icon: Brain, title: "Mente", desc: "Reprograma creencias limitantes con técnicas de PNL." },
              { icon: Activity, title: "Cuerpo", desc: "Optimiza tu energía física y tu postura para el éxito." },
              { icon: Heart, title: "Emociones", desc: "Aprende a gestionar y utilizar tus emociones a tu favor." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group h-full p-8 rounded-2xl border border-gold/20 bg-obsidian/50 hover:bg-gold/5 hover:border-gold/50 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 bg-obsidian">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tu Guía */}
      <section className="py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-gold/20 bg-gradient-to-b from-obsidian via-obsidian to-orange/10 flex items-end justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,81,0,0.15),transparent_60%)] group-hover:opacity-70 transition-opacity duration-500" />
                <img 
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514609/JuanCa_Power_ygvsaf.png" 
                  alt="JuanCa Power - Coach" 
                  className="w-full h-[95%] object-contain object-bottom relative z-10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-20" />
                <div className="absolute bottom-8 left-8 z-30">
                  <h3 className="text-4xl font-display font-bold text-white mb-2">JuanCa Power</h3>
                  <p className="text-gold tracking-widest uppercase text-sm font-semibold">Coach Estratégico de Mentalidad</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">De los Sistemas a las Personas</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Con una sólida trayectoria en el mundo corporativo y tecnológico, liderando equipos y proyectos en gigantes como <strong className="text-white font-medium">Banco Pichincha, Telefónica, Interbank y Kyndryl</strong>.
                </p>
                <p>
                  Esta experiencia me enseñó que el cuello de botella más grande en cualquier organización o proyecto personal no es la tecnología, sino la <strong className="text-white font-medium">gestión emocional y mental</strong> de las personas.
                </p>
                <p>
                  Hoy, aplico el rigor de la ingeniería a la transformación personal, utilizando Programación Neurolingüística (PNL) para ayudarte a hackear tu mente y liberar tu verdadero potencial.
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white mb-1">+200</div>
                  <div className="text-xs tracking-widest uppercase text-white/50">Vidas Despertadas</div>
                  <p className="text-xs text-white/40 mt-2">Impacto real en conferencias y talleres.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white mb-1">+500</div>
                  <div className="text-xs tracking-widest uppercase text-white/50">Horas de Inmersión</div>
                  <p className="text-xs text-white/40 mt-2">Entrenamiento de élite internacional.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white mb-1">5</div>
                  <div className="text-xs tracking-widest uppercase text-white/50">Ciudades Impactadas</div>
                  <p className="text-xs text-white/40 mt-2">Lima, Piura, Talara, Sullana y Trujillo.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Proximos Eventos moved up already */}

      {/* Footer / CTA Final */}
      <section className="py-32 relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(197,160,89,0.1),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">¿Listo para reescribir tu historia?</h2>
            <p className="text-xl text-white/60 font-light mb-12">
              Únete al Salón Power y accede a nuestros próximos eventos de desarrollo personal y material exclusivo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-orange text-white px-10 py-5 rounded-full font-bold tracking-wider uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(230,81,0,0.3)] hover:shadow-[0_0_60px_rgba(230,81,0,0.5)] cursor-pointer"
              >
                QUIERO ESTAR EN LA PRÓXIMA EDICIÓN
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-2xl font-bold tracking-widest text-white">
              POWER<span className="text-gold">.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/soyjuancapower/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@soyjuancapower" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/soyjuancapower" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/soyjuancapower" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-sm text-white/40">
              © {new Date().getFullYear()} Despierta tu Power. Perú.
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#E65100] text-white px-4 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(230,81,0,0.4)] hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="hidden sm:inline">Conversemos</span>
      </a>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/vfaUoNsRtGg?autoplay=1&loop=1&playlist=vfaUoNsRtGg"
                title="Resumen 1ra Edición"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
