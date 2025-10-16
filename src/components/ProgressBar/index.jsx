import styles from "./progressbar.module.css";

export function ProgressBar({ percent }) {
  return (
    <div className={styles.track}>
      <div className={styles.fill} style={{ width: `${percent}%` }}>
        {percent}%
      </div>
    </div>
  );
}
