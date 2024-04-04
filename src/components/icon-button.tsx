import React, { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {
}

export const IconButton: React.FC<IconButtonProps> = ({...props}) => {
  return (
    <button
      className={"p-1 rounded-md cursor-pointer border border-white/10 hover:bg-white/5 disabled:bg-transparent disabled:cursor-not-allowed bg-white/20"}
      {...props}
    >
    </button>
  );
};
