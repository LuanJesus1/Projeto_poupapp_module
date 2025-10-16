import { IconSavings } from "../icons";
import { ProgressBar } from "../ProgressBar";
import styles from "./savingstatus.module.css";

export function SavingStatus() {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>
        <IconSavings />
        Vamos economizar!
      </p>
      <ProgressBar percent={50} />
    </div>
  );
}
