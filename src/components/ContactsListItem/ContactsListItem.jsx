import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { useModal } from 'hooks/useModal';
import { deleteContact } from 'state';
import { toast } from 'react-toastify';

export const ContactsListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { isOpen, toggleEditModal } = useModal();
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  const handleDeleteContact = item => {
    dispatch(deleteContact(item.id));
    toast.success(`${item.name} was successfully deleted.`);
  };

  return (
    <>
      <li
        key={item.id}
        className="p-4 w-[100%] flex flex-col gap-2 bg-violet-500 rounded shadow-xl text-center"
      >
        <h2 className="font-bold text-white text-lg ">
          {item.name}: {item.number}
        </h2>
        <div className="flex justify-between ">
          <button
            onClick={toggleEditModal}
            className="btn max-w-xs w-[80px] bg-green-400 hover:bg-green-700 hover:text-white"
            type="button"
          >
            Edit
          </button>
          <button
            className="btn max-w-xs w-[80px] bg-red-400 hover:bg-red-700 hover:text-white"
            type="button"
            onClick={() => handleDeleteContact(item)}
          >
            Delete
          </button>
        </div>
      </li>
      {isOpen && (
        <Modal item={item} close={toggleEditModal} isEdit={isOpen}></Modal>
      )}
    </>
  );
};
