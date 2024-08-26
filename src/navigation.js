import { getPermalink } from './utils/permalinks';

const socialLinks = [
  { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.x.com/sueroesner/' },
  { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://de.linkedin.com/in/s-roesner' },
  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sue.roesner/' },
];

export const headerData = {
  links: [
    // {
    //   text: 'Publications',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
  ],
  socialLinks,
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // }
  ],
  //socialLinks,
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks,
  footNote: '© 2024 Susanne Roesner. All Rights Reserved.',
  footLinks: [{ text: 'Impressum & Datenschutz', href: getPermalink('/impressum') }],
};
