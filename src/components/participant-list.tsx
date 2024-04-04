import React, { useState } from 'react';
import { Search } from "./search.tsx";
import { Table } from "./table/table.tsx";
import { Checkbox } from "./checkbox.tsx";
import { TableCell } from "./table/table-cell.tsx";
import { IconButton } from "./icon-button.tsx";
import { DotsThree } from "phosphor-react";
import { TableHeader } from "./table/table-header.tsx";
import { mockData } from "../data/mock-data.ts";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Pagination } from "./pagination.tsx";

dayjs.extend(relativeTime)

export interface IPagination {
  currentPage: number,
  pageSize: number,
  total: number
}

export const ParticipantList: React.FC = () => {
  
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageSize: 10,
    total: mockData.length
  })
  
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
          mockData.slice((pagination.currentPage - 1) * 10, pagination.currentPage * 10).map((participant) => {
            return (
              <tr key={participant?.id} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <Checkbox/>
                </TableCell>
                
                <TableCell>{participant?.id}</TableCell>
                
                <TableCell>
                  <div className="flex flex-col gap-1 font-semibold">
                    <span className="font-semibold text-white">{participant?.name}</span>
                    <span>{participant?.email}</span>
                  </div>
                </TableCell>
                
                <TableCell title={dayjs().to(dayjs(participant?.createdAt))}>
                  {dayjs(participant?.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                
                <TableCell title={dayjs().to(dayjs(participant?.checkedInAt))}>
                  {dayjs(participant?.checkedInAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <IconButton>
                    <DotsThree/></IconButton>
                </TableCell>
              </tr>
            )
          })
        }
        </tbody>
        
        <tfoot>
        <tr>
          <TableCell
            colSpan={3}>Showing {pagination.currentPage * pagination.pageSize} of {pagination.total} items</TableCell>
          
          <TableCell colSpan={3}>
            <Pagination pagination={pagination} setPagination={setPagination}/>
          </TableCell>
        </tr>
        </tfoot>
      </Table>
    </div>
  );
};
