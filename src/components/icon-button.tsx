import React, { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}

export const IconButton: React.FC<IconButtonProps> = ({transparent, ...props}) => {
  return (
    <button
      className={
        transparent
          ? "p-1 rounded-md cursor-pointer border border-white/10 focus:bg-zinc-600 hover:bg-white/5  bg-transparent"
          : "p-1 rounded-md cursor-pointer border border-white/10 focus:bg-zinc-600 hover:bg-white/5 bg-white/10"}
      {...props}
    >
    </button>
  );
};
