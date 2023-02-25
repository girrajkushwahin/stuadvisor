import React from 'react';
import News2 from './News2';

const newsData = [
  {
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  }
]

const News = () => {
  return (
    <>
      <div className="news-container">
        <div className="accordion">
          {newsData.map((curData, ind) => <News2 key={ind} {...curData} />)}
        </div>
      </div>
    </>
  )
}

export default News;