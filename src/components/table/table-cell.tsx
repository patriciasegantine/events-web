import React, { ComponentProps } from 'react';

interface ITableCell extends ComponentProps<'td'> {

}

export const TableCell: React.FC<ITableCell> = (props) => {
  return (
    <td className="py-3 px-4 text-sm text-zinc-300" {...props}/>
  );
};
