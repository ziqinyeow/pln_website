import classes from "./App.module.css"
import HeaderNav from "./components/Header/HeaderNav";
import homepage from './static/homepage.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from './static/pln_logo&title.png'
import wave from './static/about-us-wave.png'
import Overview from "./components/Overview/Overview";


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
        {/* todo */}
      </div>
    </>
  );
}

export default App;
