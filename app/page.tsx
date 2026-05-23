"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Droplets,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Play,
  Send,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "56955248486";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    servicio: "",
    numero: "",
  });

  const enviarWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    const mensaje =
      `Hola EMIGUS, quiero solicitar una cotización.%0A%0A` +
      `Nombre: ${form.nombre}%0A` +
      `Dirección: ${form.direccion}%0A` +
      `Servicio a realizar: ${form.servicio}%0A` +
      `Teléfono cliente: ${form.numero}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
  };

  const navLinks = [
    ["Inicio", "#inicio"],
    ["Servicios", "#servicios"],
    ["Trabajos", "#trabajos"],
    ["Cotizar", "#cotizar"],
    ["FAQ", "#faq"],
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/85 md:to-slate-950/20" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-emigus.png"
              alt="Logo EMIGUS Instalaciones Sanitarias"
              className="h-12 w-12 rounded-full bg-white object-contain p-1"
            />
            <div>
              <p className="text-2xl font-black tracking-tight">EMIGUS</p>
              <p className="text-xs font-semibold text-green-400">
                Instalaciones Sanitarias
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-green-400">
                {label}
              </a>
            ))}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            className="hidden rounded-xl bg-green-600 px-5 py-3 text-sm font-bold hover:bg-green-500 sm:block"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/20 p-3 md:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="relative z-20 mx-4 rounded-2xl border border-white/10 bg-slate-900 p-4 md:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 font-bold hover:bg-white/10"
              >
                {label}
              </a>
            ))}
          </div>
        )}

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="rounded-full bg-blue-700 px-4 py-2 text-xs font-black uppercase tracking-wide">
              Gasfitería · Reparaciones · Remodelaciones
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Soluciones sanitarias que{" "}
              <span className="text-green-400">fluyen</span> contigo
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              EMIGUS realiza instalaciones sanitarias, gasfitería, reparación de
              filtraciones, mantenciones y remodelaciones con trabajo
              responsable, ordenado y profesional.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cotizar"
                className="rounded-xl bg-green-600 px-7 py-4 text-center font-black hover:bg-green-500"
              >
                Cotizar reparación
              </a>
              <a
                href="#servicios"
                className="rounded-xl border border-white/30 px-7 py-4 text-center font-black hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Trabajos garantizados", ShieldCheck],
              ["Atención rápida", Clock],
              ["Experiencia en terreno", Users],
              ["Precios claros", Star],
            ].map(([text, Icon]: any) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="shrink-0 text-green-400" />
                <p className="font-bold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white px-4 py-16 text-slate-950 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-black uppercase text-blue-700">
            Servicios EMIGUS
          </p>
          <h2 className="mt-2 text-center text-3xl font-black sm:text-4xl">
            Instalaciones, reparaciones y remodelaciones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Servicios pensados para hogares, locales, comunidades y proyectos
            que necesitan soluciones sanitarias claras y confiables.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Gasfitería y reparaciones", Wrench],
              ["Instalaciones sanitarias", Droplets],
              ["Remodelaciones de baños", CheckCircle],
              ["Mantención preventiva", ShieldCheck],
              ["Reparación de filtraciones", Wrench],
              ["Destape de cañerías", Droplets],
            ].map(([title, Icon]: any) => (
              <article
                key={title}
                className="overflow-hidden rounded-2xl border bg-white shadow-xl shadow-slate-200/70"
              >
                <div className="relative h-56 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=900&auto=format&fit=crop"
                    className="h-full w-full object-cover opacity-80"
                    alt={`${title} EMIGUS`}
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
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Trabajo profesional, limpio y realizado con materiales y
                    soluciones adecuadas para cada caso.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trabajos" className="bg-slate-950 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-black uppercase text-green-400">
            Trabajos realizados
          </p>
          <h2 className="mt-2 text-center text-3xl font-black sm:text-4xl">
            Antes y después
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Galería informativa para mostrar reparaciones, instalaciones y
            resultados reales de EMIGUS.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              "Remodelación de baño",
              "Instalación sanitaria",
              "Reparación de filtración",
            ].map((title) => (
              <article key={title} className="rounded-2xl bg-slate-900 p-4">
                <div className="grid grid-cols-2 overflow-hidden rounded-xl">
                  <div className="relative h-56 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=700&auto=format&fit=crop"
                      className="h-full w-full object-cover brightness-75"
                      alt={`Antes ${title}`}
                    />
                    <span className="absolute left-3 top-3 rounded bg-slate-950 px-3 py-1 text-xs font-bold">
                      ANTES
                    </span>
                  </div>
                  <div className="relative h-56 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=700&auto=format&fit=crop"
                      className="h-full w-full object-cover"
                      alt={`Después ${title}`}
                    />
                    <span className="absolute right-3 top-3 rounded bg-green-600 px-3 py-1 text-xs font-bold">
                      DESPUÉS
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="text-sm text-slate-400">
                  Resultado profesional realizado por EMIGUS.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizar" className="bg-white px-4 py-16 text-slate-950 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-blue-800 p-6 text-white sm:p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-black uppercase text-green-300">
              Cotización por WhatsApp
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Cotiza tu reparación o instalación
            </h2>
            <p className="mt-4 leading-8 text-blue-100">
              Completa tus datos y se abrirá WhatsApp con el mensaje listo para
              enviar a EMIGUS.
            </p>

            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-3">
                <Phone className="text-green-400" /> Respuesta directa por
                WhatsApp
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-green-400" /> Atención según zona y
                disponibilidad
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
                className="w-full rounded-xl border border-white/20 bg-white px-4 py-4 text-slate-950 outline-none focus:ring-4 focus:ring-green-400/40"
              />
            ))}

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-black hover:bg-green-500">
              Cotizar por WhatsApp <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      <section id="faq" className="bg-slate-100 px-4 py-16 text-slate-950 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-black uppercase text-green-700">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2 text-center text-3xl font-black sm:text-4xl">
            Resolvemos tus dudas
          </h2>

          <div className="mt-10 space-y-4">
            {[
              [
                "¿Qué servicios ofrece EMIGUS?",
                "Gasfitería, instalaciones sanitarias, reparación de filtraciones, destape de cañerías, mantenciones y remodelaciones.",
              ],
              [
                "¿Cómo solicito una cotización?",
                "Completa el formulario de la página y se abrirá WhatsApp con tu solicitud lista para enviar.",
              ],
              [
                "¿Realizan trabajos de antes y después?",
                "Sí. El sitio está preparado para mostrar fotos y videos de trabajos realizados.",
              ],
              [
                "¿Atienden emergencias?",
                "Depende de la zona y disponibilidad. Lo más rápido es consultar directamente por WhatsApp.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl bg-white p-5 shadow">
                <summary className="cursor-pointer font-black">{q}</summary>
                <p className="mt-3 leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative bg-slate-950 px-4 py-12 text-slate-400 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-emigus.png"
                alt="Logo EMIGUS"
                className="h-14 w-14 rounded-full bg-white object-contain p-1"
              />
              <div>
                <h2 className="text-2xl font-black text-white">EMIGUS</h2>
                <p>Instalaciones Sanitarias</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm">
              Gasfitería, reparaciones, instalaciones sanitarias y
              remodelaciones.
            </p>
          </div>

          <div>
            <h3 className="font-black text-white">Servicios</h3>
            <ul className="mt-4 space-y-2">
              <li>Gasfitería</li>
              <li>Instalaciones sanitarias</li>
              <li>Reparación de filtraciones</li>
              <li>Remodelaciones</li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white">Contacto</h3>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              className="mt-4 inline-block rounded-xl bg-green-600 px-5 py-3 font-black text-white hover:bg-green-500"
            >
              WhatsApp EMIGUS
            </a>
          </div>
        </div>

        <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram EMIGUS"
            className="rounded-full bg-pink-600 p-3 text-white shadow-lg"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook EMIGUS"
            className="rounded-full bg-blue-600 p-3 text-white shadow-lg"
          >
            <Facebook size={20} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            aria-label="WhatsApp EMIGUS"
            className="rounded-full bg-green-600 p-3 text-white shadow-lg"
          >
            <Phone size={20} />
          </a>
        </div>

        <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm">
          © 2026 EMIGUS. Sitio informativo optimizado para SEO, mobile-first y
          consultas por WhatsApp.
        </p>
      </footer>
    </main>
  );
}