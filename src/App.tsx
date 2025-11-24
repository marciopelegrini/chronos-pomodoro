import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <section>LOGO</section>
      </Container>

      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FORM</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}
