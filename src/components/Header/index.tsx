import { Container, ImageContainer } from './styles';
import Logo from '../../assets/logo.svg';

export const Header = () => (
  <Container>
    <ImageContainer>
      <img src={Logo} alt="logo" />
    </ImageContainer>
  </Container>
);
