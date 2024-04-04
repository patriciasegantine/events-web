import React, { ComponentProps } from 'react';

interface ILink extends ComponentProps<'a'> {
  title: string
  href: string
}

export const NavLink: React.FC<ILink> = ({title, href, ...props}) => {
  return (
    <a
      className="font-medium text-base hover:text-zinc-400"
      href={href}
      {...props}
    >
      {title}
    </a>
  )
};
