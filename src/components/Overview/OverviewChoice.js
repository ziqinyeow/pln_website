import classes from './OverviewChoice.module.css'

const OverviewChoice = (props)=>{
    return <div className={classes['container']}>
        {props.icon&&<img src={props.icon} alt="" className={classes['icon']}/>}
        <div className={classes['description']}>
        {props.des}
        </div>
    </div>
}

export default OverviewChoice