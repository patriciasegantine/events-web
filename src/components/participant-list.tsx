import React from 'react';
import { Search } from "./search.tsx";
import { Table } from "./table/table.tsx";
import { Checkbox } from "./checkbox.tsx";
import { TableCell } from "./table/table-cell.tsx";
import { IconButton } from "./icon-button.tsx";
import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight, DotsThree } from "phosphor-react";
import { TableHeader } from "./table/table-header.tsx";

export const ParticipantList: React.FC = () => {
  
  return (
    <div className="flex flex-col gap-4">
      <Search/>
      
      <Table>
        <thead>
        <tr className="border-b border-white/10 ">
          <TableHeader><Checkbox/></TableHeader>
          <TableHeader>Code</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Create at</TableHeader>
          <TableHeader>Check-in at</TableHeader>
        </tr>
        </thead>
        
        <tbody>
        {
          Array.from({length: 10}).map((_, i) => {
            return (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <Checkbox/>
                </TableCell>
                
                <TableCell>65454654</TableCell>
                
                <TableCell>
                  <div className="flex flex-col gap-1 font-semibold">
                    <span className="font-semibold text-white">Patricia Segantine</span>
                    <span>patriciasegantine@email.com</span>
                  </div>
                </TableCell>
                
                <TableCell>20.03.04</TableCell>
                <TableCell>20.03.04</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <DotsThree/></IconButton>
                </TableCell>
              </tr>
            )
          })
        }
        </tbody>
        
        <tfoot>
        <tr>
          <TableCell colSpan={3}>Showing 3 of 100 items</TableCell>
          
          <TableCell colSpan={3}>
            <div className="flex gap-5 items-center justify-end">
              <span>Page 1 of 11</span>
              <div className="flex gap-2 ">
                <IconButton onClick={() => console.log('first')}><CaretDoubleLeft/></IconButton>
                <IconButton onClick={() => console.log('back')}><CaretLeft/></IconButton>
                <IconButton onClick={() => console.log('next')}><CaretRight/></IconButton>
                <IconButton onClick={() => console.log('last')}><CaretDoubleRight/></IconButton>
              </div>
            </div>
          </TableCell>
        </tr>
        </tfoot>
      </Table>
    </div>
  );
};
