import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom"; // se usar React Router

import {
  Container,
  Card,
  Title,
  Form,
  Input,
  Button,
  Error,
} from "./Login.styles"; // reutilizamos os estilos do Login

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Cadastro realizado com sucesso 🎉");
      // opcional: redirecionar para login ou home
    } catch (err: any) {
      setError("Erro ao cadastrar usuário: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Card>
        <Title>Cadastro</Title>

        <Form onSubmit={handleRegister}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>

        {error && <Error>{error}</Error>}

        <p style={{ color: "#e5e7eb", textAlign: "center", marginTop: "12px" }}>
          Já tem conta?{" "}
          <Link to="/" style={{ color: "#38bdf8" }}>
            Login
          </Link>
        </p>
      </Card>
    </Container>
  );
}
