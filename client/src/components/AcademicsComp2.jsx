import React, { useState } from 'react';
import searchImg from '../images/searchlogo.png';

const AcademicsComp2 = ({ ph, item1, item2, item3, item4, item5, heading, handleSearch, filtered, toggle, handleSem, handleSubject, handleDownload }) => {

    const [data, setData] = useState('');

    const instantData = [item1, item2, item3, item4, item5];

    const handleInstant = (data) => {
        setData(data);
        handleSearch(data);
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
                        {handleDownload === 'impque' ? filtered.three.subject.map((elem, indx) => <a download={true} href={elem.impque} key={indx}>{elem.title}<i className="fa-solid fa-arrow-down-long"></i></a>) : ''}
                        {handleDownload === 'sample' ? filtered.three.subject.map((elem, indx) => <a download={true} href={elem.sample} key={indx}>{elem.title}<i className="fa-solid fa-arrow-down-long"></i></a>) : ''}
                        {handleDownload === 'prepaper' ? filtered.three.subject.map((elem, indx) => <a download={true} href={elem.prepaper} key={indx}>{elem.title}<i className="fa-solid fa-arrow-down-long"></i></a>) : ''}
                    </div>
                </div> : ''}
            </div>
        </>
    )
}

export default AcademicsComp2;