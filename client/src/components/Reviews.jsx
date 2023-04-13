import React from 'react';
import { Carousel } from 'react-bootstrap';
import { reviewSlider } from './Data';
const Reviews = ({ data }) => {
  const star1 = '⭐', star2 = '⭐⭐', star3 = '⭐⭐⭐', star4 = '⭐⭐⭐⭐', star5 = '⭐⭐⭐⭐⭐';
  let rating;

  const setRating = data => {
    if (data === '1 star') rating = star1;
    else if (data === '2 stars') rating = star2;
    else if (data === '3 stars') rating = star3;
    else if (data === '4 stars') rating = star4;
    else rating = star5;
  }

  return (
    <>
      <div className="review-main-container">
        <div className="heading-review-container">
          <h1>What people say about us</h1>
          <p>Your <span>Reviews</span> are important to develop our community more strong. Reviews help people to know more about us</p>
        </div>
        <hr />
        <div className="top-reviews">
          <h1><span>T</span>op <span>R</span>eviews</h1>
        </div>
        <div className="reviews-slider">
          <Carousel>
            {reviewSlider.map((elem, ind) => <Carousel.Item key={ind}>
              <div className="inner-slider">
                <img className='reveiw-profile' src={elem.face} alt="sliderpic" />
                <p>Review by</p>
                <h1>{elem.text}</h1>
                <p>⭐⭐⭐⭐⭐</p>
                <hr />
                <div className='slider-content'><p>{elem.review}</p></div>
              </div>
            </Carousel.Item>)}
          </Carousel>
        </div>
        <hr />
        <div className="top-reviews">
          <h1><span>M</span>ore <span>R</span>eviews</h1>
        </div>
        <div className="reviews-container">
          {data.map((val, key) => {
            setRating(val.stars);
            return <div className="reviews" key={key}>
              <p>Review by</p>
              <h1>{val.name}</h1>
              <p>{rating}</p>
              <hr />
              <div className='review-content'><p>{val.review}</p></div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Reviews;