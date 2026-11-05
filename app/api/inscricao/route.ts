// Recebe a inscrição do formulário e repassa para o endereço definido em
// INSCRICAO_WEBHOOK_URL (por exemplo, um formulário do Formspree, que envia por e-mail,
// ou um Google Apps Script que grava numa planilha).
export async function POST(req: Request) {
  let body: { nome?: unknown; telefone?: unknown; email?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "JSON inválido" }, { status: 400 });
  }

  const nome = String(body.nome ?? "").trim().slice(0, 120);
  const telefone = String(body.telefone ?? "").trim().slice(0, 20);
  const email = String(body.email ?? "").trim().slice(0, 160);
  if (nome.length < 2 || telefone.replace(/\D/g, "").length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const url = process.env.INSCRICAO_WEBHOOK_URL || "https://formspree.io/f/mqppjgqe";
  if (!url) {
    console.error("INSCRICAO_WEBHOOK_URL não configurada");
    return Response.json({ error: "Inscrições indisponíveis" }, { status: 503 });
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ nome, telefone, email, enviadoEm: new Date().toISOString() }),
  });
  if (!res.ok) {
    console.error("Falha ao repassar inscrição", res.status);
    return Response.json({ error: "Falha ao registrar" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
