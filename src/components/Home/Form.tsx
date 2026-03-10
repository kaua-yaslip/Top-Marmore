"use client";

import ContactForm from "../ContactForm/ContactForm";
import "../../styles/index.scss";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import Link from "next/link";

const { numeroTelefone, ddd, email } = settings;
const { rua, numero, cidade, estado, cep, urlMaps } = settings.endereco;

export default function Form() {
  const pathname = usePathname();

  if (pathname === "/contato") return null;

  return (
    <div className="included-form">
      <div className="base included-grid">

        <div className="box-details">
          <div className="box-title">
            <h2 className="title">Entre em contato</h2>
            <p className="description">
              Tire suas dúvidas e solicite um orçamento.
            </p>
          </div>

          <div className="contact">
            <Link
              href={`tel:0${ddd}${numeroTelefone}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaPhone /> {`(${ddd}) ${numeroTelefone}`}
            </Link>

            <Link
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FiMail /> {email}
            </Link>

            <Link
              href={urlMaps}
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkedAlt />{" "}
              {`${rua}, ${numero} - ${cidade} - ${estado}, ${cep}`}
            </Link>
          </div>
        </div>

        <div className="included-content">
          <ContactForm variation="contatoFormIncluded" />

          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.783065919046!2d-46.6148044!3d-23.504322000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce589fca4fc9ab%3A0xb8dc3443eababbf7!2sAv.%20Zaki%20Narchi%2C%201506%20-%20Vila%20Guilherme%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002029-001!5e0!3m2!1spt-BR!2sbr!4v1770740142365!5m2!1spt-BR!2sbr"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
