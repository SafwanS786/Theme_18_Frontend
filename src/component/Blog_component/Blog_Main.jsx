import React from "react";
import "../../Styles/Blog_Style/Blog_Main.css";
import Blog_img from "../Blog_component/img/Blog_Image.png";
import blog1_img from "../Blog_component/img/Transformative.png";
import blog2_img from "../Blog_component/img/image.png";
import blog3_img from "../Blog_component/img/Top.png";
import { Link } from "react-router-dom";
export default function Blog_Main() {
  return (
    <>
      <div className="blog_img" style={{ backgroundImage: `url(${Blog_img})` }}>
        <h1 id="blog_hd">Blog</h1>
        <p id="blog_p">Home/Blog</p>
      </div>
      <div className="container blog">
        <div className="news_img">
          <div className="Transformative_Approaches">
            <img src={blog1_img} alt="Transformative" />
            <div className="content_news">
              <p>Transformative Approaches in</p>
              <hr id="h" />
              <p id="state">
                Our team brings decades of experience across commercial and
                residential projects.
              </p>
              <Link className="explore" to="/blog/details">
                Read More <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="Modern">
            <img src={blog2_img} />
            <div className="content_news">
              <p>Modern Construction Techniques</p>
              <hr id="h" />
              <p id="state">
                Our team brings decades of experience across commercial and
                residential projects.
              </p>
              <Link className="explore" to="/blog/details">
                Read More <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="top">
            <img src={blog3_img} />
            <div className="content_news">
              <p>Modern Construction Techniques</p>
              <hr id="h" />
              <p id="state">
                Our team brings decades of experience across commercial and
                residential projects.
              </p>
              <Link className="explore" to="/blog/details">
                Read More <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="blog2">
          <div className="news_img">
            <div className="Transformative_Approaches">
              <img src={blog1_img} alt="Transformative" />
              <div className="content_news">
                <p>Transformative Approaches in</p>
                <hr id="h" />
                <p id="state">
                  Our team brings decades of experience across commercial and
                  residential projects.
                </p>
                <Link className="explore" to="/blog/details">
                  Read More <span className="arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="Modern">
              <img src={blog2_img} />
              <div className="content_news">
                <p>Modern Construction Techniques</p>
                <hr id="h" />
                <p id="state">
                  Our team brings decades of experience across commercial and
                  residential projects.
                </p>
                <Link className="explore" to="/blog/details">
                  Read More <span className="arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="top">
              <img src={blog3_img} />
              <div className="content_news">
                <p>Modern Construction Techniques</p>
                <hr id="h" />
                <p id="state">
                  Our team brings decades of experience across commercial and
                  residential projects.
                </p>
                <Link className="explore" to="/blog/details">
                  Read More <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/* This was Blog Code  <div className="container Blog_Main_Class">
        <div className="Transformative_Approaches">
          <img src={blog1_img} alt="Blog 1" className="blog_post_img" />
          <h3 className="blog_post_title">
            Transformative Approaches in Construction
          </h3>
          <p className="blog_post_date">April 24, 2025</p>
          <p className="blog_post_desc">
            Our team brings decades of experience across commercial and
            residential projects.
          </p>
          <a href="#" className="read_more_link">
            Read More →
          </a>
        </div>
        <div className="blog_post">
          <img src={blog2_img} alt="Blog 2" className="blog_post_img" />
          <h3 className="blog_post_title">Modern Construction Techniques</h3>
          <p className="blog_post_date">April 24, 2025</p>
          <p className="blog_post_desc">
            Our team brings decades of experience across commercial and
            residential projects.
          </p>
          <a href="#" className="read_more_link">
            Read More →
          </a>
        </div>
        <div className="blog_post">
          <img src={blog3_img} alt="Blog 3" className="blog_post_img" />
          <h3 className="blog_post_title">Top Design Trends in Construction</h3>
          <p className="blog_post_date">April 24, 2025</p>
          <p className="blog_post_desc">
            Our team brings decades of experience across commercial and
            residential projects.
          </p>
          <a href="#" className="read_more_link">
            Read More →
          </a>
        </div>
      </div>*/
