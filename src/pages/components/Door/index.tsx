import DoorModel from "@/pages/model/Door"
import styles from "./styles.module.css"

type DoorProps = {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.opened ? styles.selected : ''

    const open = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    const togglSelection = (e: any) => props.onChange(door?.togglSelection())

    const renderDoor = () => {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.knob} onClick={open}></div>
            </div>
        )
    }

    return (
       <div className={styles.area} onClick={togglSelection}>
        <div className={`${styles.frame} ${selected}`}>
            {door.opened ? false : renderDoor() }
        </div>
        <div className={styles.floor}></div>
       </div>
    )
}