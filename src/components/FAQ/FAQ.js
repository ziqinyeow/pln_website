import classes from './FAQ.module.css'
import FAQChoice from './FAQChoice'

const DUMMY_FAQ = [
    {
        question:'How much does the registration fee cost?'
    },
    {
        question:'What programming language are we allowed to use?'
    },
    {
        question:'How many rounds are there in total?'
    }
]
const FAQ = ()=>{
    return <div className={classes['container']}>
        <div className={classes['title']}>FAQ</div>
        <div className={classes['control']}>
            {DUMMY_FAQ.map((obj)=><FAQChoice ques={obj.question}/>)}
        </div>
        <div className={classes['ask']}>Have any questions? Send your emai to pln2021@gmail.com</div>
    </div>
}

export default FAQ