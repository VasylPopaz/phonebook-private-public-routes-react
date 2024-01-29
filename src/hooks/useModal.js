import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEditModal = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleEditModal };
};
