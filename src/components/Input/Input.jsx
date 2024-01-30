import { useState } from 'react';
import { IoGlasses, IoGlassesOutline } from 'react-icons/io5';

export const Input = ({
  register,
  name,
  label,
  type = 'text',
  minLength = 0,
  pr = 0,
}) => {
  const [showPass, setShowPass] = useState(false);
  const paddRight = type === 'password' ? '40px' : '12px';

  return (
    <div className="form-control">
      <label className="label">{label}</label>
      <div className=" relative ">
        <input
          {...register(name)}
          type={showPass ? 'text' : type}
          placeholder="..."
          className="form-input"
          style={{ paddingRight: paddRight }}
          required
          minLength={minLength}
        />
        {type === 'password' && (
          <button type="button" onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <IoGlassesOutline
                className="absolute right-1 top-[5px] "
                size={40}
              />
            ) : (
              <IoGlasses className="absolute right-1 top-[5px]" size={40} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
