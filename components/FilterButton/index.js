import styles from './FilterButton.module.css';

export default function FilterButton({ label, onClick, active, color }) {
    const defaultColor = '#363739';

    const add = ( 
        <img src="/images/add.svg"/>
    )

    const close = (
        <img src="/images/close.svg"/>
    )

    return(
        <button className={` ${styles.filter} ${active ? styles.active : ''}`} onClick={onClick} style={{ backgroundColor: active ? color : defaultColor }}>
            {label} {active ? close : add}
        </button>
    )
}