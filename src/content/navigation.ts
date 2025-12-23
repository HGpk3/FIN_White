export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services" },
  { label: "Как мы работаем", href: "/how-we-work" },
  { label: "Контакты", href: "/contacts" },
  { label: "FAQ", href: "/#faq" },
];
