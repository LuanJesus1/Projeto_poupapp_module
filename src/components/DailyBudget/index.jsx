import styles from './dailyBudget.module.css'

const formater = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export const DailyBudget = ({ value }) => {
  return (
    <p className={styles.dailyBudget}>
        {formater.format(value)}
    </p>
  )
};