/* eslint-disable react/prop-types */
import { InputContainer } from "./styles";

function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} placeholder="Ex: usuario/repositorio-github" />
    </InputContainer>
  );
}

export default Input;
