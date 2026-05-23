"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Wrench,
  ShieldCheck,
  Clock,
  Users,
  Star,
  MapPin,
  Phone,
  Send,
  Play,
  CheckCircle,
} from "lucide-react";
import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "56955248486";

export default function Home() {
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    servicio: "",
    numero: "",
  });

  const enviarWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    const mensaje = `Hola EMIGUS, quiero solicitar una cotización.%0A%0A` +
      `Nombre: ${form.nombre}%0A` +
      `Dirección: ${form.direccion}%0A` +
      `Servicio a realizar: ${form.servicio}%0A` +
      `Teléfono cliente: ${form.numero}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight">EMIGUS</h1>
            <p className="text-sm text-green-400">Instalaciones Sanitarias</p>
          </div>

          <div className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#trabajos">Trabajos</a>
            <a href="#cotizar">Cotizar</a>
            <a href="#faq">FAQ</a>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-bold shadow-lg shadow-green-900/30 hover:bg-green-500"
          >
            Cotizar por WhatsApp
          </a>
        </nav>

        <div id="inicio" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="rounded-full bg-blue-700 px-4 py-2 text-xs font-bold uppercase">
              Instalaciones sanitarias profesionales
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Soluciones sanitarias que{" "}
              <span className="text-green-400">fluyen</span> contigo
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              En EMIGUS entregamos soluciones confiables en gasfitería,
              instalaciones sanitarias, reparaciones y remodelaciones.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cotizar"
                className="rounded-xl bg-green-600 px-7 py-4 text-center font-bold hover:bg-green-500"
              >
                Cotizar ahora
              </a>
              <a
                href="#servicios"
                className="rounded-xl border border-white/30 px-7 py-4 text-center font-bold hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur md:grid-cols-4">
            {[
              ["Trabajos garantizados", ShieldCheck],
              ["Atención rápida", Clock],
              ["Experiencia en terreno", Users],
              ["Precios justos", Star],
            ].map(([text, Icon]: any) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="text-green-400" />
                <p className="font-bold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-black uppercase text-blue-700">
            Nuestros servicios
          </p>
          <h2 className="mt-2 text-center text-4xl font-black">
            Soluciones para cada necesidad
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Gasfitería y reparaciones", Wrench],
              ["Instalaciones sanitarias", Droplets],
              ["Remodelaciones", CheckCircle],
              ["Mantención preventiva", ShieldCheck],
              ["Reparación de filtraciones", Wrench],
              ["Destape de cañerías", Droplets],
            ].map(([title, Icon]: any) => (
              <div
                key={title}
                className="overflow-hidden rounded-2xl border bg-white shadow-xl shadow-slate-200"
              >
                <div className="relative h-48 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=900&auto=format&fit=crop"
                    className="h-full w-full object-cover opacity-80"
                    alt={title}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 p-4">
                      <Play className="fill-slate-950 text-slate-950" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Icon className="mb-4 text-blue-700" />
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Trabajos profesionales, limpios y realizados con compromiso.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trabajos" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-black uppercase text-green-400">
            Trabajos realizados
          </p>
          <h2 className="mt-2 text-center text-4xl font-black">
            Antes y Después
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Remodelación de baño", "Instalación de alcantarillado", "Reparación de filtración"].map(
              (title) => (
                <div key={title} className="rounded-2xl bg-slate-900 p-4">
                  <div className="grid grid-cols-2 overflow-hidden rounded-xl">
                    <div className="relative h-64">
                      <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=700&auto=format&fit=crop"
                        className="h-full w-full object-cover brightness-75"
                        alt="Antes"
                      />
                      <span className="absolute left-3 top-3 rounded bg-slate-950 px-3 py-1 text-xs font-bold">
                        ANTES
                      </span>
                    </div>
                    <div className="relative h-64">
                      <img
                        src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=700&auto=format&fit=crop"
                        className="h-full w-full object-cover"
                        alt="Después"
                      />
                      <span className="absolute right-3 top-3 rounded bg-green-600 px-3 py-1 text-xs font-bold">
                        DESPUÉS
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-black">{title}</h3>
                  <p className="text-sm text-slate-400">Trabajo real EMIGUS</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="cotizar" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-blue-800 p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-4xl font-black">Cotiza tu reparación</h2>
            <p className="mt-4 text-blue-100">
              Completa tus datos y enviaremos tu solicitud directamente al
              WhatsApp de EMIGUS.
            </p>
            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-3">
                <Phone className="text-green-400" /> Respuesta rápida
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-green-400" /> Atención en terreno
              </p>
            </div>
          </div>

          <form onSubmit={enviarWhatsApp} className="space-y-4">
            {[
              ["nombre", "Nombre cliente"],
              ["direccion", "Dirección"],
              ["servicio", "Servicio a realizar"],
              ["numero", "Número de contacto"],
            ].map(([name, label]) => (
              <input
                key={name}
                required
                placeholder={label}
                value={(form as any)[name]}
                onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-4 text-slate-950 outline-none"
              />
            ))}

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-black hover:bg-green-500">
              Cotizar por WhatsApp <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      <section id="faq" className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-black uppercase text-green-700">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2 text-center text-4xl font-black">
            Resolvemos tus dudas
          </h2>

          <div className="mt-10 space-y-4">
            {[
              ["¿Qué servicios ofrece EMIGUS?", "Gasfitería, instalaciones sanitarias, remodelaciones, mantenciones y reparaciones."],
              ["¿Realizan cotizaciones?", "Sí, puedes solicitarla directamente por WhatsApp completando el formulario."],
              ["¿Atienden emergencias?", "Depende de la disponibilidad y la zona. Lo ideal es consultar por WhatsApp."],
              ["¿Los trabajos tienen garantía?", "Sí, los trabajos se realizan con compromiso y responsabilidad."],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl bg-white p-5 shadow">
                <summary className="cursor-pointer font-black">{q}</summary>
                <p className="mt-3 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-center text-slate-400">
        <h2 className="text-2xl font-black text-white">EMIGUS</h2>
        <p>Instalaciones Sanitarias · Gasfitería · Remodelaciones</p>
      </footer>
    </main>
  );
}