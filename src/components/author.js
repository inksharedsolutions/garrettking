import React from 'react'
import AuthorImg from '../../static/author/author-profile.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        My given birth name is Garrett Shundell Lee King Jr., I was born at Truman Medical Center in Kansas City in June of ‘79. I attended K.B. Richard Elementary School; Oak Grove Elementary; King Middle School; Westport Middle and Westport High School.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Brogar </span>
                            <span>Maximus</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;