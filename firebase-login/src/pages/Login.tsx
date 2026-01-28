import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
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
} from "./Login.styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login realizado com sucesso 🎉");
    } catch (err: any) {
      setError("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Card>
        <Title>Entrar</Title>

        <Form onSubmit={handleLogin}>
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

          <Button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </Form>

        {error && <Error>{error}</Error>}

        <p style={{ color: "#e5e7eb", textAlign: "center", marginTop: "12px" }}>
          Não tem conta?{" "}
          <Link to="/register" style={{ color: "#38bdf8" }}>
            Cadastre-se
          </Link>
        </p>
      </Card>
    </Container>
  );
}
