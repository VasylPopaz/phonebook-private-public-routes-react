import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Backdrop>
      <InfinitySpin
        visible={true}
        width="300"
        color="#844391"
        ariaLabel="infinity-spin-loading"
      />
    </Backdrop>
  );
};

export default Loader;
