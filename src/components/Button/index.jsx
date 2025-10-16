import { useState } from "react";
import styles from "./button.module.css";
import { useTransactions } from "../../hooks/useTransactions";

export function Button({
  label = "Detalhes",
  date = new Date().toISOString(),
  nature = "Pagamento",
  value = 0,
  account = "Conta corrente",
  addMode = false,
}) {
  const [open, setOpen] = useState(false);
  const { addTransaction } = useTransactions();

  const [form, setForm] = useState({
    date,
    nature,
    value,
    account,
  });

  function formatCurrency(v) {
    const abs = Math.abs(Number(v)).toFixed(2);
    return `${v < 0 ? "-" : ""}R$ ${abs}`;
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleString("pt-BR");
    } catch {
      return iso;
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const tx = {
      description: form.nature,
      value: Number(form.value),
      date: form.date,
      account: form.account,
    };
    addTransaction(tx);
    setOpen(false);
  }

  return (
    <>
      <button className={styles.btn} onClick={() => setOpen(true)}>
        {label}
      </button>

      {open && (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <div className={styles.dialog}>
            <div className={styles.dialogHeader}>
              <div className={styles.dialogTitle}>
                {addMode ? "Adicionar transação" : "Detalhes da transação"}
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            {addMode ? (
              <form onSubmit={handleSubmit}>
                <div className={styles.formField}>
                  <label className={styles.label}>Data</label>
                  <input
                    className={styles.input}
                    type="datetime-local"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.label}>Natureza</label>
                  <input
                    className={styles.input}
                    name="nature"
                    value={form.nature}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.label}>Valor</label>
                  <input
                    className={styles.input}
                    name="value"
                    type="number"
                    step="0.01"
                    value={form.value}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.label}>Conta</label>
                  <input
                    className={styles.input}
                    name="account"
                    value={form.account}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.actionsRow}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => setOpen(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className={styles.btn}>
                    Adicionar
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className={styles.row}>
                  <div className={styles.label}>Data</div>
                  <div className={styles.value}>{formatDate(date)}</div>
                </div>

                <div className={styles.row}>
                  <div className={styles.label}>Natureza</div>
                  <div className={styles.value}>{nature}</div>
                </div>

                <div className={styles.row}>
                  <div className={styles.label}>Valor</div>
                  <div className={styles.value}>{formatCurrency(value)}</div>
                </div>

                <div className={styles.row}>
                  <div className={styles.label}>Conta</div>
                  <div className={styles.value}>{account}</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 12,
                  }}
                >
                  <button className={styles.btn} onClick={() => setOpen(false)}>
                    Fechar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Button;
