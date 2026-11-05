# Oficina de Memórias

Landing page da oficina presencial **Oficina de Memórias**, conduzida por Andréa Koetzler na Luzia Trattoria, em Next.js (App Router). Três seções: apresentação, explicação e informações, e formulário de inscrição.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar

```bash
npm run build
npm start
```

O projeto também pode ser importado direto na Vercel.

## Onde editar

- `app/page.tsx`: textos e estrutura da página
- `components/InscricaoForm.tsx`: formulário de inscrição (nome, telefone e e-mail)
- `app/api/inscricao/route.ts`: recebe o formulário e repassa os dados
- `app/globals.css`: estilos
- `public/assets/`: imagens

## Para onde vão as inscrições

O formulário envia os dados para `/api/inscricao`, que repassa um JSON `{ nome, telefone, email, enviadoEm }` por POST para o endereço da variável de ambiente `INSCRICAO_WEBHOOK_URL`. Sem essa variável, o formulário mostra um aviso de erro e nada é gravado.

Para receber cada inscrição por e-mail (Formspree, grátis até 50 por mês):

1. Crie uma conta em https://formspree.io e clique em "New Form", informando o e-mail que vai receber as inscrições.
2. Copie o endereço do formulário, no formato `https://formspree.io/f/xxxxxxx`.
3. O site já usa o formulário `https://formspree.io/f/mqppjgqe` por padrão. Para trocar, crie `INSCRICAO_WEBHOOK_URL` na Vercel (Settings > Environment Variables) com o novo endereço e faça um novo deploy.

Ou, para gravar numa planilha do Google:

1. Crie uma planilha com as colunas `enviadoEm`, `nome`, `telefone`, `email`.
2. Em Extensões > Apps Script, cole:

   ```js
   function doPost(e) {
     const d = JSON.parse(e.postData.contents);
     SpreadsheetApp.getActiveSheet().appendRow([d.enviadoEm, d.nome, d.telefone, d.email]);
     return ContentService.createTextOutput("ok");
   }
   ```

3. Implante como app da Web, com acesso para "Qualquer pessoa", e copie a URL.
4. Na Vercel, em Settings > Environment Variables, crie `INSCRICAO_WEBHOOK_URL` com essa URL e faça um novo deploy.
