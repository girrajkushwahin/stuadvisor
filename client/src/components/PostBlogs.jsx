import React from 'react'

const PostBlogs = () => {
    return (
        <>
            <div className="post-blog-container">
                <h1><span>P</span>ost <span>B</span>logs</h1>
                <div className="post-blog-content-container">
                    <label htmlFor="">Enter blog title</label>
                    <input type="text" placeholder='Enter blog title here...' />
                    <div className="category-radio-container">
                        <label htmlFor="">Category : </label>
                        <input type="radio" name="blogcategory" />
                        <label htmlFor="">Education</label>
                        <input type="radio" name="blogcategory" />
                        <label htmlFor="">Other</label>
                    </div>
                    <div className="tag-button-container">
                        <button>Add heading</button>
                        <button>Add subheading</button>
                        <button>Add paragraph</button>
                    </div>
                    <textarea name="" id="" cols="100" rows="10"></textarea>
                    <button>done</button>
                    <hr />

                    <h1><span>P</span>review</h1>
                    <div className="blog-preview-container">
                        <div className="tags-div">
                            <h1>What is react</h1>
                            <button>edit</button>
                        </div>
                        <div className="tags-div">
                            <h3>Types of component in react</h3>
                            <button>edit</button>
                        </div>
                        <div className="tags-div">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit necessitatibus quos possimus illum magnam fugit nihil ducimus error earum culpa quaerat adipisci saepe atque eos quas ipsum harum, cupiditate ad sequi numquam consequuntur deserunt dolorum veritatis! Facilis fuga ipsa, fugiat consectetur cupiditate dolore non quasi temporibus, libero voluptate aspernatur. Soluta.</p>
                            <button>edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostBlogs;