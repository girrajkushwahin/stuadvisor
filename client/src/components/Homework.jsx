import React, { useState } from 'react';
const Homework = () => {
  const [courses, setCourses] = useState();
  const [inputValue, setInputValue] = useState();
  const [data, setData] = useState(inputValue);
  const HomeWorkCourse = [
    {
      course: "B.tech",
    },
    {
      course: "M.tech",
    },
    {
      course: "MBA",
    },
    {
      course: "Bsc Computers",
    },
    {
      course: "Nursing",
    },
    {
      course: "Pharmacy",
    },
    {
      course: "B.tech",
    },
    {
      course: "Commerce",
    },
    {
      course: "Law",
    },
    {
      course: "BCA",
    },
    {
      course: "B.des",
    },
    {
      course: "B.Arch",
    },
    {
      course: "M.pharma",
    },

  ]
  const homeWorks = (course) => {
    HomeWorkCourse.map((item, i) => {
      if (item.course === course) {
        console.log(item.course);
        setCourses(course);
      } else if (item.course === inputValue) {
        setCourses(inputValue);
      }
    })
  }

  return (
    <>
      <div className="container-academics">
        <div className="search-box-container">
          <h1 className='search-box-heading'>Enter your course name...</h1>
          <div className="search-input-box">
            <span className='input-span'><input type="text" value={inputValue} placeholder='Enter your course name' onChange={(e) => setInputValue(e.target.value)} /><i className="fa-solid fa-magnifying-glass"></i></span>
            <div className="search-lables">
              <span onClick={() => homeWorks("B.tech")}>B.tech <i class="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => homeWorks("M.tech")}>M.tech <i class="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => homeWorks("MBA")}>MBA <i class="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => homeWorks("Bsc Computers")}>Bsc Computers <i class="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => homeWorks("Nursing")}>Nursing <i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homework;