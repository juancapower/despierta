import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';

const WHATSAPP_LINK = "https://chat.whatsapp.com/CU66rNoc1hEB8hOFiy21Pe";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

// ==========================================
// ARRAY DE EVENTOS - EDITA SOLO ESTA PARTE
// ==========================================
const eventos = [
  {
    nombre: "Despierta el Power — Primera Edición",
    dia: "28",
    mes: "MAR",
    anio: "2026",
    fechaISO: "2026-03-28",
    horario: "04:00 PM — 08:00 PM",
    rol: "Organizador y Facilitador",
    lugar: "Trujillo, Perú",
    tipo: "Taller propio",
    linkRegistro: "https://chat.whatsapp.com/CU66rNoc1hEB8hOFiy21Pe"
  },
  {
    nombre: "Trascendiendo el Duelo",
    dia: "03",
    mes: "MAY",
    anio: "2026",
    fechaISO: "2026-05-03",
    horario: "08:30 AM — 04:00 PM",
    rol: "Speaker invitado",
    lugar: "Casona Rebaza, Centro Histórico de Trujillo",
    tipo: "Speaker",
    linkRegistro: "https://trascendiendoelduelo.github.io/trascendiendoelduelo",
    linkWhatsapp: "https://wa.me/51963335717?text=Hola%20JuanCa!%20Quiero%20información%20sobre%20Trascendiendo%20el%20Duelo"
  }
];
// ==========================================

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

export default function ProximosEventos() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Obtenemos la fecha actual en formato YYYY-MM-DD
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setCurrentDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Si currentDate está vacío (primer render), asumimos que hay eventos futuros para evitar parpadeos
  const hasFutureEvents = currentDate === '' ? true : eventos.some(evento => evento.fechaISO >= currentDate);

  const sortedEventos = [...eventos].sort((a, b) => {
    if (currentDate === '') return 0;
    const aPast = a.fechaISO < currentDate;
    const bPast = b.fechaISO < currentDate;
    
    if (aPast && !bPast) return 1; // b (future) comes first
    if (!aPast && bPast) return -1; // a (future) comes first
    
    if (!aPast && !bPast) {
      // Both future: closest first (ascending)
      return a.fechaISO.localeCompare(b.fechaISO);
    } else {
      // Both past: most recent past first (descending)
      return b.fechaISO.localeCompare(a.fechaISO);
    }
  });

  return (
    <section id="proximos-eventos" className="py-32 relative bg-obsidian border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">PRÓXIMOS EVENTOS</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-white/60 text-lg">Encuéntrame en vivo — Talleres, charlas y eventos</p>
        </FadeIn>

        <div className="space-y-6">
          {sortedEventos.map((evento, index) => {
            // Si currentDate no se ha cargado, asumimos falso para no mostrar "REALIZADO" por error
            const isPast = currentDate !== '' && evento.fechaISO < currentDate;
            
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className={`group relative flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(197,160,89,0.1)] transition-all duration-300 border-l-4 border-l-transparent hover:border-l-gold ${isPast ? 'opacity-60 grayscale hover:grayscale-0' : ''}`}>
                  
                  {/* Lado izquierdo: Fecha */}
                  <div className="bg-orange md:w-40 flex flex-col items-center justify-center py-6 md:py-0 shrink-0">
                    <span className="text-4xl md:text-5xl font-black text-white leading-none">{evento.dia}</span>
                    <span className="text-lg md:text-xl font-bold text-white/90 tracking-widest uppercase mt-1">{evento.mes}</span>
                    <span className="text-sm text-white/70 mt-1">{evento.anio}</span>
                  </div>

                  {/* Centro: Contenido */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gold mb-1">{evento.nombre}</h3>
                        <p className="text-white/80 font-medium">{evento.rol}</p>
                      </div>
                      
                      {/* Lado derecho: Badges */}
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-2 flex-wrap">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wider uppercase border border-white/10">
                          {evento.tipo}
                        </span>
                        {currentDate !== '' && (
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${isPast ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30' : 'bg-green-500/20 text-green-400 border border-green-500/30'}`}>
                            {isPast ? 'REALIZADO' : 'PRÓXIMAMENTE'}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Clock className="w-4 h-4 text-gold" />
                        <span>{evento.horario}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span>{evento.lugar}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2">
                      <a 
                        href={evento.linkRegistro}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold tracking-wider uppercase transition-all duration-300 ${isPast ? 'bg-white/5 text-white/40 cursor-not-allowed border border-white/10' : 'bg-orange text-white hover:bg-[#cc4800] shadow-lg shadow-orange/20'}`}
                        onClick={(e) => isPast && e.preventDefault()}
                      >
                        {isPast ? 'Evento Finalizado' : 'REGISTRARME'}
                        {!isPast && <ArrowRight className="w-4 h-4" />}
                      </a>

                      {!isPast && evento.linkWhatsapp && (
                        <a 
                          href={evento.linkWhatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold tracking-wider uppercase transition-all duration-300 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          Conversemos
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}

          {currentDate !== '' && !hasFutureEvents && (
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto mt-12">
                <Calendar className="w-12 h-12 text-gold mx-auto mb-6 opacity-50" />
                <h3 className="text-2xl font-bold text-white mb-4">Nuevas fechas muy pronto</h3>
                <p className="text-white/60 mb-8 text-lg">
                  Únete al Salón Power para ser el primero en enterarte de nuestros próximos eventos y talleres.
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-8 py-4 rounded-full font-bold tracking-wider uppercase hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  UNIRME AL GRUPO
                </a>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
