import React, { useState } from 'react';
import Blogs2 from './Blogs2';
import searchImg from '../images/searchlogo.png';

const SearchBlog = ({ heading, ph, handleComp, datadb }) => {

  const [data, setData] = useState('');
  const [filtered, getFiltered] = useState([]);
  const [filtered2, setFiltered2] = useState([]);

  const handleSearch = data => {
    const userData = data.toLowerCase().trimEnd().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '').replaceAll('{', '').replaceAll('}', '');

    if (handleComp === 'searchblog') {
      const newData = datadb.blog.filter(elem => {
        const heading = elem.heading.toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '').replaceAll('{', '').replaceAll('}', '');

        const status = heading.includes(userData);
        return status === true;
      })

      const newData2 = datadb.postedBlog.filter(elem => {
        const heading = elem.heading.toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '').replaceAll('{', '').replaceAll('}', '');

        const status = heading.includes(userData);
        return status === true;
      })
      if (data) {
        getFiltered(newData);
        setFiltered2(newData2);
      }
    }
    else if (handleComp === 'edublog') {
      const newData = datadb.blog.filter(elem => elem.category === 'edu').filter(elem => {
        const heading = elem.heading.toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '').replaceAll('{', '').replaceAll('}', '');

        const status = heading.includes(userData);
        return status === true;
      })

      const newData2 = datadb.postedBlog.filter(elem => elem.category === 'edu').filter(elem => {
        const heading = elem.heading.toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '').replaceAll('{', '').replaceAll('}', '');

        const status = heading.includes(userData);
        return status === true;
      })

      if (data) {
        getFiltered(newData);
        setFiltered2(newData2);
      }
    }
    else if (handleComp === 'otherblog') {
      const newData = datadb.blog.filter(elem => elem.category === 'other').filter(elem => {
        const heading = elem.heading.toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '').replaceAll('{', '').replaceAll('}', '');

        const status = heading.includes(userData);
        return status === true;
      })

      const newData2 = datadb.postedBlog.filter(elem => elem.category === 'other').filter(elem => {
        const heading = elem.heading.toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('&', 'and').replaceAll("'s", "").replaceAll('.', '').replaceAll('(', '').replaceAll(')', '').replaceAll('{', '').replaceAll('}', '');

        const status = heading.includes(userData);
        return status === true;
      })

      if (data) {
        getFiltered(newData);
        setFiltered2(newData2);
      }
    }
  }

  return (
    <>
      <div className="search-blog-container">
        <div className="search-box-container">
          <h1 className='search-box-heading'>{heading}</h1>
          <div className="search-box-img">
            <img src={searchImg} className="search-img" alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" placeholder={ph} value={data} onChange={e => setData(e.target.value.trimStart())} /><i className="fa-solid fa-magnifying-glass" onClick={() => handleSearch(data)}></i></span>
          </div>
        </div>
        {filtered || filtered2 ? <div className="blog-cards-container">
          {filtered ? filtered.map((elem, indx) => <Blogs2 {...elem} key={indx} />) : ''}
          {filtered2 ? filtered2.map((elem, indx) => <Blogs2 {...elem} key={indx} />) : ''}
        </div> : ''}
      </div>
    </>
  )
}

export default SearchBlog;