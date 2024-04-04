import React from 'react';
import { IconButton } from "./icon-button.tsx";
import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "phosphor-react";
import { IPagination } from "./participant-list.tsx";

interface PaginationProps {
  pagination: IPagination
  setPagination: React.Dispatch<IPagination>
}

type TPagination = 'first' | 'back' | 'next' | 'last'

export const Pagination: React.FC<PaginationProps> = ({pagination, setPagination}) => {
  
  const totalPage = Math.ceil(pagination.total / pagination.pageSize)
  
  const onChangePagination = (type: TPagination) => {
    let page: number;
    
    switch (type) {
      case 'first':
        page = 1;
        break;
      case 'last':
        page = totalPage;
        break;
      case 'next':
        page = pagination.currentPage + 1;
        break;
      case 'back':
        page = pagination.currentPage - 1;
        break;
      default:
        page = pagination.currentPage;
        break;
    }
    
    setPagination({...pagination, currentPage: page});
  }
  
  return (
    <div className="flex gap-5 items-center justify-end">
      <span>Page {Math.ceil(pagination.currentPage)} of {totalPage}</span>
      <div className="flex gap-2 ">
        <IconButton
          disabled={pagination.currentPage === 1}
          onClick={() => onChangePagination('first')}
        >
          <CaretDoubleLeft/>
        </IconButton>
        
        <IconButton
          disabled={pagination.currentPage === 1}
          onClick={() => onChangePagination('back')}
        >
          <CaretLeft/>
        </IconButton>
        
        <IconButton
          disabled={pagination.currentPage === totalPage}
          onClick={() => onChangePagination('next')}
        >
          <CaretRight/>
        </IconButton>
        
        <IconButton
          disabled={pagination.currentPage === totalPage}
          onClick={() => onChangePagination('last')}>
          <CaretDoubleRight/>
        </IconButton>
      </div>
    </div>
  );
};
