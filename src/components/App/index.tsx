import { globalStyles } from '../../styles/global';
import { Container } from './styles';

import { Header } from '../Header';

const App = () => {
  globalStyles();

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default App;
