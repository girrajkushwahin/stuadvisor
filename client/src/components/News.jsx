import React, { useState } from 'react';
import News2 from './News2';
import "../newspage.css";

const newsData = () => [
  {
    id: 1,
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    id: 2,
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    id: 3,
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    id: 4,
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },
  {
    id: 5,
    newsheading: "List one",
    subContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fullContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodiaut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsumincidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quodomnis nulla, doloribus corrupti veniam error quasi ad!"
  },

]

const News = () => {
  const [data, setData] = useState(newsData);
  return (
    <>
      <div className="news-container">
        <div className="accordion">
          {
            data.map((curData) => {
              const { id } = curData;
              return <News2 key={id} {...curData} />
            })
          }
        </div>
      </div>

    </>
  )
}

export default News;