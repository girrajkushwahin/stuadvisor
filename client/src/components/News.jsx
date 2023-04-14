import React from 'react';
import News2 from './News2';

const News = ({ data }) => {
  return (
    <>
      <div className="news-container">
        <div className="accordion">
          {data.map((curData, ind) => <News2 key={ind} {...curData} />)}
        </div>
      </div>
    </>
  )
}

export default News;