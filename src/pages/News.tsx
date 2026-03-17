import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "New School Building Opens in Kinigi",
      excerpt: "Faith Foundation Rwanda celebrates the opening of a new educational facility serving over 200 children in the Kinigi community.",
      author: "Faith Foundation Team",
      comments: 12,
      category: "Education",
      image: "/images/blog/one.png",
      date: "November 25, 2024"
    },
    {
      id: 2,
      title: "Women's Empowerment Program Success",
      excerpt: "Our skills training program has helped 150 women gain financial independence through vocational training in Kinigi.",
      author: "Faith Foundation Team", 
      comments: 8,
      category: "Empowerment",
      image: "/images/blog/two.png",
      date: "November 22, 2024"
    },
    {
      id: 3,
      title: "Healthcare Initiative Reaches Remote Areas",
      excerpt: "Mobile health clinics now providing essential medical care to vulnerable children and families in rural Rwanda.",
      author: "Faith Foundation Team",
      comments: 15,
      category: "Health",
      image: "/images/blog/three.png",
      date: "November 20, 2024"
    },
    {
      id: 4,
      title: "Child Sponsorship Program Expands",
      excerpt: "Thanks to our generous donors, we've expanded our child sponsorship program to support 50 additional children.",
      author: "Faith Foundation Team",
      comments: 6,
      category: "Sponsorship",
      image: "/images/blog/one.png",
      date: "November 18, 2024"
    },
    {
      id: 5,
      title: "Community Garden Project Launch",
      excerpt: "New sustainable agriculture project teaching families valuable farming skills while providing nutritious food.",
      author: "Faith Foundation Team",
      comments: 9,
      category: "Food Security",
      image: "/images/blog/two.png",
      date: "November 15, 2024"
    },
    {
      id: 6,
      title: "Clean Water Access for 500 Families",
      excerpt: "Recent water project completion brings clean, safe drinking water to communities in need throughout Kinigi.",
      author: "Faith Foundation Team",
      comments: 11,
      category: "Health",
      image: "/images/blog/three.png",
      date: "November 12, 2024"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Where Innovation Meets Foundation",
      image: "/images/blog/ph-one.png",
      date: "November 25, 2024"
    },
    {
      id: 2,
      title: "Structures That Stand, Dreams That Soar",
      image: "/images/blog/ph-two.png", 
      date: "November 22, 2024"
    },
    {
      id: 3,
      title: "Empowering Communities Through Education",
      image: "/images/blog/three.png",
      date: "November 20, 2024"
    }
  ];

  const categories = [
    { name: "Education", count: 12 },
    { name: "Health", count: 8 },
    { name: "Empowerment", count: 6 },
    { name: "Sponsorship", count: 9 },
    { name: "Food Security", count: 4 }
  ];

  return (
<div>
      <section className="common-banner">
         <div className="container">
            <div className="row">
               <div className="common-banner__content text-center">
                  <span className="sub-title"><i className="icon-donation"></i>Faith Foundation Updates</span>
                  <h2 className="title-animation">Latest News & Stories</h2>
               </div>
            </div>
         </div>
         <div className="banner-bg">
            <img src="/images/banner/banner-bg.png" alt="Image" />
         </div>
         <div className="shape">
            <img src="/images/shape.png" alt="Image" />
         </div>
         <div className="sprade" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/images/sprade-base.png" alt="Image" className="base-img" />
         </div>
      </section>

      <section className="blog-main blog cm-details">
         <div className="container">
            <div className="row gutter-60">
               <div className="col-12 col-xl-8">
                  <div className="row gutter-30">
                     {newsItems.map((item, index) => (
                        <div key={item.id} className="col-12 col-lg-6">
                           <div className="blog__single-wrapper" data-aos="fade-up" data-aos-duration="1000" 
                              data-aos-delay={index % 3 === 1 ? "300" : index % 3 === 2 ? "600" : ""}>
                              <div className="blog__single van-tilt">
                                 <div className="blog__single-thumb">
                                    <a href="/blog-details">
                                       <img src={item.image} alt={item.title} />
                                    </a>
                                    <div className="tag">
                                       <a href="/news"><i className="fa-solid fa-tags"></i>{item.category}</a>
                                    </div>
                                 </div>
                                 <div className="blog__single-inner">
                                    <div className="blog__single-meta">
                                       <p><i className="icon-user"></i>{item.author}</p>
                                       <p><i className="icon-message"></i>Comments ({item.comments})</p>
                                    </div>
                                    <div className="blog__single-content">
                                       <h5><a href="/blog-details">{item.title}</a></h5>
                                    </div>
                                    <div className="blog__single-cta">
                                       <a href="/blog-details" aria-label="blog details" title="blog details">Read
                                          More<i className="fa-solid fa-circle-arrow-right"></i></a>
                                    </div>
                                 </div>
                                 <img src="/images/blog/spade.png" alt="Image" className="spade-two" />
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <div className="pagination-wrapper" data-aos="fade-up" data-aos-duration="1000">
                           <ul className="pagination main-pagination">
                              <li>
                                 <button>
                                    <i className="fa-solid fa-angles-left"></i>
                                 </button>
                              </li>
                              <li>
                                 <a href="/news">1</a>
                              </li>
                              <li>
                                 <a href="/news" className="active">2</a>
                              </li>
                              <li>
                                 <a href="/news">3</a>
                              </li>
                              <li>
                                 <button>
                                    <i className="fa-solid fa-angles-right"></i>
                                 </button>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-xl-4">
                  <div className="blog-main__sidebar">
                     <div className="cm-details__sidebar">
                        <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                           <div className="intro">
                              <h5>Search News</h5>
                           </div>
                           <form action="#" method="post">
                              <input type="text" name="search-product" id="searchProduct" placeholder="Search News..."
                                 required />
                              <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                           </form>
                        </div>
                        <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                           <div className="intro">
                              <h5>Recent Posts</h5>
                           </div>
                           <div className="cm-sidebar-post">
                              {recentPosts.map(post => (
                                <div key={post.id} className="single-item">
                                   <div className="thumb">
                                      <a href="/blog-details">
                                         <img src={post.image} alt={post.title} />
                                      </a>
                                   </div>
                                   <div className="content">
                                      <p><i className="fa-solid fa-calendar-days"></i> <span>{post.date}</span>
                                      </p>
                                      <p><a href="/blog-details">{post.title}</a>
                                      </p>
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>
                        <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                           <div className="intro">
                              <h5>Categories</h5>
                           </div>
                           <div className="cm-categories">
                              {categories.map(category => (
                                <a key={category.name} href="/news">
                                   <span>{category.name}</span>
                                   <span>{category.count.toString().padStart(2, '0')}</span>
                                </a>
                              ))}
                           </div>
                        </div>
                        <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                           <div className="intro">
                              <h5>Popular Tags</h5>
                           </div>
                           <div className="tag-wrapper">
                              <a href="/news">Education</a>
                              <a href="/news">Healthcare</a>
                              <a href="/news">Empowerment</a>
                              <a href="/news">Rwanda</a>
                              <a href="/news">Children</a>
                              <a href="/news">Community</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</div>
  );
};

export default News;
