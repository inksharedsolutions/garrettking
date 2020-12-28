import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title="About the Author | Brogar Maximus"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                P is for Pride and Perseverance
                                </h4>
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            My given birth name is Garrett Shundell Lee King Jr., I was born at Truman Medical Center in Kansas City in June of ‘79. I attended K.B. Richard Elementary School; Oak Grove Elementary; King Middle School; Westport Middle and Westport High School. I come from a family of four siblings, I’m the oldest. I had several forms of employment before I decided to started writing, my first job ever was at 17, I worked at a grocery store, Marsh’s Apple Market. I also worked for Burger King; K.C. Convention Center; Cooper’s Hawk Winery & Restaurant; Costco; P.F. Chang’s Bistro; Yard House and Hallmark Cards Inc. This book is my first writing project, I also have three e-books on Amazon. 
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Brogar Maximus</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;