import React from 'react';
import News2 from './News2';
import "../newspage.css";
// const accordion = document.getElementsByClassName("contentBox");
// for (let i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active1");
//   });
// }

// const headline = 'News Headline';
// const paragraph = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
// const body = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
// aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
// incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
// omnis nulla, doloribus corrupti veniam error quasi ad!`;

const News = () => {

  return (
    <>
      <div className="news-container">
        <div className="accordion">
          <News2 />
          <News2 />
          <News2 />
        </div>
      </div>

    </>
  )
}

export default News;