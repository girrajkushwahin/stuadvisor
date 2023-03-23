import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AcademicsComp from './AcademicsComp';
import DataPosted from './DataPosted';

const Academics = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const academicsData = [{ text: 'Notes', icon: <i className="i-tag fa-sharp fa-solid fa-note-sticky"></i>, click: menuClick }, { text: 'Important Questions', icon: <i className="i-tag fa-solid fa-circle-question"></i>, click: menuClick }, { text: 'Sample Papers', icon: <i className="i-tag fa-solid fa-pen-to-square"></i>, click: menuClick }, { text: 'Previous Papers', icon: <i className="i-tag fa-solid fa-star"></i>, click: menuClick }, { text: 'Data Posted', icon: <i className="i-tag fa-solid fa-server"></i>, click: menuClick }]

  const academicsMenu = [...academicsData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const academicsMenu2 = [...academicsData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Academics';
    if (state) key(academicsMenu2);
    else key(academicsMenu);
    // eslint-disable-next-line
  }, [])

  const handleNotes = (data) => {
    // console.log(data);
  }

  const handleImpQue = (data) => {
    // console.log(data);
  }

  const handleSamplePaper = (data) => {
    // console.log(data);
  }

  const handlePrePaper = (data) => {
    // console.log(data);
  }

  const common = {
    ph: 'Enter course name...',
    item1: 'B.Tech',
    item2: 'MBBS',
    item3: 'MBA',
    item4: 'B.Sc',
    item5: 'Diploma'
  }

  const Notes = {
    heading: 'Search for Notes...',
    handleSearch: handleNotes
  }

  const ImpQue = {
    heading: 'Search for important questions...',
    handleSearch: handleImpQue
  }

  const SamplePaper = {
    heading: 'Search for sample papers...',
    handleSearch: handleSamplePaper
  }

  const PrePaper = {
    heading: 'Search for previous papers...',
    handleSearch: handlePrePaper
  }

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <AcademicsComp {...Notes} {...common} /> : null}
        {data === 1 ? <AcademicsComp {...ImpQue} {...common} /> : null}
        {data === 2 ? <AcademicsComp {...SamplePaper} {...common} /> : null}
        {data === 3 ? <AcademicsComp {...PrePaper} {...common} /> : null}
        {data === 4 ? <DataPosted /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Academics;