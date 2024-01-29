import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const { error } = useAuth();

  if (error) {
    // toast.error(`Something went wrong!`);
  }

  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* {error ? (
        <h2 className="text-red-400 text-3xl font-bold text-center mt-4 mb-4">
          {error}
        </h2>
      ) : null} */}
    </>
  );
};
