import React from 'react';

interface ILink {
  title: string
  href: string
}

export const Link: React.FC<ILink> = ({title, href}) => {
  return (
    <a
      className="font-medium text-base"
      href={href}
    >
      {title}
    </a>
  )
};
