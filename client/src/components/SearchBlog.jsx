import React, { useState, useEffect } from 'react';
import Blogs2 from './Blogs2';
import searchImg from '../images/searchlogo.png';

const SearchBlog = ({ heading, ph, filtered, handleSearch }) => {

  const [data, setData] = useState('');

  let blogdata =
    <div>
      <h3>introduction to Internet of things?</h3>
      <h4>introduction to IOT</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
      <h4>History of IOT?</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
      <h3>what is machine learning?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
      <h4>machine learning types</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
      <p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>
    </div>

  const cardData = {
    heading: 'What is IoT? What technologies have made IoT possible?',
    author: 'Gopal singh',
    date: '01/01/2005',
    gender: 'male',
    blog: blogdata
  }

  useEffect(() => {
    handleSearch(data);
    // eslint-disable-next-line
  }, [data])

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
        {data ? <div className="blog-cards-container">
          <Blogs2 {...cardData} />
          <Blogs2 {...cardData} />
          <Blogs2 {...cardData} />
        </div> : ''}
      </div>
    </>
  )
}

export default SearchBlog;