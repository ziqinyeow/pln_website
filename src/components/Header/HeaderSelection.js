import classes from './HeaderSelection.module.css'

const HeaderSelection = (props)=>{
    return <div className={classes['selection']}>
        {props.title}
    </div>
}

export default HeaderSelection