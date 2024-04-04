import React, { ComponentProps } from 'react';

interface ITableHeader extends ComponentProps<'th'> {
}

export const TableHeader: React.FC<ITableHeader> = (props) => {
  return (
    <th className="py-3 px-4 font-semibold text-sm text-left" {...props}/>
  );
};
