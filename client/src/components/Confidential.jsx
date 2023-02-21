import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Confidential = () => {
  const [state, setState] = useState(0);
  let { key } = useOutletContext();

  const menuClick = id => {
    setState(id);
  }

  const userMenu = [{ text: 'one', icon: <i className="i-tag fa-solid fa-person-walking"></i>, click: menuClick }, { text: 'two', icon: <i className="i-tag fa-regular fa-comments"></i>, click: menuClick }, { text: 'three', icon: <i className="i-tag fa-solid fa-newspaper"></i>, click: menuClick }, { text: 'four', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'five', icon: <i className="i-tag fa-solid fa-address-book"></i>, click: menuClick }, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }];

  useEffect(() => {
    key(userMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {/* {state === 0 ? <GetStarted /> : null}
        {state === 1 ? <Reviews /> : null}
        {state === 2 ? <News /> : null}
        {state === 3 ? <AboutUs /> : null}
        {state === 4 ? <ContactUs /> : null} */}
        <h1>Hello React</h1>
      </div>
    </>
  )
}

export default Confidential;