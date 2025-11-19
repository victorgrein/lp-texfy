import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, cargo, empresa, desafio } = body

    // Validação básica
    if (!nome || !email || !cargo || !empresa) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Formatar o conteúdo do e-mail
    const emailContent = `
NOVA INSCRIÇÃO NA FILA DE ESPERA - TEXFY

📋 DADOS DO LEAD:
================
👤 Nome: ${nome}
📧 E-mail: ${email}
💼 Cargo: ${cargo}
🏢 Empresa: ${empresa}
💭 Desafio: ${desafio || 'Não informado'}

📅 Data/Hora: ${new Date().toLocaleString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}
================

🎯 Este é um lead qualificado interessado na solução Texfy para PCP Têxtil.

📊 INFORMAÇÕES ADICIONAIS:
- IP: ${request.headers.get('x-forwarded-for') || 'Não disponível'}
- User Agent: ${request.headers.get('user-agent') || 'Não disponível'}
- Origem: Landing Page Texfy

---
Texfy - Planejamento Inteligente para PCP Têxtil
🌐 www.texfy.com
📧 contatovhg@hotmail.com
    `.trim()

    // Configurar o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'texfy.sistema@gmail.com',
        pass: process.env.EMAIL_PASS || 'sua_senha_de_app_aqui'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Configurar o e-mail
    const mailOptions = {
      from: {
        name: 'Texfy - Sistema de Leads',
        address: process.env.EMAIL_USER || 'texfy.sistema@gmail.com'
      },
      to: 'contatovhg@hotmail.com',
      subject: `🚀 Novo Lead Texfy - ${empresa} (${cargo})`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 16px;">
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1a202c; font-size: 28px; font-weight: 700; margin: 0; display: flex; align-items: center; justify-content: center; gap: 10px;">
                🧠 Texfy
              </h1>
              <p style="color: #718096; font-size: 16px; margin: 8px 0 0 0;">Planejamento Inteligente para PCP Têxtil</p>
            </div>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #2d3748; font-size: 20px; font-weight: 600; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
                📋 Dados do Lead
              </h2>
              <div style="space-y: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-weight: 600; color: #4a5568;">👤 Nome:</span>
                  <span style="color: #2d3748;">${nome}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-weight: 600; color: #4a5568;">📧 E-mail:</span>
                  <span style="color: #2d3748;">${email}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-weight: 600; color: #4a5568;">💼 Cargo:</span>
                  <span style="color: #2d3748;">${cargo}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-weight: 600; color: #4a5568;">🏢 Empresa:</span>
                  <span style="color: #2d3748;">${empresa}</span>
                </div>
                ${desafio ? `
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                  <span style="font-weight: 600; color: #4a5568;">💭 Desafio:</span>
                  <span style="color: #2d3748;">${desafio}</span>
                </div>
                ` : ''}
              </div>
            </div>
            
            <div style="background: #edf2f7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">📅 Informações da Solicitação</h3>
              <div style="font-size: 14px; color: #4a5568; line-height: 1.6;">
                <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
                <p><strong>Origem:</strong> Landing Page Texfy</p>
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white;">
              <p style="margin: 0; font-size: 18px; font-weight: 600;">🎯 Lead Qualificado!</p>
              <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Este lead está pronto para ser contatado</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #718096; font-size: 12px;">
                Enviado automaticamente pelo sistema Texfy
              </p>
            </div>
          </div>
        </div>
      `,
      text: emailContent
    }

    // Enviar o e-mail
    await transporter.sendMail(mailOptions)

    // Log para debug
    console.log('✅ E-mail enviado com sucesso!')
    console.log('📧 Destinatário: contatovhg@hotmail.com')
    console.log('👤 Nome:', nome)
    console.log('🏢 Empresa:', empresa)
    console.log('📧 E-mail:', email)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscrição confirmada com sucesso! Em breve entraremos em contato.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Erro ao enviar e-mail:', error)
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor. Por favor, tente novamente mais tarde.',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    )
  }
}