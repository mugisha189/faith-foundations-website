import React from 'react';

const Terms: React.FC = () => {
  return (
    <div>
      <section className="common-banner">
         <div className="container">
            <div className="row">
               <div className="common-banner__content text-center">
                  <span className="sub-title"><i className="icon-donation"></i>Legal Information</span>
                  <h2 className="title-animation">Terms & Conditions</h2>
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

      <section className="privacy">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="privacy-group" data-aos="fade-up" data-aos-duration="1200">
                     <h3 className="title-animation">About Faith Foundation Rwanda</h3>
                     <p>Faith Foundation Rwanda is a registered non-profit organization operating in Kinigi, Rwanda since 2012. 
                        We are dedicated to empowering vulnerable children and women through education, child sponsorship, 
                        and community development initiatives. By using our website and services, you agree to these terms 
                        and conditions.</p>
                  </div>
                  <div className="privacy-group" data-aos="fade-up" data-aos-duration="1200">
                     <h3 className="title-animation">Donation Terms</h3>
                     <p>All donations made to Faith Foundation Rwanda are voluntary and non-refundable. 
                        We are committed to transparency in how funds are used to support our mission. 
                        Donations may be designated to specific programs or used where needed most.</p>
                     <p>We ensure that 85% of all donations go directly to program services, with 15% covering 
                        administrative costs to maintain our operations and ensure accountability.</p>
                  </div>
                  <div className="privacy-group" data-aos="fade-up" data-aos-duration="1200">
                     <h3 className="title-animation">Child Sponsorship Program</h3>
                     <p>Our child sponsorship program connects donors with specific children in our care. 
                        Sponsors receive regular updates about their sponsored child's progress and development. 
                        Sponsorship commitments are typically monthly and can be discontinued with 30 days notice.</p>
                     <p>We maintain strict privacy policies to protect the dignity and safety of all children 
                        in our programs. Photos and personal information are shared only with appropriate consent 
                        and security measures.</p>
                  </div>
                  <div className="privacy-group" data-aos="fade-up" data-aos-duration="1200">
                     <h3 className="title-animation">Website Usage and Privacy</h3>
                     <p>Our website is provided for informational purposes and to facilitate donations and program participation. 
                        Users must be at least 18 years old to make donations or 13 years old to use our website with parental consent.</p>
                     <p>We collect personal information necessary to process donations and provide program updates. 
                        This information is protected according to our Privacy Policy and is never sold or shared with third parties 
                        without explicit consent, except as required by law.</p>
                  </div>
                  <div className="privacy-group" data-aos="fade-up" data-aos-duration="1200">
                     <h3 className="title-animation">Program Participation</h3>
                     <p>Participation in our community development programs may require additional agreements and background checks 
                        to ensure the safety and well-being of our beneficiaries. All volunteers and program participants must adhere 
                        to our code of conduct and child protection policies.</p>
                     <p>Faith Foundation Rwanda reserves the right to refuse participation or terminate involvement 
                        in programs if it conflicts with our mission, values, or the safety of our community members.</p>
                  </div>
                  <div className="privacy-group" data-aos="fade-up" data-aos-duration="1200">
                     <h3 className="title-animation">Limitation of Liability</h3>
                     <p>While we strive to provide accurate information and reliable services, Faith Foundation Rwanda is not liable 
                        for any indirect, incidental, or consequential damages arising from the use of our website or participation 
                        in our programs.</p>
                     <p>Our programs operate in challenging environments, and circumstances beyond our control may affect program delivery. 
                        We commit to transparency about any significant changes to program activities or use of funds.</p>
                  </div>
                  <div className="privacy-group" data-aos="fade-up" data-aos-duration="1200">
                     <h3 className="title-animation">Contact Information</h3>
                     <p>For questions about these terms and conditions or our programs, please contact us:</p>
                     <p><strong>Email:</strong> info@faithfoundation.rw<br />
                     <strong>Phone:</strong> +250 (contact number)<br />
                     <strong>Address:</strong> Kinigi, Rwanda</p>
                     <p>These terms and conditions were last updated and are effective as of the date of publication on our website.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Terms;
