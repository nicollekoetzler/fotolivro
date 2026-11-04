"use client";

import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"nome" | "telefone" | "email", string>>;

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
}

export default function InscricaoForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  function validate() {
    const e: Errors = {};
    if (nome.trim().length < 2) e.nome = "Escreva seu nome.";
    if (telefone.replace(/\D/g, "").length < 10) e.telefone = "Informe o telefone com DDD.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Confira o e-mail.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!validate()) return;
    setState("sending");
    try {
      const res = await fetch("/api/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nome.trim(), telefone, email: email.trim() }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="price form-card" role="status">
        <span className="tape" aria-hidden="true"></span>
        <p className="eyebrow">Inscrição recebida</p>
        <h3>Obrigada, {nome.trim().split(" ")[0]}!</h3>
        <p>Seu contato foi registrado. Em breve você recebe a data, o valor e como confirmar a vaga.</p>
      </div>
    );
  }

  return (
    <form className="price form-card" onSubmit={onSubmit} noValidate>
      <span className="tape" aria-hidden="true"></span>
      <p className="eyebrow">Inscrição</p>
      <div className="field">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" autoComplete="name" maxLength={120} value={nome}
          onChange={(e) => setNome(e.target.value)} aria-invalid={!!errors.nome} aria-describedby="nome-err" />
        <span className="err" id="nome-err">{errors.nome}</span>
      </div>
      <div className="field">
        <label htmlFor="telefone">Telefone (WhatsApp)</label>
        <input id="telefone" name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000"
          value={telefone} onChange={(e) => setTelefone(maskPhone(e.target.value))}
          aria-invalid={!!errors.telefone} aria-describedby="telefone-err" />
        <span className="err" id="telefone-err">{errors.telefone}</span>
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" maxLength={160}
          value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby="email-err" />
        <span className="err" id="email-err">{errors.email}</span>
      </div>
      <button className="btn" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Enviando…" : "Quero participar"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">
        {state === "error" ? "Não deu para enviar agora. Tente de novo em instantes." : ""}
      </p>
    </form>
  );
}
