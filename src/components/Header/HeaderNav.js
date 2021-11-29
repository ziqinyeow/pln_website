import classes from "./HeaderNav.module.css"
import HeaderSelection from "./HeaderSelection"
import logo from '../../static/pln_logo&title.png'

const DUMMYSELECTION = [
    {
        title:'About Us'
    },
    {
        title:'Overview'
    },
    {
        title:'FAQ'
    },
    {
        title:'Sponsors'
    },
    {
        title:'Results'
    }
]
const HeaderNav = ()=>{
    return <header className={classes['container']}>
        <div className={classes['align']}>
            <img src={logo} alt="logo" className={classes['theme']}/>
            <div className={classes['nav_select']}>
                {DUMMYSELECTION.map((obj)=>{
                    return <HeaderSelection title={obj.title} key={obj.title}/>
                })}
            </div>
        </div>
    </header>
}

export default HeaderNav