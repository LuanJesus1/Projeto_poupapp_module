import styles from "./transitions.module.css";
import Button from "../Button";
import { useTransactions } from "../../hooks/useTransactions";

function formatCurrency(value) {
  const abs = Math.abs(value).toFixed(2);
  return `${value < 0 ? "-" : ""}R$ ${abs}`;
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR");
  } catch {
    return iso;
  }
}

export function Transitions({ items }) {
  const { transactions } = useTransactions();
  const list = items ?? transactions;

  return (
    <div className={styles.wrap}>
      <div className={styles.list}>
        {list.map((t, idx) => (
          <div key={idx} className={styles.item}>
            <div>
              <div className={styles.description}>{t.description}</div>
              <div className={styles.date}>{formatDate(t.date)}</div>
            </div>
            <div className={styles.actions}>
              <div
                className={
                  t.value < 0 ? styles.valueExpense : styles.valueIncome
                }
              >
                {formatCurrency(t.value)}
              </div>
              <Button
                label="Detalhes"
                date={t.date}
                nature={t.description}
                value={t.value}
                account={t.account ?? "Conta padrão"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transitions;
