import { IconSearch } from '../icons'
import styles from './searchinput.module.css'

export function SearchInput(props) {
    return (
        <div className={styles.container}>
            <IconSearch/>
            <input placeholder='Procure suas finanças' className={styles.input} {...props} />
        </div>
    )
}