import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, AlertTriangle, RefreshCw } from 'lucide-react';

const questions = [
  {
    question: "¿Sientes que tus lunes son un castigo?",
    options: [
      { text: "Sí, siempre", weight: 25 },
      { text: "A veces", weight: 10 },
      { text: "No, me entusiasman", weight: 0 }
    ]
  },
  {
    question: "¿Pasas más tiempo viendo la vida de otros en redes que construyendo la tuya?",
    options: [
      { text: "Definitivamente", weight: 25 },
      { text: "Solo un poco", weight: 10 },
      { text: "No, estoy enfocado", weight: 0 }
    ]
  },
  {
    question: "¿Sientes que los días pasan rápido pero tú sigues en el mismo lugar?",
    options: [
      { text: "Es mi realidad diaria", weight: 25 },
      { text: "Por temporadas", weight: 10 },
      { text: "Siento que avanzo", weight: 0 }
    ]
  },
  {
    question: "¿Tus decisiones están basadas en el miedo al 'qué dirán' en lugar de lo que realmente quieres?",
    options: [
      { text: "Sí, me paraliza", weight: 25 },
      { text: "A veces dudo", weight: 10 },
      { text: "No, decido por mí", weight: 0 }
    ]
  }
];

export default function DiagnosticoPiloto() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (weight: number) => {
    setScore(prev => prev + weight);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-obsidian/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2 mb-8">
              <AlertTriangle className="w-5 h-5 text-gold" />
              <span className="text-gold text-sm font-bold tracking-widest uppercase">Diagnóstico Rápido</span>
              <span className="ml-auto text-white/40 text-sm font-mono">{currentQuestion + 1} / {questions.length}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 leading-tight">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.weight)}
                  className="w-full text-left px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/50 text-white/80 hover:text-white transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span>{option.text}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center relative z-10"
          >
            <h3 className="text-sm text-white/60 font-bold mb-4 uppercase tracking-widest">Nivel de Vida en Simulación</h3>
            
            <div className="text-7xl md:text-8xl font-display font-bold text-white mb-6 flex items-center justify-center gap-2">
              {score}<span className="text-4xl text-gold">%</span>
            </div>
            
            <p className="text-white/70 mb-10 text-lg max-w-md mx-auto">
              {score >= 75 ? "Estás operando completamente en piloto automático. Es urgente que tomes el control de tu vida." : 
               score >= 50 ? "Estás a medio camino entre vivir y solo existir. Necesitas despertar antes de que pase más tiempo." : 
               "Tienes cierto control, pero aún hay programas mentales obsoletos que te están limitando."}
            </p>
            
            <a 
              href="#registro"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-[#E8C881] text-obsidian px-8 py-4 rounded-full font-bold tracking-wider uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(197,160,89,0.3)] w-full sm:w-auto"
            >
              Despierta el 28 de marzo <ArrowRight className="w-5 h-5" />
            </a>
            
            <button 
              onClick={reset} 
              className="mt-8 flex items-center justify-center gap-2 mx-auto text-sm text-white/40 hover:text-white/80 transition-colors"
            >
              <RefreshCw className="w-4 h-4" /> Volver a intentar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
