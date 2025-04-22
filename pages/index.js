import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Instagram, CalendarCheck, MessageCircle, Scale, Briefcase, Gavel } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0f1d2e] text-white min-h-screen">
      <header className="relative w-full h-72">
        <Image
          src="/capa_facebook.jpg"
          alt="Capa do escritório Rodrigues & Silva"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Image
            src="/simbolo.png"
            alt="Logo Rodrigues & Silva"
            width={120}
            height={120}
            className="drop-shadow-lg"
          />
        </div>
      </header>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-8">
        <h1 className="text-4xl font-bold font-serif">Rodrigues & Silva Advogados</h1>
        <p className="text-lg mt-2 font-light">Excelência em advocacia Cível, Trabalhista e Tributária</p>
      </motion.div>

      <main className="p-4 space-y-8 max-w-5xl mx-auto">
        [CORTADO PARA BREVIDADE]
      </main>
    </div>
  );
}
