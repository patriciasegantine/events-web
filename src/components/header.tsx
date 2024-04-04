import React from 'react';
import { Logo } from "./logo.tsx";
import { NavLink } from "./nav-link.tsx";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-5 py-2">
      <div className="flex items-center gap-2 text-amber-500 ">
        <Logo/>
        <p className="font-medium text-xl">My Events</p>
      </div>
      
      <nav className="flex gap-5">
        <NavLink title={'Events'} href={'/events'}/>
        <NavLink title={'Participants'} href={'/participants'}/>
      </nav>
    </div>
  );
};
