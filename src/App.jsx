import "./App.css";
import styles from "./App.module.css";
import { Container } from "./components/container";
import { Aside } from "./components/Aside";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main";
import { TextClient } from "./components/TextClient";
import Card, { CardBody, CardHeader } from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";
import { ProgressBar } from "./components/ProgressBar";
import Transitions from "./components/Transitions";
import Account from "./components/Account";
import Button from "./components/Button";
import { TransactionsProvider } from "./contexts/TransactionsContext";

function App() {
  return (
    <TransactionsProvider>
      <Container>
        <Aside />
        <Main>
          <SearchInput />
          <TextClient />
          <section>
            <Button label="Adicionar transação" addMode={true} />
          </section>
          <section className={styles.section}>
            <Card>
              <CardHeader>Orçamento diário disponível</CardHeader>
              <CardBody>
                <DailyBudget value={1100} />
              </CardBody>
              <CardHeader>Orçamento diário disponível</CardHeader>
              <CardBody>
                <ProgressBar percent={78} />
              </CardBody>
              <CardHeader>Orçamento diário disponível</CardHeader>
              <CardBody>
                <Transitions />
              </CardBody>
              <CardHeader>Orçamento diário disponível</CardHeader>
              <CardBody>
                <Account />
              </CardBody>
            </Card>
          </section>
        </Main>
      </Container>
    </TransactionsProvider>
  );
}

export default App;
