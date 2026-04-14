export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: 'globe',
    title: 'Strony internetowe',
    description:
      'Tworzymy nowoczesne responsywne strony internetowe dopasowane do wszystkich urządzeń, na smartfony, tablety i komputery PC. Budujemy serwisy szyte na miarę w oparciu o autorskie rozwiązania lub open source.',
  },
  {
    icon: 'smartphone',
    title: 'Aplikacje mobilne',
    description:
      'Zajmujemy się tworzeniem aplikacji mobilnych na platformy iOS oraz Android. Oferujemy kompleksowe rozwiązania obejmujące zarówno frontend oraz backend.',
  },
  {
    icon: 'code',
    title: 'Aplikacje dedykowane',
    description:
      'Masz do zbudowania skomplikowany system? Budujesz startup? Doskonale, ponieważ specjalizujemy się w nieszablonowych i nowatorskich rozwiązaniach. Nie boimy się wyzwań. Rozumiemy potrzeby biznesowe i zadbamy o każdy szczegół.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & Hosting',
    description:
      'Świadczymy usługi hostingowe oraz wsparcie przy rozwiązaniach chmurowych.',
  },
];
