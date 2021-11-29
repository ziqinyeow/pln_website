import classes from './FAQChoice.module.css'
import plus from '../../static/UI/plus.svg'

const FAQChoice = (props)=>{
    return <div className={classes['choice-container']}>
        <div className={classes['text']}>{props.ques}</div>
        <img src={plus} alt=""></img>
    </div>
}

export default FAQChoice