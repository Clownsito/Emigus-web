import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMIGUS | Instalaciones Sanitarias, Gasfitería y Remodelaciones",
  description:
    "EMIGUS ofrece servicios de instalaciones sanitarias, gasfitería, reparaciones, mantenciones y remodelaciones. Cotiza por WhatsApp.",
  keywords: [
    "EMIGUS",
    "instalaciones sanitarias",
    "gasfitería",
    "reparaciones sanitarias",
    "remodelaciones",
    "filtraciones",
    "destape de cañerías",
    "cotización gasfitería",
  ],
  openGraph: {
    title: "EMIGUS | Instalaciones Sanitarias",
    description:
      "Soluciones profesionales en gasfitería, reparaciones, instalaciones sanitarias y remodelaciones.",
    url: "https://emigus-web.pages.dev",
    siteName: "EMIGUS",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EMIGUS Instalaciones Sanitarias",
    description:
      "Empresa de instalaciones sanitarias, gasfitería, reparaciones, mantenciones y remodelaciones.",
    url: "https://emigus-web.pages.dev",
    telephone: "+56955248486",
    areaServed: "Chile",
    serviceType: [
      "Gasfitería",
      "Instalaciones sanitarias",
      "Reparación de filtraciones",
      "Remodelaciones",
      "Mantención sanitaria",
      "Destape de cañerías",
    ],
  };

  return (
    <html lang="es-CL">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}