import React from 'react'

const PostReview = () => {
    return (
        <>
            <div className="post-revies-container">
                <h1>Your <span>Reviews</span>  are important to develop our community more strong . Reviews help people to know more about us</h1>
                <hr />
                <div className="post-revies-input-container">
                    <label htmlFor="">Enter your name</label>
                    <input className='your-name' type="text" placeholder='Enter your name...' />
                    <label htmlFor="">Enter your review</label>
                    <textarea name="" id="" cols="5" rows="10"></textarea>
                    <div className="rating">
                        <label htmlFor="">Select rating</label>
                        <div className="input-rating-div">
                            <input type="radio" name='rating' />
                            <label htmlFor="">1</label>
                            <input type="radio" name='rating' />
                            <label htmlFor="">2</label>
                            <input type="radio" name='rating' />
                            <label htmlFor="">3</label>
                            <input type="radio" name='rating' />
                            <label htmlFor="">4</label>
                            <input type="radio" name='rating' />
                            <label htmlFor="">5</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="save-first-btn-box logout-from-all">
                <button>Post Review</button>
            </div>
        </>
    )
}

export default PostReview;