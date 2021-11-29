import classes from "./App.module.css"
import HeaderNav from "./components/Header/HeaderNav";
import homepage from './static/homepage.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      </div>
    </>
  );
}

export default App;
