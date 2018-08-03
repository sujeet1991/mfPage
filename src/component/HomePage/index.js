import React ,{Component} from 'react';
import './mfland_page.css';
import hdfclogo from '../../assets/images/hdfc_logo.jpg';
import rating from '../../assets/images/rating.jpg';


class Home extends Component{
    
     tabClick(evt){
        
    
   }
    render(){
      
        return(
            <div className="man-wrapper">
                <section className="container-fluid hero-a-banner abc-hero">
        <div className="section_container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero_content">
                <h1 className="scnd-txt">
                  Have you figured out your financial goals?
                </h1>
                <a className="btn btn-primary btn-default thrd-btn" href="">GET STARTED
                  <span className="start_icon" />
                </a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_gray pad_section clearfix">
        <div className="section_container text-center">
          <h6 className="heading_small">How would you like to Invest?</h6>
          <h2 className="heading_h2_big">Choose from Goal Based or Solution Based Investing</h2>
          <div className="solution_features">
            <div className="col-md-6 col-xs-12 pad-25">
              <div className="solfeat_col clearfix mob-pad-btm">
                <figure className="goalimage">
                  <figcaption className="red_col_bg">
                    <span>Goal Based Investing</span>
                    <span className="next_icon"><a href="#" /></span>
                  </figcaption>
                </figure>
                <figcaption className="goal_copy text-center">Find a fund that suits your financial goals - be it retirement, major purchases or simply wealth building.</figcaption>
                <div className="goallist">
                  <ul>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Marriage</a></li>
                    <li><a href="#">Wealth</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Retirement</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 pad-25">
              <div className="solfeat_col clearfix ">
                <figure className="solgoalimage">
                  <figcaption className="red_col_bg">
                    Solution Based Investing
                    <span className="next_icon"><a href="#" /></span>
                  </figcaption>
                </figure>
                <figcaption className="goal_copy text-center">Explore a wide range of investing solutions that best
                  suit your investment requirements. </figcaption>
                <div className="goallist">
                  <ul>
                    <li><a href="#">Wealth</a></li>
                    <li><a href="#">Income</a></li>
                    <li><a href="#">Savings</a></li>
                    <li><a href="#">Gold</a></li>
                    <li><a href="#">Tax Savings</a></li>
                    <li><a href="#">SIP with Insurance</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_section">
        <div className="section_container text-center">
          <h6 className="heading_small">How would you like to Invest?</h6>
          <h2 className="heading_h2_big">Choose from Goal Based or Solution Based Investing</h2>
          <div className="hybrid_funds">
            <ul className="hybrid_funds_list nav nav-tabs">
              <li className="active"><a data-toggle="tab" className="sujeet"  onClick={this.tabClick}>EQUITY</a></li>
              <li><a data-toggle="tab" className="sujeet"  onClick={this.tabClick}>DEBT</a></li>
              <li><a data-toggle="tab" className="sujeet"  onClick={this.tabClick}>LIQUID</a></li>
              <li><a data-toggle="tab" className="sujeet"  onClick={this.tabClick}>GOLD</a></li>
            </ul>
          </div>
          <div className="funds_tabs text-center">
            <div className="mob_funds_tabflex">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#Large-Cap">Large-Cap</a></li>
                <li><a data-toggle="tab" href="#menu1">Large &amp; Mid-Cap</a></li>
                <li><a data-toggle="tab" href="#menu2">Mid-Cap</a></li>
                <li><a data-toggle="tab" href="#menu3">Small-Cap</a></li>
                <li><a data-toggle="tab" href="#menu3">ELSS (Tax Savings)</a></li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="Large-Cap" className="tab-pane fade in active">
                <ul className="fund_list_dtails">
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating} />
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating} />
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                </ul>					 	
              </div>
              <div id="menu1" className="tab-pane fade">
                <ul className="fund_list_dtails">
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating} />
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating} />
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                </ul>		
              </div>
              <div id="menu2" className="tab-pane fade">
                <ul className="fund_list_dtails">
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating} />
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating} />
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                </ul>		
              </div>
              <div id="menu3" className="tab-pane fade">
                <ul className="fund_list_dtails">
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating}/>
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="fund_logo">
                        <img src={hdfclogo} />
                      </div>
                      <div>
                        <p className="fund_name">HDFC Mid Cap</p>
                        <p>
                          <img src={rating} />
                        </p>
                        <div className="fund_return">
                          <span className="return_head">Returns (%)</span>		 					
                          <div className="return_number">
                            <p className="return_num_dtl">1 yr<br /><span>5.0</span></p>
                            <p className="return_num_dtl">3 yr<br /><span>15.0</span></p>
                            <p className="return_num_dtl">5 yr<br /><span>22.4</span></p>
                          </div>
                        </div>
                      </div>
                      <span className="next_icon" />
                    </a>
                  </li>
                </ul>		
              </div>
            </div>
            <a href="#" className="btn-outline-brws">Browse all Mutual Funds <span className="brws_icon" /></a>
          </div>
        </div>
      </section>      

      <section className="sec-feature">
        <div className="section_container">
          <div className="col-md-12 text-center">
            <h6 className="heading_small">Why chose Aditya Birla MyUniverse for investment management?</h6>
            <h2 className="heading_h2_big">Features that make a difference</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="feature-ul">
                <li>
                  <div className="col-full clearfix">
                    <div className="col-img">
                      <div className="men-bg back-css" />
                    </div>
                    <div className="col-desc">
                      <h2>Paperless Investment Account</h2>
                      <p>Get your eKYC verified for free when you open a paperless investment account</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="col-full clearfix">
                    <div className="col-img">
                      <div className="mobile-bg back-css" />
                    </div>
                    <div className="col-desc">
                      <h2>Invest &amp; Track on the go</h2>
                      <p>Securely invest, track and manage your wealth using the MyUniverse app.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="col-full clearfix">
                    <div className="col-img">
                      <div className="cusport-bg back-css" />
                    </div>
                    <div className="col-desc">
                      <h2>Customized Portfolio</h2>
                      <p>Follow our expert portfolios or build your own from scratch. </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="col-full clearfix">
                    <div className="col-img">
                      <div className="home-bg back-css" />
                    </div>
                    <div className="col-desc">
                      <h2>Wide range of AMCs</h2>
                      <p>Invest in mutual funds from leading AMCs through one platform</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="col-full clearfix">
                    <div className="col-img">
                      <div className="cal-bell-bg back-css" />
                    </div>
                    <div className="col-desc">
                      <h2>Alerts for Timely Actions</h2>
                      <p>Get notified about monthly payment schedules for your SIPs</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="col-full clearfix">
                    <div className="col-img">
                      <div className="hand-bg back-css" />
                    </div>
                    <div className="col-desc">
                      <h2>Withdraw in a Click</h2>
                      <p>Withdraw your wealth anytime, anywhere.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
             </div>//end main wrapper
        )
    }
}

export default Home;