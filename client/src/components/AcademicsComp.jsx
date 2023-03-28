import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import searchImg from '../images/searchlogo.png';

const AcademicsComp = ({ ph, item1, item2, item3, item4, item5, heading, dataAPI }) => {

  const [data, setData] = useState('');
  const [toggle, setToggle] = useState({ one: '', two: '', three: '', four: '' });
  const [filtered, getFiltered] = useState({ one: '', two: '', three: '', four: '' });
  const [filtered2, setFiltered2] = useState({ branch: '', sem: '' });

  const instantData = [item1, item2, item3, item4, item5];
  const [branchsem, subjects, units] = dataAPI;

  const handleInstant = (data) => {
    setData(data);
    handleSearch(data);
  }

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
      autoClose: 3000,
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

  const handleUnit = data => {
    const newData = units.filter(elem => elem.course === filtered.one.course && elem.branch === filtered2.branch && elem.sem === filtered2.sem && elem.subject === data);
    getFiltered({ ...filtered, four: newData[0] });
    setToggle({ ...toggle, four: true });
  }

  return (
    <>
      <div className="container-academics">
        <div className="search-box-container">
          <h1 className='search-box-heading'>{heading}</h1>
          <div className="search-box-img">
            <img src={searchImg} className="search-img" alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" value={data} placeholder={ph} onChange={e => setData(e.target.value.trimStart())} /><i className="fa-solid fa-magnifying-glass" onClick={() => handleSearch(data)}></i></span>
            <div className="search-lables">
              {instantData.map((elem, indx) => <span onClick={() => handleInstant(elem)} key={indx}>{elem}<i className="fa-solid fa-magnifying-glass"></i></span>)}
            </div>
          </div>
        </div>
        {toggle.one ? <div className="select-subjects">
          <h1>Select your Branch</h1>
          <div className="search-lables select-sub-lables">
            {filtered.one.branch.map((elem, indx) => <span onClick={() => handleSem(elem)} key={indx}>{elem}<i className="fa-solid fa-magnifying-glass"></i></span>)}
          </div>
        </div> : ''}
        {toggle.two ? <div className="select-subjects">
          <h1>Select your Year/Sem</h1>
          <div className="search-lables select-sub-lables">
            {filtered.two.sem.map((elem, indx) => <span onClick={() => handleSubject(elem)} key={indx}>{elem}<i className="fa-solid fa-magnifying-glass"></i></span>)}
          </div>
        </div> : ''}
        {toggle.three ? <div className="select-subjects">
          <h1>Select your Subject</h1>
          <div className="search-lables select-sub-lables">
            {filtered.three.subject.map((elem, indx) => <span onClick={() => handleUnit(elem)} key={indx}>{elem}<i className="fa-solid fa-magnifying-glass"></i></span>)}
          </div>
        </div> : ''}
        {toggle.four ? <div className="select-subjects">
          <h1>Select your Unit/Chapter</h1>
          <div className="search-lables select-sub-lables">
            {filtered.four.units.map((elem, indx) => <a download={true} href={elem.download} key={indx}>{elem.unit} <i className="fa-solid fa-arrow-down-long"></i></a>)}
          </div>
        </div> : ''}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
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

export default AcademicsComp;