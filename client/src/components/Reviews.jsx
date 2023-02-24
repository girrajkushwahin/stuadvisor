import React from 'react';
import { Carousel } from 'react-bootstrap';
import { reviewSlider } from './Data';
import img1 from "../images/logofooter.png";
const Reviews = () => {
  return (
    <>
      <div className="review-main-container">
        <div className="heading-review-container">
          <h1>What people say about us</h1>
          <p>Your <span>Reviews</span> are important to develop our community more strong . Reviews help people to know more about us</p>
        </div>
        <hr />
        <div className="top-reviews">
          <h1><span>T</span>op <span>R</span>eviews</h1>
        </div>
        <div className="reviews-slider">
          <Carousel>
            {reviewSlider.map((elem, ind) => <Carousel.Item key={ind}>
              <div className="inner-slider">
                <img className='reveiw-profile' src={img1} alt="" />
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
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>
          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>
          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
          <div className="reviews">
            <p>Review by</p>
            <h1>Gopal kushwah</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <hr />
            <div className='review-content'><p>luptatibus, reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, suscipit?</p></div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews;