import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero/PageHero";
import styles from "../../pedras-industrializadas/pedras-industrializadas.module.scss";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";

const PRODUCTS: Record<string, { name: string; image: string }[]> = {
  dekton: [
    { name: "Dekton Aeris", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Aeris-Tabla.jpg" },
    { name: "Dekton Arga", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Arga-Tabla.jpg" },
    { name: "Dekton Aura 15", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Aura-15.jpg" },
    { name: "Dekton Bergen", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Bergen.jpg" },
    { name: "Dekton Bromo", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Bromo.jpg" },
    { name: "Dekton Danae", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Danae.jpg" },
    { name: "Dekton Domoos", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Domoos.jpg" },
    { name: "Dekton Edora", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Edora.jpg" },
    { name: "Dekton Entzo", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Entzo.jpg" },
    { name: "Dekton Eter", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Eter.jpg" },
    { name: "Dekton Fossil", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Fossil.jpg" },
    { name: "Dekton Galema", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Galema.jpg" },
    { name: "Dekton Halo", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Halo.jpg" },
    { name: "Dekton Kairos", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Kairos.jpg" },
    { name: "Dekton Kelya", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Kelya.jpg" },
    { name: "Dekton Keon", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Keon.jpg" },
    { name: "Dekton Keranium", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/LUCENT-1.jpg" },
    { name: "Dekton Kira", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Kira.jpg" },
    { name: "Dekton Kovik", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Kovik.jpg" },
    { name: "Dekton Kreta", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Kreta.jpg" },
    { name: "Dekton Laos", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Laos.jpg" },
    { name: "Dekton Laurent", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Laurent.jpg" },
    { name: "Dekton Liquid Embers", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Liquid-Embers.jpg" },
    { name: "Dekton Liquid Shell", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Liquid-Shell.jpg" },
    { name: "Dekton Liquid Sky", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Liquid-Sky.jpg" },
    { name: "Dekton Lunar", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Lunar.jpg" },
    { name: "Dekton Moone", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Moone.jpg" },
    { name: "Dekton Natura 18", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Natura-18.jpg" },
    { name: "Dekton Nilium", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Nilium.jpg" },
    { name: "Dekton Olimpo", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Olimpo.jpg" },
    { name: "Dekton Opera", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Opera.jpg" },
    { name: "Dekton Orix", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Orix.jpg" },
    { name: "Dekton Portum", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Portum.jpg" },
    { name: "Dekton Radium", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Radium.jpg" },
    { name: "Dekton Rem", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Rem.jpg" },
    { name: "Dekton Rio Branco", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Rio-Branco.jpg" },
    { name: "Dekton Sasea", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Sasea.jpg" },
    { name: "Dekton Sirocco", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Sirocco.jpg" },
    { name: "Dekton Soke", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Soke.jpg" },
    { name: "Dekton Strato", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Strato.jpg" },
    { name: "Dekton Taga", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Taga.jpg" },
    { name: "Dekton Trilium", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Trilium.jpg" },
    { name: "Dekton Tundra 19", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Tundra-19.jpg" },
    { name: "Dekton Uyuni", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Uyuni.jpg" },
    { name: "Dekton Vera", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Vera.jpg" },
    { name: "Dekton Zenith", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Dekton-Zenith.jpg" },
  ],
  "nanoglass-e-primes": [
    { name: "Bege Prime", image: "https://topmarmore.com.br/wp-content/uploads/2022/06/bege-prime.jpg" },
    { name: "Branco Prime", image: "https://topmarmore.com.br/wp-content/uploads/2022/06/branco-prime.jpg" },
    { name: "Nanoglass", image: "https://topmarmore.com.br/wp-content/uploads/2022/06/nanoglass.jpg" },
  ],
  silestone: [
    { name: "Silestone Alumínio Nube", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Aluminio-Nube-1.jpg" },
    { name: "Silestone Arcilla Red", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Arcilla-Red.jpg" },
    { name: "Silestone Arden Blue", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Arden-Blue.jpg" },
    { name: "Silestone Ariel", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Ariel.jpg" },
    { name: "Silestone Bianco River", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Bianco-River.jpg" },
    { name: "Silestone Blanco City", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Blanco-City.jpg" },
    { name: "Silestone Blanco Maple", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Blanco-Maple.jpg" },
    { name: "Silestone Blanco Norte", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Blanco-Norte.jpg" },
    { name: "Silestone Blanco Orion", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Blanco-Orion.jpg" },
    { name: "Silestone Blanco Stellar 13", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Blanco-Stellar-13.jpg" },
    { name: "Silestone Blanco Zeus", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Blanco-Zeus.jpg" },
    { name: "Silestone Cala Blue", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Cala-Blue.jpg" },
    { name: "Silestone Calypso", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Calypso.jpg" },
    { name: "Silestone Camden", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Camden.jpg" },
    { name: "Silestone Cemento Spa", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Cemento-Spa.jpg" },
    { name: "Silestone Charcoal Soapstone", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Charcoal-Soapstone.jpg" },
    { name: "Silestone Cincel Grey", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Cincel-Grey.jpg" },
    { name: "Silestone Coral Clay", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Coral-Clay.jpg" },
    { name: "Silestone Corktown", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Corktown.jpg" },
    { name: "Silestone Desert Silver", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Desert-Silver.jpg" },
    { name: "Silestone Et Bella", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Et-Bella.jpg" },
    { name: "Silestone Eternal Calacatta Gold", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Calacatta-Gold.jpg" },
    { name: "Silestone Eternal D’or", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Dor.jpg" },
    { name: "Silestone Eternal Marfil", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Marfil.jpg" },
    { name: "Silestone Eternal Marquina", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Marquina.jpg" },
    { name: "Silestone Eternal Noir", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Noir.jpg" },
    { name: "Silestone Eternal Pearl Jasmine", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Pearl-Jasmine.jpg" },
    { name: "Silestone Eternal Serena", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Serena.jpg" },
    { name: "Silestone Eternal Statuario", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Eternal-Statuario.jpg" },
    { name: "Silestone Ethereal Dusk", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Ethereal-Dusk.jpg" },
    { name: "Silestone Ethereal Glow", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Ethereal-Glow.jpg" },
    { name: "Silestone Ethereal Haze", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Ethereal-Haze.jpg" },
    { name: "Silestone Ethereal Noctis", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Ethereal-Noctis.jpg" },
    { name: "Silestone Faro White", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Faro-White.jpg" },
    { name: "Silestone Gris Expo", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Gris-Expo.jpg" },
    { name: "Silestone Iconic White", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Iconic-White.jpg" },
    { name: "Silestone Kensho", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Kensho.jpg" },
    { name: "Silestone Lagoon", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Lagoon.jpg" },
    { name: "Silestone Lyra", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Lyra.jpg" },
    { name: "Silestone Marengo", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Marengo.jpg" },
    { name: "Silestone Merope", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Merope.jpg" },
    { name: "Silestone Miami Vena", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Miami-Vena.jpg" },
    { name: "Silestone Miami White 17", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Miami-White-17.jpg" },
    { name: "Silestone Negro Stellar", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Negro-Stellar.jpg" },
    { name: "Silestone Negro Tebas", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Negro-Tebas.jpg" },
    { name: "Silestone Niebla", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Niebla.jpg" },
    { name: "Silestone Noka", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Noka.jpg" },
    { name: "Silestone Nolita", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Nolita.jpg" },
    { name: "Silestone Poblenou", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Poblenou.jpg" },
    { name: "Silestone Posidonia Green", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Posidonia-Green.jpg" },
    { name: "Silestone Rougui", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Rougui.jpg" },
    { name: "Silestone Royal Reef", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Royal-Reef.jpg" },
    { name: "Silestone Seaport", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Seaport-1.jpg" },
    { name: "Silestone Snowy Ibiza", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Snowy-Ibiza.jpg" },
    { name: "Silestone White Storm", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-White-Storm.jpg" },
    { name: "Silestone Yukon", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Silestone-Yukon.jpg" },
  ],
  granitos: [
    { name: "Granito Azul Bahia", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Azul-Bahia.jpg" },
    { name: "Granito Azul Macaúbas", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Azul-Macaubas.jpg" },
    { name: "Granito Azul Norueguês", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Azul-Noruegues.jpg" },
    { name: "Granito Branco Itaúnas", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Branco-Itaunas.jpg" },
    { name: "Granito Branco Pollar", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Branco-Pollar.jpg" },
    { name: "Granito Café Imperial", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Cafe-Imperial.jpg" },
    { name: "Granito Exótico Black Cosmic", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Exotico-Black-Cosmic.jpg" },
    { name: "Granito Extreme White", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Granito-Extreme-White.jpg" },
    { name: "Granito Marrom Absoluto", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Marrom-Absoluto.jpg" },
    { name: "Granito Preto Absoluto", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Preto-Absoluto.jpg" },
    { name: "Granito Preto São Gabriel", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Preto-Sao-Gabriel.jpg" },
    { name: "Granito Preto Via Láctea", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Granito-Preto-Via-Lactea.jpg" },
  ],
  marmores: [
    { name: "Mármore Arco Íris", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/ARCO-IRIS.jpg" },
    { name: "Mármore Branco", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Marmore-branco.jpg" },
    { name: "Mármore Branco Piguês", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/Marmore-Branco-Pigues.jpg" },
    { name: "Mármore Botticino", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/BOTTICINO.jpg" },
    { name: "Mármore Calacatta Oro", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/CALACATTA-ORO.jpg" },
    { name: "Mármore Calacatta", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/CALACATTA.jpg" },
    { name: "Mármore Carrara Gioia", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/CARRARA-GIOIA.jpg" },
    { name: "Mármore Crema di Roccia", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/CREMA-DI-ROCCIA.jpg" },
    { name: "Mármore Crema Marfil", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/CREMA-MARFIL.jpg" },
    { name: "Mármore Daino Reale", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/DAINO-REALE.jpg" },
    { name: "Mármore Forest Brown", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/FOREST-BROWN.jpg" },
    { name: "Mármore Fossile Black", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/FOSSILE-BLACK.jpg" },
    { name: "Mármore Ilha Bela", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/ILHA-BELA.jpg" },
    { name: "Mármore Marrom Imperador", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/MARROM-IMPERADOR.jpg" },
    { name: "Mármore Michelangelo", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/MICHELANGELO.jpg" },
    { name: "Mármore Michelangelo Grigio", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Grigio-Michelangelo-1.jpg" },
    { name: "Mármore Michelangelo Calacatta", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Michelangelo-Calacatta-1.jpg" },
    { name: "Mármore Michelangelo Nuvolato", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Michelangelo-Nuvolato-3.jpg" },
    { name: "Mármore Michelangelo Prime", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Michelangelo-Prime-2.jpg" },
    { name: "Mármore Michelangelo Napoleon Bordeaux Polido", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Michelangelo-Napoleon-Bordeaux-Polido-1.jpg" },
    { name: "Mármore Michelangelo Nero Polido", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Nero-Michelangelo-Polido-1.jpg" },
    { name: "Mármore Nemesis Black", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/nemesis-black.png" },
    { name: "Mármore Nemesis Grey", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/NEMESIS-GREY.jpg" },
    { name: "Mármore Pietra Gray", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/PIETRA-GRAY.jpg" },
    { name: "Mármore Pietra Toscana", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/PIETRA-TOSCANA.jpg" },
    { name: "Mármore Prestige", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/PRESTIGE.jpg" },
    { name: "Mármore Sette Mari", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/SETTE-MARI.jpg" },
    { name: "Mármore Striato", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/STRIATO.jpg" },
    { name: "Mármore Van Gogh", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/VAN-GOGH.jpg" },
    { name: "Limestone Bateig Blue", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Limestone-Bateig-Blue.jpg" },
    { name: "Limestone Mont Dore", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Limestone-Mont-Dore.jpg" },
  ],
  "pedras-exoticas": [
    { name: "Quartzito Andromeda", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/ANDROMEDA-3.jpg" },
    { name: "Quartzito Atlantis", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/ATLANTIS-QUARTZITE-2.jpg" },
    { name: "Quartzito Bianco Laura", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/BIANCO-LAURA-2.jpg" },
    { name: "Quartzito Bronzite Rustic", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/BRONZITE-RUSTIC-2.jpg" },
    { name: "Quartzito Bronzite", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/BRONZITE-2.jpg" },
    { name: "Quartzito Chamonix", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Quartzito-Chamonix.jpg" },
    { name: "Quartzito Da Vinci", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/DA-VINCI-2.jpg" },
    { name: "Quartzito Denali", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/DENALI-2.jpg" },
    { name: "Quartzito Emerald Green", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/EMERALD-GREEN-1.jpg" },
    { name: "Quartzito Feldspato Centauros", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Feldspato-Centauros.jpg" },
    { name: "Quartzito Fusion Black", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/FUSION-BLACK.jpg" },
    { name: "Quartzito Fusion Explosion", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/FUSION-EXPLOSION-1.jpg" },
    { name: "Quartzito Fusion Revolution", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/FUSION-REVOLUTION-1.jpg" },
    { name: "Quartzito Fusion", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/FUSION-1.jpg" },
    { name: "Quartzito Incognitus", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/INCOGNITUS-1.jpg" },
    { name: "Quartzito Leblon", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/LEBLON-1.jpg" },
    { name: "Quartzito Lucent", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/LUCENT-1.jpg" },
    { name: "Quartzito Matira", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Quartzito-Matira.jpg" },
    { name: "Quartzito Meridian", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/MERIDIAN-1.jpg" },
    { name: "Quartzito Mirage", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/MIRAGE-1.jpg" },
    { name: "Quartzito Monaco", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/MONACO-1.jpg" },
    { name: "Quartzito Mont Blanc", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/MONT-BLANC-1.jpg" },
    { name: "Quartzito Notte Estelata", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/NOTTE-ESTELATA.jpg" },
    { name: "Quartzito Platino Dark", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Quartzito-Platino-Dark.jpg" },
    { name: "Quartzito Platino Ligth", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Quartzito-Platino-Ligth.jpg" },
    { name: "Quartzito Puro Brilhant Blank", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/Quartzo-Puro-Brilhant-Blank.jpg" },
    { name: "Quartzito Olympia", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/OLYMPIA-1.jpg" },
    { name: "Quartzito Sky Blue", image: "https://topmarmore.com.br/wp-content/uploads/2022/05/SKY-BLUE.jpg" },
    { name: "Quartzito Sky Gold", image: "https://topmarmore.com.br/wp-content/uploads/2022/04/SKY-GOLD-1.jpg" },
  ],
};

const CATEGORIES: Record<string, { title: string; description: string }> = {
  granitos: {
    title: "Granitos",
    description: "Versatilidade, resistência e variedade de cores para bancadas e pisos.",
  },
  marmores: {
    title: "Mármores",
    description: "Elegância e acabamento sofisticado para ambientes internos e decoração.",
  },
  "pedras-exoticas": {
    title: "Pedras Exóticas",
    description: "Materiais exclusivos com veios e padrões únicos para projetos especiais.",
  },
  dekton: {
    title: "Dekton",
    description: "Alta performance para bancadas, fachadas e áreas gourmet.",
  },
  "nanoglass-e-primes": {
    title: "Nanoglass e Primes",
    description: "Opções claras e elegantes para projetos internos.",
  },
  silestone: {
    title: "Silestone",
    description: "Quartzo com durabilidade, baixa porosidade e variedade de cores.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}) {
  const { categoria, slug } = await params;

  if (slug !== "geral") return {};

  const cat = CATEGORIES[categoria];
  if (!cat) return {};

  return {
    title: `${cat.title} | Produtos`,
    description: cat.description,
  };
}

export default async function ProdutoCategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}) {
  const { categoria, slug } = await params;

  if (slug !== "geral") return notFound();

  const cat = CATEGORIES[categoria];
  if (!cat) return notFound();

  const industrial = ["dekton", "nanoglass-e-primes", "silestone"] as const;
  const natural = ["granitos", "marmores", "pedras-exoticas"] as const;

  let relatedCategories: readonly string[] = [];

  if (industrial.includes(categoria as (typeof industrial)[number])) {
    relatedCategories = industrial.filter((c) => c !== categoria);
  } else if (natural.includes(categoria as (typeof natural)[number])) {
    relatedCategories = natural.filter((c) => c !== categoria);
  }

  return (
    <main>
      <PageHero
        title={cat.title}
        bgImage="/imagens/produtos.jpg"
        subtitle={cat.description}
      />

      <section className={styles.page}>
        <div className={`base ${styles.container}`}>
          <p className={styles.subtitle}>{cat.description}</p>

          {(PRODUCTS[categoria] || []).length === 0 ? (
            <p style={{ marginTop: 24 }}>
              Em breve você encontrará informações detalhadas, cores e aplicações.
            </p>
          ) : (
            <>
              <ProductsGrid products={PRODUCTS[categoria] || []} />

              <footer className={styles.footer}>
                <div className={styles.footerActions}>
                  <Link href="/exemplo" className={styles.ghostBtn}>
                    ← Voltar para produtos
                  </Link>

                  {relatedCategories.map((c) => (
                    <Link
                      key={c}
                      href={`/produtos/${c}/geral`}
                      className={styles.primaryBtn}
                    >
                      {CATEGORIES[c]?.title || c}
                    </Link>
                  ))}
                </div>
              </footer>
            </>
          )}
        </div>
      </section>
    </main>
  );
}