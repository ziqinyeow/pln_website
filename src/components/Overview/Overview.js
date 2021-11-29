import classes from "./Overview.module.css"
import OverviewChoice from "./OverviewChoice"
import icon1 from '../../static/overview/icon1.svg'
import icon2 from '../../static/overview/icon2.svg'
import icon3 from '../../static/overview/icon3.svg'

const DUMMY_Overview = [
    {
        icon:icon1,
        des:"Form a group of 3 and prepare to face the challenges."
    },{
        icon:icon2,
        des:"Complete a series of questions in short period of time"
    },{
        icon:icon3,
        des:"Champion : 1st Runner Up : 2nd Runner Up :"
    },
]
const Overview = ()=> {
    return <div className={classes['container']}>
        <div className={classes['title']}>OVERVIEW</div>
        <div className={classes['overview_box']}>
            {DUMMY_Overview.map((obj)=>{
                return <OverviewChoice icon={obj.icon} des={obj.des}/>
            })}
            
        </div>
    </div>
}

export default Overview