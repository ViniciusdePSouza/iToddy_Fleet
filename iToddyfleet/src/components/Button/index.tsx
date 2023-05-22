import React from "react";
import { Container, Title } from "./styles";
import { Loading } from "../Loading";

type ButtonProps = {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      { isLoading ? <Loading /> : <Title>{title}</Title> }
    </Container>
  );
}
