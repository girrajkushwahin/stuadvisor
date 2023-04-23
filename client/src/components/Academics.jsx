import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { SignOut, SiteContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AcademicsComp from './AcademicsComp';
import AcademicsComp2 from './AcademicsComp2';
import DataPosted from './DataPosted';
const API = 'http://127.0.0.1:8000';

const Academics = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const [dataPosted, getDataPosted] = useState([]);
  const { key } = useOutletContext();
  const [dataAPI, setDataAPI] = useState([]);
  const [filtered, getFiltered] = useState({ one: '', two: '', three: '' });
  const [filtered2, setFiltered2] = useState({ branch: '', sem: '' });
  const [toggle, setToggle] = useState({ one: '', two: '', three: '' });

  const [branchsem, subjects] = dataAPI;

  const menuClick = id => {
    setData(id);
  }

  const getData = async url => {
    try {
      const res = await axios.get(url);
      setDataAPI(res.data);
    } catch (err) {
      console.log('Error occured while fetching the data');
    }
  }

  const getPostedData = async url => {
    try {
      const res = await axios.get(url);
      getDataPosted(res.data);
    } catch (err) {
      console.log('Error occured while fetching the data');
    }
  }

  const academicsData = [{ text: 'Notes', icon: <i className="i-tag fa-sharp fa-solid fa-note-sticky"></i>, click: menuClick }, { text: 'Important Questions', icon: <i className="i-tag fa-solid fa-circle-question"></i>, click: menuClick }, { text: 'Sample Papers', icon: <i className="i-tag fa-solid fa-pen-to-square"></i>, click: menuClick }, { text: 'Previous Papers', icon: <i className="i-tag fa-solid fa-star"></i>, click: menuClick }, { text: 'Data Posted', icon: <i className="i-tag fa-solid fa-server"></i>, click: menuClick }]

  const academicsMenu = [...academicsData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const academicsMenu2 = [...academicsData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Academics';
    if (state) key(academicsMenu2);
    else key(academicsMenu);
    getData(`${API}/academics`);
    getPostedData(`${API}/academicsposted`);
    // eslint-disable-next-line
  }, [])

  const handleSearch = data => {
    const newData = branchsem.filter(elem => {
      const userData = data.toLowerCase().trimEnd().replaceAll('.', '').replaceAll(' ', '');
      return elem.course === userData;
    });

    if (newData[0]) {
      getFiltered({ ...filtered, one: newData[0] });
      setToggle({ one: true, two: '', three: '', four: '' });
    } else toast.error('Data not found', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleSem = (data) => {
    getFiltered({ ...filtered, two: filtered.one });
    setToggle({ one: true, two: true, three: '', four: '' });
    setFiltered2({ ...filtered2, branch: data })
  }

  const handleSubject = (data) => {
    const newData = subjects.filter(elem => elem.course === filtered.one.course && elem.branch === filtered2.branch && elem.sem === data);
    getFiltered({ ...filtered, three: newData[0] });
    setToggle({ one: true, two: true, three: true, four: '' });
    setFiltered2({ ...filtered2, sem: data });
  }

  const common = {
    ph: 'Enter course name...',
    item1: 'B.Tech',
    item2: 'B.Com',
    item3: 'MBA',
    item4: 'B.Sc',
    item5: 'Diploma'
  }

  const Notes = {
    heading: <span className="search-span"><span>S</span>earch <span>f</span>or <span>N</span>otes...</span>,
    dataAPI: dataAPI
  }

  const ImpQue = {
    heading: <span className="search-span"><span>S</span>earch <span>f</span>or <span>i</span>mportant <span>q</span>uestions...</span>,
    handleSearch,
    handleSem,
    handleSubject,
    handleDownload: 'impque',
    filtered,
    filtered2,
    toggle
  }

  const SamplePaper = {
    heading: <span className="search-span"><span>S</span>earch <span>f</span>or <span>s</span>ample <span>p</span>apers...</span>,
    handleSearch,
    handleSem,
    handleSubject,
    handleDownload: 'sample',
    filtered,
    filtered2,
    toggle
  }

  const PrePaper = {
    heading: <span className="search-span"><span>S</span>earch <span>f</span>or <span>p</span>revious <span>p</span>apers...</span>,
    handleSearch,
    handleSem,
    handleSubject,
    handleDownload: 'prepaper',
    filtered,
    filtered2,
    toggle
  }

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <AcademicsComp {...Notes} {...common} /> : null}
        {data === 1 ? <AcademicsComp2 {...ImpQue} {...common} /> : null}
        {data === 2 ? <AcademicsComp2 {...SamplePaper} {...common} /> : null}
        {data === 3 ? <AcademicsComp2 {...PrePaper} {...common} /> : null}
        {data === 4 ? <DataPosted resp={dataPosted} /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Academics;