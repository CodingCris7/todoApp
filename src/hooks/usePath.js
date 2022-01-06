import { useLocation } from 'react-router-dom';

const usePath = () => {
  const { pathname } = useLocation();

  return pathname.split('/')[1];
};

export default usePath;
