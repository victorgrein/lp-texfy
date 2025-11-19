# 📧 Configuração de E-mail para a Texfy

## 🚀 Passo a Passo para Configurar o Envio de E-mails

### 1. Configurar Conta Gmail

1. **Crie uma conta Gmail** (se ainda não tiver)
   - Sugestão: `texfy.sistema@gmail.com`
   - Use uma senha forte

2. **Ative a Verificação em Duas Etapas**
   - Vá para: https://myaccount.google.com/security
   - Ative "Verificação em duas etapas"
   - Isso é OBRIGATÓRIO para usar senhas de app

### 2. Gerar Senha de App

1. **Acesse as Senhas de App**
   - Vá para: https://myaccount.google.com/apppasswords
   - Faça login com sua conta Gmail

2. **Crie uma Nova Senha de App**
   - **Selecionar app**: "Outro (nome personalizado)"
   - **Nome do app**: `Texfy Landing Page`
   - Clique em "Gerar"
   - **Copie a senha gerada** (ex: `abcd efgh ijkl mnop`)

### 3. Configurar Variáveis de Ambiente

1. **Abra o arquivo `.env`** na raiz do projeto
2. **Substitua os valores**:

```env
# Configure com suas credenciais reais
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=senha_de_app_gerada_acima
```

**Importante:**
- Use a senha de app, NÃO a senha normal do Gmail
- Não compartilhe o arquivo `.env`
- Adicione `.env` ao `.gitignore` se ainda não estiver

### 4. Testar o Funcionamento

1. **Inicie o servidor**:
   ```bash
   npm run dev
   ```

2. **Preencha o formulário** na landing page
3. **Verifique o console** para mensagens de debug
4. **Confirme o recebimento** do e-mail em `contatovhg@hotmail.com`

## 🔧 Solução de Problemas

### Erro Comum: "535-5.7-8 Username and Password not accepted"

**Causa:** Usando senha normal em vez de senha de app
**Solução:** 
1. Ative a verificação em duas etapas
2. Gere uma nova senha de app
3. Use a senha de app no `.env`

### Erro Comum: "Connection timeout"

**Causa:** Firewall ou bloqueio de porta
**Solução:** 
- Verifique se a porta 587 não está bloqueada
- Tente usar porta 465 com `secure: true`

### E-mail não chega no Hotmail/Outlook

**Solução:**
1. Verifique a pasta de spam
2. Adicione o remetente aos contatos seguros
3. Verifique se o assunto não está sendo bloqueado

## 📋 Estrutura do E-mail Enviado

O sistema envia um e-mail HTML profissional com:

- **Design Responsivo**: Funciona em todos dispositivos
- **Branding Texfy**: Cores e logo da marca
- **Dados Completos**: Todas as informações do lead
- **Informações Adicionais**: IP, User Agent, data/hora
- **Formatação Profissional**: Layout limpo e organizado

## 🔄 Alternativas ao Gmail

Se preferir não usar Gmail, você pode configurar outros serviços:

### SendGrid
```env
EMAIL_SENDGRID_API_KEY=sua_chave_api
EMAIL_FROM=noreply@texfy.com
```

### Resend
```env
EMAIL_RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=leads@texfy.com
```

### AWS SES
```env
EMAIL_AWS_ACCESS_KEY=seu_access_key
EMAIL_AWS_SECRET_KEY=sua_secret_key
EMAIL_AWS_REGION=us-east-1
EMAIL_FROM=noreply@texfy.com
```

## 🛡️ Segurança

- **Nunca** exponha suas credenciais no código
- **Sempre** use variáveis de ambiente
- **Mantenha** suas senhas de app seguras
- **Revogue** senhas de app não utilizadas

## 📞 Suporte

Se tiver problemas com a configuração:

1. Verifique os logs no console do servidor
2. Confirme as credenciais no `.env`
3. Teste com diferentes provedores de e-mail
4. Entre em contato para suporte técnico

---

**Pronto!** Após configurar, sua landing page estará enviando e-mails automaticamente para `contatovhg@hotmail.com` 🎉