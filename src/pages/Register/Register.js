import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {

  const[displayName, setDisplayName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")

  const[error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>crie seu usuário e compartilhe sua história</p>

      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          />

          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
          />

          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />

          <span>Cinfirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confima a sua senha"
          />
        </label>
        <button type="submit" className="btn">Cadastar</button>
      </form>
    </div>
  );
};

export default Register;
