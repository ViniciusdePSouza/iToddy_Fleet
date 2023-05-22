import { View } from 'react-native';
import { Container, Slogan, Title } from './styles';

import backGroundPNG from '../../assets/background.png'

export function SignIn() {
  return (
    <Container source={backGroundPNG}>

      <Title>
        Ignite Fleet
      </Title>

      <Slogan>
        Gestão de uso de veículos
      </Slogan>
    </Container>
  );
}
