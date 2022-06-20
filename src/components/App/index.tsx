import { globalStyles } from '../../styles/global';
import { Container } from './styles';

import { Header } from '../Header';
import { TodoList } from '../ToDoList';

const App = () => {
  globalStyles();

  return (
    <Container>
      <Header />
      <TodoList />
    </Container>
  );
};

export default App;
