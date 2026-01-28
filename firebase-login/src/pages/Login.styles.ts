import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a, #020617);
`;

export const Card = styled.div`
  width: 100%;
  max-width: 380px;
  background: #020617;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  color: #e5e7eb;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #1e293b;
  background: #020617;
  color: #e5e7eb;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #38bdf8;
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #38bdf8;
  color: #020617;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Error = styled.p`
  margin-top: 12px;
  color: #f87171;
  text-align: center;
  font-size: 14px;
`;
