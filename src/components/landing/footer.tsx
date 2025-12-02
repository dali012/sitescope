import type { Route } from 'next';
import Link from 'next/link';

const products: { name: string; href: string }[] = [
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Changelog',
    href: '#',
  },
  {
    name: 'Docs',
    href: '#',
  },
];

const company: { name: string; href: string }[] = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
  {
    name: 'Careers',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

const legal: { name: string; href: string }[] = [
  {
    name: 'Privacy',
    href: '#',
  },
  {
    name: 'Terms',
    href: '#',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 px-4 pt-16 pb-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto mb-12 grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <Link href="/">
            <div className="mb-4 flex items-center gap-2 text-lg font-bold text-stone-900 dark:text-stone-100">
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-stone-900 dark:bg-stone-100">
                <div className="h-2 w-2 rounded-[1px] bg-white dark:bg-zinc-900"></div>
              </div>
              SiteScope
            </div>
          </Link>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Making the internet reliable, one monitor at a time.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-stone-900 dark:text-stone-100">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
            {products.map(product => (
              <li key={product.name}>
                <Link
                  href={product.href as Route}
                  className="hover:text-stone-900 dark:hover:text-stone-200"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-stone-900 dark:text-stone-100">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
            {company.map(company => (
              <li key={company.name}>
                <Link
                  href={company.href as Route}
                  className="hover:text-stone-900 dark:hover:text-stone-200"
                >
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-stone-900 dark:text-stone-100">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
            {legal.map(legal => (
              <li key={legal.name}>
                <Link
                  href={legal.href as Route}
                  className="hover:text-stone-900 dark:hover:text-stone-200"
                >
                  {legal.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200 pt-8 text-center text-xs text-stone-400 dark:border-zinc-800 dark:text-stone-500">
        © {new Date().getFullYear()} SiteScope Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
