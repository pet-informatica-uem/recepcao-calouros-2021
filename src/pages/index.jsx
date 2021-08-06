import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Terminal } from '../components/Terminal';

export default function Home() {
  console.log(
    '%c SAIA DAQUI IMEDIATAMENTE',
    'color: #eee; background: tomato; padding: 24px 8px; font-size: 24px; font-weight: bold; border-radius: 16px;'
  );
  console.log(
    '%c NÃO OLHE EMBAIXO!1!11!',
    'color: red; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: white; padding: 24px 8px; font-size: 32px; font-weight: bold; border-radius: 16px;'
  );
  console.log(
    '%c /fandangos',
    'color: #eee; background: #494949; padding: 12px 8px; font-size: 12px; font-weight: bold; border-radius: 16px;'
  );
  return (
    <>
      <Container>
        <Header />
        <Terminal />
      </Container>
      <Footer />
    </>
  );
}
