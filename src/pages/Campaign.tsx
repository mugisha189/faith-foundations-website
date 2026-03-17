import React from 'react';

const Campaign: React.FC = () => {
  const causes = [
    {
      id: 1,
      title: "Children Education Fund",
      excerpt: "Providing quality education and school supplies to vulnerable children in Kinigi, Rwanda. Your support helps break the cycle of poverty through education.",
      category: "Education",
      image: "/images/cause/one.png",
      raised: 8500,
      goal: 10000,
      percentage: 85
    },
    {
      id: 2,
      title: "Nutrition Program",
      excerpt: "Ensuring children and families have access to nutritious meals and food security. This program provides daily meals to over 300 children.",
      category: "Food",
      image: "/images/cause/two.png", 
      raised: 9000,
      goal: 10000,
      percentage: 90
    },
    {
      id: 3,
      title: "Medical Care Initiative",
      excerpt: "Providing essential healthcare services, medications, and medical check-ups for vulnerable children and women in rural communities.",
      category: "Health",
      image: "/images/cause/three.png",
      raised: 7500,
      goal: 10000,
      percentage: 75
    },
    {
      id: 4,
      title: "Women's Empowerment",
      excerpt: "Skills training and microfinance programs helping women gain economic independence and support their families.",
      category: "Empowerment",
      image: "/images/cause/four.png",
      raised: 6500,
      goal: 10000,
      percentage: 65
    },
    {
      id: 5,
      title: "Clean Water Project",
      excerpt: "Building wells and water purification systems to provide clean, safe drinking water to communities in need.",
      category: "Health",
      image: "/images/cause/one.png",
      raised: 8000,
      goal: 10000,
      percentage: 80
    },
    {
      id: 6,
      title: "Child Sponsorship",
      excerpt: "Sponsor a child's education, healthcare, and basic needs. Make a lasting impact on a child's life and future.",
      category: "Sponsorship",
      image: "/images/cause/two.png",
      raised: 9200,
      goal: 10000,
      percentage: 92
    },
    {
      id: 7,
      title: "Community Development",
      excerpt: "Building community centers and infrastructure to support education, healthcare, and social services in Kinigi.",
      category: "Community",
      image: "/images/cause/three.png",
      raised: 7000,
      goal: 10000,
      percentage: 70
    },
    {
      id: 8,
      title: "Emergency Relief Fund",
      excerpt: "Rapid response emergency assistance for families facing crisis situations, natural disasters, or unexpected hardships.",
      category: "Emergency",
      image: "/images/cause/four.png",
      raised: 5500,
      goal: 10000,
      percentage: 55
    }
  ];

  const sliderCauses = causes.slice(0, 3);

  return (
    <div>
      <section className="common-banner">
        <div className="container">
          <div className="row">
            <div className="common-banner__content text-center">
              <span className="sub-title"><i className="icon-donation"></i>Support Our Mission</span>
              <h2 className="title-animation">Our Causes</h2>
            </div>
          </div>
        </div>
        <div className="banner-bg">
          <img src="/images/banner/banner-bg.png" alt="Image"/>
        </div>
        <div className="shape">
          <img src="/images/shape.png" alt="Image"/>
        </div>
        <div className="sprade" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/images/sprade-base.png" alt="Image" className="base-img" />
        </div>
      </section>

      <section className="cause cause-three-alt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-xl-7">
              <div className="section__header mb-60 text-center" data-aos="fade-up" data-aos-duration="1000">
                <span className="sub-title"><i className="icon-donation"></i>Support Our Mission
                  in Rwanda</span>
                <h2 className="title-animation">Be the reason for
                  <span>smiles</span> in Kinigi
                </h2>
              </div>
            </div>
          </div>
          <div className="row gutter-30">
            {causes.map((cause, index) => (
              <div key={cause.id} className="col-12 col-md-6 col-xl-4 col-xxl-3">
                <div className="cause__slider-inner" data-aos="fade-up" data-aos-duration="1000" 
                  data-aos-delay={index % 4 === 1 ? "300" : index % 4 === 2 ? "600" : index % 4 === 3 ? "900" : ""}>
                  <div className="cause__slider-single van-tilt">
                    <div className="thumb">
                      <a href="/cause-details">
                        <img src={cause.image} alt={cause.title}/>
                      </a>
                      <div className="tag">
                        <a href="/causes">{cause.category}</a>
                      </div>
                    </div>
                    <div className="content">
                      <h6><a href="/cause-details">{cause.title}</a></h6>
                      <p>{cause.excerpt}</p>
                    </div>
                    <div className="cause__slider-cta">
                      <div className="cause__progress progress-bar-single">
                        <div className="cause-progress__intro">
                          <p><span>Donation</span>
                            <span className="percent-value">{cause.percentage}%</span>
                          </p>
                        </div>
                        <div className="cause-progress__bar">
                          <div className="progress-bar-wrapper" data-percent={`${cause.percentage}%`}>
                            <div className="progress-bar">
                              <div className="progress-bar-percent">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cause-progress__goal">
                          <p>Raised: <span className="raised">${cause.raised.toLocaleString()}</span></p>
                          <p>Goal: <span className="goal">${cause.goal.toLocaleString()}</span></p>
                        </div>
                      </div>
                      <div className="cause__cta">
                        <a href="/donate" aria-label="donate now" title="donate now"
                          className="btn--secondary">Donate Now</a>
                      </div>
                    </div>
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
                    <a href="/causes">1</a>
                  </li>
                  <li>
                    <a href="/causes" className="active">2</a>
                  </li>
                  <li>
                    <a href="/causes">3</a>
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
        <div className="spade">
          <img src="/images/help/spade.png" alt="Image"/>
        </div>
      </section>

      <section className="cta-section-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7">
              <div className="cta__section__content">
                <div className="section__content text-center" data-aos="fade-up" data-aos-duration="1000">
                  <span className="sub-title"><i className="icon-donation"></i>Support Our Mission
                    in Rwanda</span>
                  <h2 className="title-animation">Children in Kinigi need your help
                    by donating today
                  </h2>
                  <div className="banner__content-cta cta">
                    <a href="/causes" aria-label="discover causes" title="discover causes"
                      className="btn--tertiary">Discover More <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="/contact-us" aria-label="contact us" title="contact us" className="btn--primary">Contact
                      Us <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-bg">
          <img src="/images/cta/cta-bg.png" alt="Image" className="parallax-image" />
        </div>
        <div className="shape-left" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          <img src="/images/cta/shape-left.png" alt="Image"/>
        </div>
        <div className="shape">
          <img src="/images/shape-two.png" alt="Image"/>
        </div>
      </section>

      <section className="cause cause-three">
        <div className="container">
          <div className="row gutter-30 align-items-center">
            <div className="col-12 col-md-8 col-xl-7">
              <div className="section__header">
                <span className="sub-title"><i className="icon-donation"></i>Support Our Mission
                  in Rwanda</span>
                <h2 className="title-animation">Help & <span>donate</span> to transform
                  lives in Kinigi
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-5">
              <div className="slider-navigation">
                <button type="button" aria-label="prev slide" title="prev slide" className="prev-cause slider-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button type="button" aria-label="next slide" title="next slide"
                  className="next-cause slider-btn slider-btn-next">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="cause__slider-wrapper">
                <div className="cause__slider swiper">
                  <div className="swiper-wrapper">
                    {sliderCauses.map((cause) => (
                      <div key={cause.id} className="swiper-slide">
                        <div className="cause__slider-inner">
                          <div className="cause__slider-single">
                            <div className="thumb">
                              <a href="/cause-details">
                                <img src={cause.image} alt={cause.title}/>
                              </a>
                              <div className="tag">
                                <a href="/causes">{cause.category}</a>
                              </div>
                            </div>
                            <div className="content">
                              <h6><a href="/cause-details">{cause.title}</a></h6>
                              <p>{cause.excerpt}</p>
                            </div>
                            <div className="cause__slider-cta">
                              <div className="cause__progress progress-bar-single">
                                <div className="cause-progress__intro">
                                  <p><span>Donation</span>
                                    <span className="percent-value">{cause.percentage}%</span>
                                  </p>
                                </div>
                                <div className="cause-progress__bar">
                                  <div className="progress-bar-wrapper" data-percent={`${cause.percentage}%`}>
                                    <div className="progress-bar">
                                      <div className="progress-bar-percent">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="cause-progress__goal">
                                  <p>Raised: <span className="raised">${cause.raised.toLocaleString()}</span></p>
                                  <p>Goal: <span className="goal">${cause.goal.toLocaleString()}</span></p>
                                </div>
                              </div>
                              <div className="cause__cta">
                                <a href="/donate" aria-label="donate now" title="donate now"
                                  className="btn--secondary">Donate Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spade">
          <img src="/images/help/spade.png" alt="Image"/>
        </div>
      </section>
    </div>
  );
};

export default Campaign;
                                     