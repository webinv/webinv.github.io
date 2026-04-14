export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  scope: string;
  tech: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: 'pesa',
    name: 'PESA',
    description:
      'Przedsiębiorstwo z siedzibą w Bydgoszczy produkujące pojazdy szynowe',
    scope: 'Zbudowanie strony internetowej z wykorzystaniem systemu WordPress.',
    tech: 'WordPress, PHP, MySQL',
    images: [
      { src: '/portfolio/pesa/homepage.png', alt: 'PESA - strona główna' },
      { src: '/portfolio/pesa/about.png', alt: 'PESA - o firmie' },
      { src: '/portfolio/pesa/gallery.png', alt: 'PESA - galeria' },
      { src: '/portfolio/pesa/page.png', alt: 'PESA - produkty' },
      { src: '/portfolio/pesa/work.png', alt: 'PESA - praca' },
    ],
  },
  {
    slug: 'mreporter',
    name: 'mReporter.live',
    description:
      'mReporter to nowoczesna mobilna platforma dziennikarstwa obywatelskiego. Tutaj każdy może zostać reporterem.',
    scope:
      'Zbudowanie całej platformy backend & frontend, stworzenie aplikacji mobilnej dla iOS oraz Android.',
    tech: 'Java, Spring Framework 4, MongoDB, ElasticSearch, Redis, JavaScript, Docker',
    images: [
      { src: '/portfolio/mreporter/homepage.png', alt: 'mReporter - strona główna' },
      { src: '/portfolio/mreporter/create.png', alt: 'mReporter - dodawanie raportu' },
      { src: '/portfolio/mreporter/report.png', alt: 'mReporter - raport' },
      { src: '/portfolio/mreporter/mobile-home.jpg', alt: 'mReporter - aplikacja mobilna' },
      { src: '/portfolio/mreporter/mobile-category.jpg', alt: 'mReporter - aplikacja mobilna' },
    ],
  },
  {
    slug: 'jemradio',
    name: 'JemRadio',
    description: 'Internetowe radio kulinarne',
    scope:
      'Zbudowanie strony internetowej z wykorzystaniem systemu WordPress oraz dedykowanej aplikacji do zarządzania radiem on-line.',
    tech: 'WordPress, PHP, Silex, Extjs, MySQL, IceCast2, LiquidSoap, Libav',
    images: [
      { src: '/portfolio/jemradio/homepage.png', alt: 'JemRadio - strona główna' },
      { src: '/portfolio/jemradio/footer.png', alt: 'JemRadio - stopka' },
      { src: '/portfolio/jemradio/player.png', alt: 'JemRadio - player' },
      { src: '/portfolio/jemradio/panel-1.png', alt: 'JemRadio - panel administracyjny' },
      { src: '/portfolio/jemradio/panel-2.png', alt: 'JemRadio - panel administracyjny' },
      { src: '/portfolio/jemradio/panel-3.png', alt: 'JemRadio - panel administracyjny' },
      { src: '/portfolio/jemradio/panel-4.png', alt: 'JemRadio - panel administracyjny' },
      { src: '/portfolio/jemradio/panel-5.png', alt: 'JemRadio - panel administracyjny' },
    ],
  },
  {
    slug: 'kordus',
    name: 'Kordus',
    description:
      'Rodzinne szkółkarstwo ogrodnicze o ponad 100-letnich tradycjach',
    scope:
      'Zbudowanie strony internetowej z wykorzystaniem systemu eZ Publish.',
    tech: 'eZ Publish, PHP, MySQL',
    images: [
      { src: '/portfolio/kordus/homepage.png', alt: 'Kordus - strona główna' },
      { src: '/portfolio/kordus/gallery.png', alt: 'Kordus - galeria' },
      { src: '/portfolio/kordus/list.png', alt: 'Kordus - oferta' },
      { src: '/portfolio/kordus/plants.png', alt: 'Kordus - produkty' },
      { src: '/portfolio/kordus/contact.png', alt: 'Kordus - kontakt' },
    ],
  },
  {
    slug: 'flk',
    name: 'Fale Loki Koki',
    description:
      'API dla aplikacji mobilnej iOS/Android do obsługi zamówień z panelem administracyjnym dla hurtowni fryzjerskiej',
    scope:
      'Zbudowanie systemu do zarządzania produktami dla aplikacji mobilnych iOS/Android',
    tech: 'Java EE, Extjs, MySQL',
    images: [
      { src: '/portfolio/flk/clients.png', alt: 'Fale Loki Koki - lista klientów' },
      { src: '/portfolio/flk/comments.png', alt: 'Fale Loki Koki - komentarze' },
      { src: '/portfolio/flk/order.png', alt: 'Fale Loki Koki - zamówienie' },
      { src: '/portfolio/flk/product.png', alt: 'Fale Loki Koki - produkt' },
      { src: '/portfolio/flk/products.png', alt: 'Fale Loki Koki - produkty' },
    ],
  },
  {
    slug: 'luiggi',
    name: 'Luiggi',
    description: 'Studio grafiki i fotografii',
    scope:
      'Zbudowanie strony internetowej w oparciu o dedykowane rozwiązanie.',
    tech: 'PHP, JavaScript, ZendFramework, MySQL',
    images: [
      { src: '/portfolio/luiggi/homepage.png', alt: 'Luiggi - strona główna' },
      { src: '/portfolio/luiggi/oferta.png', alt: 'Luiggi - oferta' },
      { src: '/portfolio/luiggi/fotografia.png', alt: 'Luiggi - fotografia' },
    ],
  },
];
