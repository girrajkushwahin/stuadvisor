import React, { useState } from 'react';
import searchImg from '../images/search.jpg';

const SearchClg = ({ data }) => {

  const [search, setSearch] = useState('');
  const [filtered, getFiltered] = useState([]);

  const handleSearch = () => {
    const newData = data.filter(elem => {
      const clgName = elem.title.toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '');

      const userData = search.toLowerCase().trimEnd().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '');
      const status = clgName.includes(userData);
      return status === true;
    })
    getFiltered(newData);
  }

  const handleChange = e => {
    setSearch(e.target.value.trimStart());
    handleSearch();
  }

  return (
    <>
      <div className="search-main-container">
        <div className="search-box-container">
          <h1 className='search-box-heading'>Search your dream College...</h1>
          <div className="search-box-img">
            <img src={searchImg} alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" placeholder='Search your dream college...' value={search} onChange={handleChange} /><i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i></span>
          </div>
        </div>
        {search ? <div className="search-result-content">
          {filtered.map((elem, indx) => <div className="search-content" key={indx}>
            <div className="college-img">
              <img src={elem.logo} alt="College imeges" />
            </div>
            <div className="college-data">
              <div className="college-name-container">
                <h1 className='college-name'><a href={elem.url} target="_blank" rel="noreferrer">{elem.title}</a></h1>
                <p className='college-location'>{elem.location}</p>
              </div>
              <div className="fee-structer">
                <h1>{elem.fee}</h1>
                <p className='course-in-fee'>{elem.course}</p>
                <p>{elem.rating}</p>
              </div>
            </div>
            <div className="redirect-college">
              <div className="redirect-btn-box">
                <a href={elem.url} target="_blank" rel="noreferrer"><button className='redirect-btn'>Apply Now</button></a><br />
                <br />
                <a href={elem.reviews} target="_blank" rel="noreferrer"><button className='redirect-btn' >Reviews</button></a>
              </div>
            </div>
          </div>
          )}
        </div> : <div></div>}
      </div>
    </>
  )
}

export default SearchClg;