import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto nisi
        ullam ab laborum. Aliquid minus consectetur, perferendis doloremque
        corrupti minima doloribus expedita, quam vel id sequi ducimus sint
        omnis!
      </Paragraph>
      <button type="button">Send</button>
    </Container>
  );
}
