import React from 'react';
import Header from '../../Components/Header';
import MainSection from '../../Components/MainSection';

import './styles.scss';

const TodoPages = () => {

  return (
    <div>
      <h3>Your todo list</h3>
      <div className={'wrapper'}>
        <Header/>
        <MainSection/>
      </div>
    </div>
  );
}

export default TodoPages;
