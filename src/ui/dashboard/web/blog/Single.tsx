import HomePageFooter from "../footer";
import Layout from "../layout";

export default function BlogDetail() {
    return (
        <div>
            <Layout
                externalStyles={["/styles/css/style.css"]}
                navbar={"web"}
                title="Blog"
                withFooter={false} 
                withSideBar={false}
            >
                {/* <BlogBanner /> */}
                <div className="main_container">
                    <div className="section_head">
                        <div className="title_head">
                        <h4><span>Blog Page</span></h4>
                        <div className="ellipse"></div>
                        <h4>Podcast</h4>
                        </div>
                        <div className="section_img"><i className="fa fa-list-ul" aria-hidden="true"></i></div>
                    </div>

                    <section className="blog_grid">
                        <article className="blog_article">
                            <div className="blogpost_col">
                                <img className="blog_img" src="/images/pexels-anna-shvets.png" alt="Blog Image" />
                                <span className="content_date"><h5>19.11.2021</h5></span>
                            </div>
                            <div className="blogpost_content">
                                <div className="blogpost_title">
                                    <h3 className="section_title">Easter Sunday</h3>
                                    <p><span className="small_text">By Pastor ken</span></p>
                                </div>
                                <p className="paragraph">
                                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                    velit esse. Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut 
                                    aliquip ex ea commodo consequat. <br/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <blockquote>
                                    “ Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim”
                                </blockquote>
                                <p className="paragraph">
                                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="blogpost_img">
                                    <div className="img_col"><img src="/images/pexels-cottonbro-3972000.png" alt=""/></div>
                                    <div className="img_col"><img src="/images/pexels-cottonbro-3972178.png" alt=""/></div>
                                </div>
                                <p className="paragraph">
                                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamo laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                {/* <!-- TAGS --> */}
                                <div className="tags">
                                    <h4>TAGS:</h4> <p><span>Congratulations</span></p>
                                </div>
                            </div>
                            <div className="content_publisher">
                                <img src="/images/ken 2.png" alt="Pastor Ken"/>
                                <div className="publisher_info">
                                    <h4>Pastor Ken</h4>
                                    <p className="grey_text">
                                        Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis. 
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Next and Previous Buttons --> */}
                            <div className="pages_btn">
                                <a href="#" className="previous"><h5>Previous Page</h5></a>
                                <a href="#" className="next"><h5>Next Page</h5></a>
                            </div>
                        </article>


                        {/* <!-- SIDEBAR --> */}
                        <aside className="sidebar">
                            <div className="search_bar">
                                <label className="search_icon"><i className="fa fa-search" aria-hidden="true"></i></label>
                                <input type="text" placeholder="Search service" id="search"/>
                            </div>
                            <div className="about_author">
                                <div className="author_col">
                                    <img src="/images/ken 2.png" alt="Pastor Ken"/>
                                    <div className="signature"><img src="images/ksign.png" alt=" Pastor Ken signature"/></div>
                                </div>
                                <div className="author_bio">
                                    <h4>About Author</h4>
                                    <p className="grey_text">
                                        Dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis.
                                    </p>
                                </div>
                            </div>
                            
                            {/* <!-- Side Container --> */}
                            <div className="side_containers">
                                <h4>Category</h4>
                                <ul>
                                    <li><span>Sunday Sermon</span></li>
                                    <li><span>Bible Quotes</span></li>
                                    <li><span>Daily devotion</span></li>
                                    <li><span>Inspirations</span></li>
                                </ul>
                            </div>

                            <div className="side_containers">
                                <h4>Latest Post</h4>
                                <ul>
                                    <li><span>18. 11. 2021</span></li>
                                    <label>The Faith In christ</label>
                                    <li><span>18. 11. 2021</span></li>
                                    <label>Prayer the key</label>
                                    <li><span>18. 11. 2021</span></li>
                                    <label>MyTime Is Now</label>
                                </ul>
                            </div>
                            
                            <div className="side_containers">
                                <h4>Tags</h4>
                                <span>
                                    Church.  Faith. Prayer. Celebrations. christ. Gods word
                                </span>
                            </div>
                        </aside>
                    </section>
                    <HomePageFooter />
                </div>
            </Layout>
            
        </div>
    );
}