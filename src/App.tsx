/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
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
  Download
} from 'lucide-react';
import DiagnosticoPiloto from './components/DiagnosticoPiloto';

const WHATSAPP_LINK = "https://chat.whatsapp.com/CU66rNoc1hEB8hOFiy21Pe";

const MercadoPagoButton = () => {
  return (
    <div className="w-full flex justify-center mt-2">
      <a 
        href="https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=3259082514-5776d082-2dd5-40f3-8662-daaea4dcd38d"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#009EE3] hover:bg-[#0080B7] text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M14.5 9.5c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3c1.1 0 2 .9 2 2s-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-1H7v1c0 2.2 1.8 4 4 4h3c2.2 0 4-1.8 4-4s-1.8-4-4-4h-3c-1.1 0-2-.9-2-2s.9-2 2-2h3c1.1 0 2 .9 2 2v1h2v-1z"/>
        </svg>
        Pagar con Mercado Pago
      </a>
    </div>
  );
};

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

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
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
  return (
    <div className="min-h-screen bg-obsidian selection:bg-gold/30 selection:text-gold relative overflow-hidden">
      {/* Humo Dorado Global */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(230,81,0,0.1),transparent_50%)]" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-obsidian/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display text-2xl font-bold tracking-widest text-white">
            POWER<span className="text-gold">.</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" /> Grupo VIP
            </a>
            <a 
              href="#registro"
              className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase border border-gold/50 text-gold px-6 py-2.5 rounded-full hover:bg-gold hover:text-obsidian transition-all duration-300 cursor-pointer"
            >
              Reservar <ArrowRight className="w-4 h-4" />
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
              <span className="text-sm font-medium tracking-widest uppercase text-white/80">Trujillo, Perú</span>
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
            <p className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto font-light mb-10 font-serif-italic">
              "Una experiencia exclusiva de Ingeniería Emocional y PNL para reprogramar tu mente y alcanzar tu máximo potencial."
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/80 text-sm md:text-base font-medium mb-12 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold font-display tracking-wide">Sábado 28 de Marzo</p>
                  <p className="text-white/60 text-sm flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" /> 03:30 pm - 06:30 pm</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold font-display tracking-wide">C.C. Los Conquistadores</p>
                  <p className="text-white/60 text-sm mt-0.5">Trujillo, Perú</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#registro"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-[#E8C881] text-obsidian px-10 py-5 rounded-full font-bold tracking-wider uppercase overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(197,160,89,0.3)] hover:shadow-[0_0_60px_rgba(197,160,89,0.5)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative">Asegurar Mi Entrada VIP</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-10 py-5 rounded-full font-bold tracking-wider uppercase overflow-hidden transition-all hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon className="relative w-5 h-5" />
                <span className="relative">Unirme al Grupo VIP</span>
              </a>
            </div>

            <div className="mt-10">
              <a 
                href="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1773382337/brochure-despierta_tl9re2.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm font-medium tracking-widest uppercase transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar Brochure
              </a>
            </div>
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
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1773382332/juan-carlos_pfqahf.png" 
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
              
              <div className="mt-10 pt-10 border-t border-white/10 flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-gold mb-1">+10</div>
                  <div className="text-xs tracking-widest uppercase text-white/50">Años de Exp.</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-gold mb-1">3</div>
                  <div className="text-xs tracking-widest uppercase text-white/50">Multinacionales</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-gold mb-1">+100</div>
                  <div className="text-xs tracking-widest uppercase text-white/50">Personas Impactadas</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bloques del Evento */}
      <section className="py-32 relative bg-obsidian/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Bloques del Evento</h2>
            <p className="text-white/60">El camino estructurado hacia tu transformación.</p>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4">Registro</h3>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1"><Check className="w-6 h-6 text-gold" /></div>
                <div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Bloque I - La arquitectura de la realidad.</h4>
                  <p className="text-white/70 text-lg">Entendiendo cómo tus pensamientos están diseñando tus resultados actuales.</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1"><Check className="w-6 h-6 text-gold" /></div>
                <div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Bloque II - Workshop: La ingeniería del Éxito</h4>
                  <p className="text-white/70 text-lg">Ejercicio práctico de PNL para definir tus objetivos, valores y nuevos hábitos.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 mt-12 border-b border-white/10 pb-4">Coffee Break y Networking</h3>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1"><Check className="w-6 h-6 text-gold" /></div>
                <div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Bloque III: Sistema Power 4</h4>
                  <p className="text-white/70 text-lg">Alineación de tus 4 pilares: Espíritu, Mente, Cuerpo y Emociones.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1"><Check className="w-6 h-6 text-gold" /></div>
                <div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 uppercase">Anclaje de Identidad</h4>
                  <p className="text-white/70 text-lg">Meditación profunda y cierre de poder para integrar tu nueva mentalidad.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sección de Registro */}
      <section id="registro" className="py-32 relative bg-[#0f111a]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Asegura tu Lugar</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Estás a un paso de transformar tu mente. Completa tu registro para el entrenamiento presencial.</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Columna de Pago */}
            <FadeIn delay={0.1}>
              <div className="bg-obsidian border border-gold/20 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                
                <div className="relative z-10">
                  <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-gold/20">
                    Inversión Única
                  </div>
                  <div className="text-5xl font-display font-bold text-white mb-10">
                    S/ 49<span className="text-xl text-white/50 font-normal">.00</span>
                  </div>

                  <div className="space-y-10">
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-gold text-obsidian flex items-center justify-center font-bold text-sm">1</div>
                      <h4 className="text-xl font-display font-bold text-white mb-4">Realiza tu pago</h4>
                      
                      {/* Yape / Plin */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-5 hover:border-gold/30 transition-colors">
                        <p className="text-white/80 font-medium mb-2 flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#742384]"></span> Yape / <span className="w-3 h-3 rounded-full bg-[#00E4A1]"></span> Plin
                        </p>
                        <p className="text-3xl font-display font-bold text-white tracking-wider mb-1">963 335 717</p>
                        <p className="text-white/50 text-sm">A nombre de: Juan C*</p>
                      </div>

                      <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-white/10"></div>
                        <div className="text-white/40 text-xs font-bold tracking-widest uppercase">O paga con tarjeta</div>
                        <div className="flex-1 h-px bg-white/10"></div>
                      </div>

                      {/* Mercado Pago */}
                      <MercadoPagoButton />
                    </div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-gold text-obsidian flex items-center justify-center font-bold text-sm">2</div>
                      <h4 className="text-xl font-display font-bold text-white mb-2">Completa tu registro</h4>
                      <p className="text-white/60 text-sm">
                        Llena el formulario de la derecha con tus datos para confirmar tu asistencia al evento.
                      </p>
                    </div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-gold text-obsidian flex items-center justify-center font-bold text-sm">3</div>
                      <h4 className="text-xl font-display font-bold text-white mb-3">Envía tu comprobante</h4>
                      <p className="text-white/60 text-sm mb-5">
                        Envíanos la captura de tu pago por WhatsApp para validar tu entrada y darte acceso al grupo VIP.
                      </p>
                      <a 
                        href="https://wa.me/51963335717?text=Hola%20JuanCa!%20Acabo%20de%20completar%20mi%20registro%20para%20Despierta%20tu%20Power.%20Aquí%20te%20envío%20mi%20comprobante.%20🚀"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-full hover:bg-[#25D366] hover:text-white font-bold transition-all duration-300"
                      >
                        <WhatsAppIcon className="w-5 h-5" /> Enviar comprobante
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Columna de Tally */}
            <FadeIn delay={0.3} className="h-full">
              <div className="bg-obsidian/50 border border-white/10 rounded-3xl p-2 md:p-4 h-full min-h-[700px] shadow-2xl">
                <iframe 
                  src="https://tally.so/embed/NpVO8B?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Registro Despierta tu Power"
                  className="min-h-[700px] rounded-2xl"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <section className="py-32 relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(197,160,89,0.1),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">¿Listo para reescribir tu historia?</h2>
            <p className="text-xl text-white/60 font-light mb-12">
              Los cupos son limitados para asegurar una experiencia profunda y personalizada.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#registro"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-[#E8C881] text-obsidian px-10 py-5 rounded-full font-bold tracking-wider uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(197,160,89,0.3)] hover:shadow-[0_0_60px_rgba(197,160,89,0.5)] cursor-pointer"
              >
                Reservar Mi Lugar Ahora
              </a>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-10 py-5 rounded-full font-bold tracking-wider uppercase hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Unirme al Grupo VIP
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
              © {new Date().getFullYear()} Despierta tu Power. Trujillo, Perú.
            </div>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
}
