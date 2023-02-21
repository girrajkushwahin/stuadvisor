import React from 'react';
import "../newspage.css"
const accordion = document.getElementsByClassName("contentBox");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active1");
  });
}
const News = () => {
  return (
    <>
      <div className="news-container">
        <div className="accordion">
          <div className="contentBox">
            <div className="label">
              <h1>List One</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                omnis nulla, doloribus corrupti veniam error quasi ad!</p>
            </div>

          </div>
          <div className="contentBox">
            <div className="label">
              <h1>List Two</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                omnis nulla, doloribus corrupti veniam error quasi ad!</p>
            </div>
          </div>
          <div className="contentBox">
            <div className="label">
              <h1>List Three</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                omnis nulla, doloribus corrupti veniam error quasi ad!</p>
            </div>
          </div>
          <div className="contentBox">
            <div className="label">
              <h1>List Four</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                omnis nulla, doloribus corrupti veniam error quasi ad! lorem1000</p>
            </div>
          </div>
          <div className="contentBox">
            <div className="label">
              <h1>List Four</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                omnis nulla, doloribus corrupti veniam error quasi ad! lorem1000</p>
            </div>
          </div>
          <div className="contentBox">
            <div className="label">
              <h1>List Four</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                omnis nulla, doloribus corrupti veniam error quasi ad! lorem1000</p>
            </div>
          </div>
          <div className="contentBox">
            <div className="label">
              <h1>List Four</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                omnis nulla, doloribus corrupti veniam error quasi ad! lorem1000</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default News;