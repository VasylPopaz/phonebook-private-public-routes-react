import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact, updateContact } from 'state';
import { selectContacts } from 'state';

export function EditContactForm({ item, close, isEdit }) {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    if (isEdit) {
      if (item.name !== data.name && item.name !== data.number) {
        dispatch(updateContact({ id: item.id, body: data }));
        toast.success(`${data.name} was successfully changed.`);
      } else {
        toast.warning(`${data.name} has not been changed.`);
      }
    } else {
      if (
        contacts.find(
          elem => elem.name.toLowerCase() === data.name.toLowerCase()
        )
      )
        return toast.warning(`${data.name} is already in contacts!`);
      dispatch(addContact(data));
      toast.success(` ${data.name} was added successfully`);
    }
    close();
    reset();
  };

  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit(submit)}
          className="card-body text-lg font-bold"
        >
          <div className="form-control">
            <label className="label">Name</label>
            <input
              {...register('name')}
              type="text"
              placeholder="..."
              defaultValue={item?.name}
              className=" px-2  h-12 border-2 border-violet-400 rounded-lg outline-none  text-lg w-full max-w-xs focus:border-violet-600"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Number</label>
            <input
              {...register('number')}
              type="name"
              placeholder="..."
              defaultValue={item?.number}
              className=" px-2  h-12 border-2 border-violet-400 rounded-lg outline-none  text-lg w-full max-w-xs focus:border-violet-600"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="btn max-w-xs w-[80px] bg-green-400 hover:bg-green-700 hover:text-white"
            >
              Save
            </button>
            <button
              type="button"
              onClick={close}
              className="btn max-w-xs w-[80px] bg-red-400 hover:bg-red-700 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
