import moment from "moment";
import { useEffect, useState } from "react";
import { loadBlog } from "../../../../controller/blog.controller";
import { BlogAudioDTO } from "../../../../dto/Blog.dto";
import { getParam } from "../../../../utils";
import HomePageFooter from "../footer";
import Layout from "../layout";

export default function BlogDetail() {
    const blogData: BlogAudioDTO = new BlogAudioDTO();

    const [item, setItem] = useState(blogData);
    const [idParam, setIdParam] = useState(0);
    
    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = () => {
        const id = getParam("id");
        if (!id) {
            window.location.href = "/admin/";
        }
        else {
            loadBlog(setItem, parseInt(id));
            setIdParam(parseInt(id));
        }
    }
    
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
                                <img className="blog_img" src={item.image} alt="Blog Image" />
                                <span className="content_date"><h5>{moment(item?.date).format("DD.MM.yyyy")}</h5></span>
                            </div>
                            <div className="blogpost_content">
                                <div className="blogpost_title">
                                    <h3 className="section_title">{item.title}</h3>
                                    <p><span className="small_text">By {item.by}</span></p>
                                </div>
                                <p className="paragraph">
                                    {item.description}
                                </p>
                                <div className="blogpost_img">
                                    {
                                        item.blogImages && item.blogImages.length > 0 ? item.blogImages.map((x,i) => {
                                            return (
                                                <div key={i} className="img_col">
                                                    <img src={x.imageUrl} alt="" style={{maxWidth: 450, maxHeight: 250}}/>
                                                </div>
                                            );
                                        }) : undefined
                                    }
                                </div>

                                {/* <!-- TAGS --> */}
                                <div className="tags">
                                    <h4>TAGS:</h4> 
                                    {
                                        item.tags && item.tags.length > 0 ? item.tags.map((x, i) => {
                                            return  (
                                                <p key={i}>
                                                    <span>{x}</span>
                                                </p>
                                            );
                                        }) : undefined
                                    }
                                </div>
                            </div>
                            <div className="content_publisher">
                                <img src="/images/ken 2.png" alt="Pastor Ken"/>
                                <div className="publisher_info">
                                    <h4>{item.by}</h4>
                                    <p className="grey_text">
                                        {item.aboutAuthor}
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
                                    {/* <div className="signature">
                                        <img src="images/ksign.png" alt=" Pastor Ken signature"/>
                                    </div> */}
                                </div>
                                <div className="author_bio">
                                    <h4>About Author</h4>
                                    <p className="grey_text">
                                        {item.aboutAuthor}
                                    </p>
                                </div>
                            </div>
                            
                            {/* <!-- Side Container --> */}
                            <div className="side_containers">
                                <h4>Category</h4>
                                <ul>
                                    <li><span>{item.blogCategory}</span></li>
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