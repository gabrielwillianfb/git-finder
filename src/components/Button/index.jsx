/* eslint-disable react/prop-types */
import { ButtonContainer } from "./styles";

function Button({ onClick }) {
  return <ButtonContainer onClick={onClick}>Buscar</ButtonContainer>;
}

export default Button;
