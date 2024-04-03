import React from 'react';
import { MagnifyingGlass } from "phosphor-react";

export const Search: React.FC = () => {
  return (
    <div className="flex gap-3 item-search">
      <h1 className="text-2xl font-bold">Participants</h1>
      
      <div className="px-3 w-72 py-1.5 rounded-lg border border-white/10 text-sm flex items-center gap-3">
        <input type="text" placeholder="Search participant..." className="bg-transparent flex-1 outline-none"/>
        <MagnifyingGlass className="size-4 text-amber-500"/>
      </div>
    </div>
  );
};
