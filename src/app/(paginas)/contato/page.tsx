import ContatoForm from "@/components/ContactForm/ContactForm";
import TitlePage from "@/components/TitlePage";
import { settings } from "@/settings/settings";
import "@/styles/index.scss";
import { Metadata } from "next";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const { siteName, numeroTelefone, ddd, email } = settings;
const { rua, numero, cidade, estado, cep, urlMaps } = settings.endereco;

const title = "Contato";
const description = "Entre em contato com a Top Mármore e solicite seu orçamento.";
const keywords = "contato, top mármore, orçamento, mármores, granitos";
const canonical = "contato";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`,
  description,
  keywords,
  alternates: {
    canonical,
  },
  openGraph: {
    url: canonical,
    title: `${title} | ${siteName}`,
    description,
    images: [
      {
        url: "/top.webp",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    type: "website",
  },
};

export default function Contato() {
  return (
    <>
      <TitlePage title={title} bgImage="/imagens/produtos.jpg" />

      <section className="container-contato">
        <div className="base">
          <div className="contato-left">
            <div className="box-details">
              <div className="box-title">
                <h2 className="title">Entre em contato</h2>
                <p className="description">
                  Tire suas dúvidas e solicite um orçamento.
                </p>
              </div>

              <div className="contact">
                <a href={`tel:0${ddd}${numeroTelefone}`} target="_blank" rel="noreferrer">
                  <FaPhone /> {`(${ddd}) ${numeroTelefone}`}
                </a>

                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  <FiMail /> {email}
                </a>

                <a href={urlMaps} target="_blank" rel="noreferrer">
                  <FaMapMarkedAlt /> {`${rua}, ${numero} - ${cidade} - ${estado}, ${cep}`}
                </a>
              </div>
            </div>

            <ContatoForm variation="contatoForm" />
          </div>
        </div>
      </section>
    </>
  );
}