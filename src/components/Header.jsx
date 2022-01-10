import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowBack, Add } from '@mui/icons-material';
import usePath from '../hooks/usePath';

const Header = () => {
  const path = usePath();

  return (
    <header className="flex p-4 bg-catawba bg-gradient-to-r from-catawba via-red-violet to-upsdell-red">
      {path !== '' ? (
        <Link className="text-white" to="/">
          <ArrowBack />
        </Link>
      ) : (
        <Link className="text-white" to="/add">
          <Add />
        </Link>
      )}
      <h1 className="m-auto text-white">Todo App</h1>
    </header>
  );
};

export default Header;
