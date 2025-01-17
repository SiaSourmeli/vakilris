import styles from './Button.module.css';

function Button(props) {  
    return (
        <button type='button' aria-label="navigation menu" className={`${styles.navButton} ${props.active ? 'active' : ''}`} onClick={() => {props.onClick()}}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
    )
}

export default Button;