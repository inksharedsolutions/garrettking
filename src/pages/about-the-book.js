import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-mock-up-min.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'brogar-maximus',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | Brogar Maximus"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Something to live for, Something to die for`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                        <p>
                                        Poetry and short stories are the makeup of this insightful book; the goal of the author is to inspire and cause the reader to think upon the stories that were read and decide how he/she would have taken action if standing in the shoes of each character in this book. The short stories focus on individuals creating a positive outcome from a negative beginning while the twenty-plus poems are full of love and humor.
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/something-to-live-for-something-to-die-for/',
                                    barnes: 'https://www.barnesandnoble.com/w/something-to-live-for-something-to-die-for-brogar-maximus/1137482167?ean=9781648951473',
                                    amazon: 'https://www.amazon.com/Something-Live-Die-Brogar-Maximus-ebook/dp/B08FVMMJ2M/ref=sr_1_1?dchild=1&keywords=9781648951473&qid=1609126745&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Something-Live-Die-Brogar-Maximus/dp/1648951465/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1609126805&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/something-to-live-for-something-to-die-for-brogar-maximus/1137482167?ean=9781648951466',
                                    booksamillion: 'https://www.booksamillion.com/p/Something-Live-Die/Brogar-Maximus/9781648951466?id=8049069540563&_ga=2.145377533.830577144.1609126749-2145380449.1604906972',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;