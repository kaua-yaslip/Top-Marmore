import { SiteSettings } from "@/types";

const siteName = "Site Base";
const title = `Início | ${siteName}`;
const description = "Exemplo";
const keywords = "Exemplo";
export const url = "https://www.nomesite.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os "includes" das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title, // Título da página - Obs: Esse titulo é o padrão, cada página deve conter um Metadata
  description, // Descrição da página - Obs: Essa descrição é padrão, cada página deve conter um Metadata
  siteName,
  keywords, // Palavras-chave para SEO index
  canonical: url,
  ddd: "11",
  selosDark: true, // Selos Rodapé - True = Preto ||  False = Branco
  numeroTelefone: "2304-1626",
  whatsappApi: "https://api.whatsapp.com/send?phone=5511945875616",
  numeroWhatsapp: "94587-5616",
  // email: "wesley@yaslip.com.br",
  // emailDestinatario: "wesley@yaslip.com.br",
  email: "contato@topmarmore.com.br",
  emailDestinatario: "contato@topmarmore.com.br",
  endereco: {
    urlMaps: "https://maps.app.goo.gl/nv7peGCxWfh8mfZM7",
    rua: "Avenida Zaki Narchi - Santana",
    numero: "1506",
    cidade: "São Paulo",
    estado: "SP",
    cep: "02029-001",
    mapaEmbed: "https://maps.app.goo.gl/nv7peGCxWfh8mfZM7",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/Imagens/Top-Mármore-1-2.png",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    locale: "pt_BR", // Definindo a localidade do Open Graph
    region: "Brasil", // Definindo a região
  },
  robots: "index, follow",
};
