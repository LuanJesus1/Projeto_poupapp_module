import accounts from "../../../accounts.json";
import styles from "./account.module.css";

function formatCurrency(value) {
  return `R$ ${Number(value).toFixed(2)}`;
}

export function Account({ items }) {
  const list = items ?? accounts;

  return (
    <div className={styles.accountWrap}>
      <div className={styles.list}>
        {list.map((a, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.bank}>{a.bank}</div>
            <div className={styles.balance}>{formatCurrency(a.balance)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
