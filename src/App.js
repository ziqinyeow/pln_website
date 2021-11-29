import classes from "./App.module.css"
import HeaderNav from "./components/Header/HeaderNav";
import homepage from './static/homepage.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from './static/pln_logo&title.png'
import wave from './static/about-us-wave.png'
import Overview from "./components/Overview/Overview";
import FAQ from "./components/FAQ/FAQ";
import Sponsor from "./components/Sponsor/Sponsor";
import instagram from "./static/UI/instagram.svg"
import facebook from "./static/UI/facebook.svg"
import google from "./static/UI/google.svg"

function App() {
  return (
    <>
      <div className={classes['home']}>
        <HeaderNav></HeaderNav>
        <div className={classes['control_screen']}>
          <div className={classes['align_home']}>
            <div className={classes['left_home']}>
              <div className={classes['title']}>Programming League</div>
              <div className={classes['title']}>National 2021</div>
              <button className={classes['register']}>
                Register
                <ArrowForwardIcon className={classes['register_arrow']}></ArrowForwardIcon>
              </button>
            </div>
            <div>
              {homepage&&<img src={homepage} alt="homepage" className={classes['homepage']}></img>}
            </div>
          </div>
        </div>
        <div className={classes['aboutus_background']}>
          <div className={classes['control_screen']}>
            <div className={classes['aboutus_title']}>ABOUT US</div>
            <div className={classes['align_aboutus']}>
              <div className={classes['abt_left']}>
                <div>
                  Programming League National is an annual competitive programming contest organised by the Faculty of Computer Science and Information Technology, University of Malaya where teams of 3 compete to solve algorithmic problems. 
                </div>
                <div>
                  For the past few years, it had been a university-wide competition. In 2021, we are ramping it up by assembling students from all universities across Malaysia to compete among the best in the field!
                </div>
                <div>
                  We aim to host the most colossal, eminent and pioneering programming contest of all time and ultimately, uphold Malaysia’s programming standards.
                </div>
              </div>
              <img src={logo} alt="logo" className={classes['abt_right']}/>
            </div>
          </div>
          <img src={wave} alt="wave" style={{width:'100%',position:'absolute',bottom:0}}/>
        </div>
        <Overview/>
        <FAQ/>
        <Sponsor/>
        <div className={classes['footer']}>
          <div className={classes['control-footer']}>
            <div className={classes['logo-list']}>
              <img src={instagram} alt="" className={classes['org-info']}></img>
              <img src={facebook} alt="" className={classes['org-info']}></img>
              <img src={google} alt="" className={classes['org-info']}></img>
            </div>
            <div className={classes['copywrite']}>Copyright © 2021 Programming League National. All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
