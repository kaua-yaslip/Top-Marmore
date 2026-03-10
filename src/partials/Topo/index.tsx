"use client";

import Link from "next/link";
import NextImage from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./topo.scss";

const nav = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Produtos & Obras", href: "/exemplo" },
];

export default function Topo() {
  return (
    <header className="header">
      <div className="bar">
        {/* Logo */}
        <Link href="/" className="logo" aria-label="Ir para Home">
          <NextImage
            src="/Imagens/Logo.png"
            alt="Top Mármore"
            width={360}          // use um valor maior aqui
            height={120}         // proporcional (ajuste se necessário)
            quality={100}        // força qualidade máxima
            priority
            sizes="(max-width: 980px) 180px, 220px"
            style={{ height: 44, width: "auto" }} // mantém o tamanho visual no header
          />
        </Link>

        {/* Menu central */}
        <nav className="nav" aria-label="Menu principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contatos */}
        <div className="right">
          <div className="contacts">
            <a className="contact" href="tel:+5511900000000">
              <FaPhoneAlt />
              <span>(11) 2304 - 1626</span>
            </a>

            <a className="contact" href="mailto:contato@topmarmore.com.br">
              <MdEmail />
              <span>contato@topmarmore.com.br</span>
            </a>
          </div>

          <a
            className="whats"
            href="https://wa.me/5511900000000"
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
