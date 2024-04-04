import React from 'react';

interface ICheckbox {
  id?: string
  name?: string
}

export const Checkbox: React.FC<ICheckbox> = ({name, id}) => {
  return (
    <input
      type="checkbox" name={name} id={id}
      className="rounded size-4 bg-transparent outline-none border border-width/10 cursor-pointer checked:bg-white/10 hover:bg-white/20"
    />
  );
};
