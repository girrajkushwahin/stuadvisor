import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Homework from './Homework';
import Assignments from './Assignments';
import Prepaper from './Prepaper';
import Practiseset from './Practiseset';
import Impque from './Impque';

const Academics = () => {
  const [state, setState] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setState(id);
  }

  const academicsMenu = [{ text: 'Homework', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Assignments', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Previous year papers', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'practise sets', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'important questions', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }];

  useEffect(() => {
    key(academicsMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {state === 0 ? <Homework /> : null}
        {state === 1 ? <Assignments /> : null}
        {state === 2 ? <Prepaper /> : null}
        {state === 3 ? <Practiseset /> : null}
        {state === 4 ? <Impque /> : null}
      </div>
    </>
  )
}

export default Academics;