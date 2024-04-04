import React, { ComponentProps } from 'react';

interface TableProps extends ComponentProps<'table'> {

}

export const Table: React.FC<TableProps> = (props) => {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props}/>
    </div>
  );
};
