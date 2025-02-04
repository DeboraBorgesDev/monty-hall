import styles from "./styles.module.css"

type DoorProps = {
    selected?: boolean
}

export default function Door(props: DoorProps) {
    const selected = props.selected ? styles.selected : ''
    return (
       <div className={styles.area}>
         <div className={`${styles.frame} ${selected}`}>
            <div className={styles.door}>
                <div className={styles.number}>3</div>
                <div className={styles.knob}></div>
            </div>
         </div>
         <div className={styles.floor}></div>
       </div>
    )
}