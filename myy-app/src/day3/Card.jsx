import styles from './card.module.css';

function Card(props){

    const {date, title,des,logo} = props;

    return(
        <div className={styles.parent}>
            <div>
                <h4>{date}</h4>
                <div style={{width:"100px",backgroundColor:"black",color:'white',marginLeft:"30px"}}>"Case Study</div>
                <h1>{title}</h1>
                <h1>Pay</h1>
                <h4>{des}</h4>
            </div>
            <div>
                <img src={logo}/>
            </div>
        </div>
    )
}

export default Card;