'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, TrendingUp, Clock, DollarSign, Award, Target, Brain, Zap, ArrowRight, Sparkles, Cpu, Network } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-intersection-observer'

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cargo: '',
    empresa: '',
    desafio: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const scrollY = useScrollAnimation()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, cargo: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError(data.error || 'Ocorreu um erro ao enviar seus dados. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro:', error)
      setError('Erro de conexão. Verifique sua internet e tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gray-50 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 transition-all duration-300 ${scrollY > 50 ? 'shadow-sm' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-xl overflow-hidden transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src="/texfy-logo.png"
                  alt="Texfy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-semibold tracking-tight">Texfy</span>
            </div>
            <Button 
              onClick={scrollToForm} 
              variant="outline"
              className="rounded-full border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105"
            >
              Quero eliminar o retrabalho
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in-up">
            <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 rounded-full text-sm font-medium px-4 py-2 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              IA para PCP Têxtil
            </Badge>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up animation-delay-200">
            O Caos do PCP Custa
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient">
              Milhões
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium animate-fade-in-up animation-delay-400">
            O retrabalho que paralisa sua produção nasce no planejamento. Conheça a plataforma de IA focada em otimizar o PCP Têxtil e entre para nossa fila de espera.
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105 animate-fade-in-up animation-delay-600 group"
          >
            Quero eliminar o retrabalho
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Brain className="w-8 h-8 text-gray-300 opacity-50" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <Cpu className="w-6 h-6 text-gray-300 opacity-50" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animation-delay-4000">
          <Network className="w-7 h-7 text-gray-300 opacity-50" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              Seu planejamento de PCP é seu maior gargalo?
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Viver "apagando incêndios" é o sintoma. A causa é um planejamento de PCP que não antecipa falhas ou gargalos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group animate-on-scroll animation-delay-200">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                Perda de Tempo e Dinheiro
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gestão parada para realocar recursos e refazer lotes.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group animate-on-scroll animation-delay-400">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                Dificuldade na Logística e Atrasos
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                O retrabalho estoura prazos de entrega e gera insatisfação.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group animate-on-scroll animation-delay-600">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                Alto Gasto Oculto
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Desperdício de energia, matéria-prima e mão de obra em cada peça refeita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-gray-400">
                  <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              Chega de achismo. O futuro do PCP é com Planejamento Inteligente.
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Em vez de corrigir o caos, nossa plataforma usa IA para antecipar gargalos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group animate-on-scroll animation-delay-200">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                Assertividade na Entrega
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Garanta prazos com um planejamento que aprende e se adapta.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group animate-on-scroll animation-delay-400">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                Agilidade na Gestão
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tenha visão clara do fluxo, simule cenários e decida com base em dados.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group animate-on-scroll animation-delay-600">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                Redução de Custos
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Transforme o custo do retrabalho em margem de lucro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-50"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="mb-8">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 rounded-full text-sm font-medium px-4 py-2 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Nossa História
              </Badge>
            </div>
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              Sobre Nós
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tudo começou no <span className="font-semibold text-gray-900">Startup Weekend Blumenau 2025</span>. Unidos pelo companheirismo e pela busca em resolver o maior problema da indústria têxtil, nasceu a Texfy — uma solução inteligente, moderna e construída com muita tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll animation-delay-200">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <img
                    src="/51a0b3c6-6ccb-495c-b67e-6849489561ed.jpeg"
                    alt="Equipe Texfy no Startup Weekend Blumenau 2025"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-sm">SW Blumenau 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 tracking-tight text-gray-900">
                      Identificamos o Problema Real
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Conversamos com gestores, visitamos fábricas e entendemos a dor: o retrabalho começa no planejamento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 tracking-tight text-gray-900">
                      Tecnologia como Solução
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Combinamos IA, análise preditiva e uma interface intuitiva para transformar o caos em clareza.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 tracking-tight text-gray-900">
                      Feito para a Indústria Têxtil
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Não é um ERP genérico. É uma plataforma desenhada especificamente para os desafios do setor têxtil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        
        {/* Animated Stars Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-on-scroll">
            <div className="mb-12">
              <Award className="w-20 h-20 text-gray-700 mx-auto mb-6 animate-bounce" />
            </div>
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              E conquistamos reconhecimento desde o início
            </h2>
            <p className="text-2xl text-gray-600 mb-16 leading-relaxed">
              Nossa abordagem para resolver o planejamento de PCP foi premiada no Startup Weekend Blumenau 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-200">
              <div className="text-4xl font-bold mb-3 tracking-tight">2º Lugar</div>
              <p className="text-gray-700 text-lg">Geral no Startup Weekend Blumenau 2025</p>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-400">
              <div className="text-4xl font-bold mb-3 tracking-tight">1º Lugar</div>
              <p className="text-gray-700 text-lg">Melhor solução B2B do evento</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll animation-delay-600">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <div className="flex-shrink-0">
                <img
                  src="/logo-febratex-vertical-azul.png"
                  alt="Febratex"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Convidados como Expositores
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Fomos convidados pela própria administração do <span className="font-semibold">Febratex Summit</span> para sermos expositores na feira de inovação que antecede o maior evento da indústria têxtil da América Latina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="formulario" className="py-32 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Seja o primeiro a otimizar seu PCP.
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Estamos finalizando o protótipo e convidando gestores de PCP para um acesso antecipado. Deixe seus dados para entrar na fila de espera.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-on-scroll animation-delay-200">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-4 text-red-200 text-center">
                    <p className="font-medium">⚠️ {error}</p>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="nome" className="text-white font-medium text-lg">Nome Completo</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-14 text-lg focus:bg-white/20 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-white font-medium text-lg">E-mail Corporativo</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-14 text-lg focus:bg-white/20 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="cargo" className="text-white font-medium text-lg">Cargo</Label>
                    <Select value={formData.cargo} onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white rounded-2xl h-14 text-lg focus:bg-white/20 transition-all duration-300 flex items-center">
                        <SelectValue placeholder="Selecione seu cargo" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-white/20">
                        <SelectItem value="gestor-pcp" className="text-white">Gestor de PCP</SelectItem>
                        <SelectItem value="gerente-producao" className="text-white">Gerente de Produção</SelectItem>
                        <SelectItem value="coordenador-pcp" className="text-white">Coordenador de PCP</SelectItem>
                        <SelectItem value="dono-socio" className="text-white">Dono/Sócio</SelectItem>
                        <SelectItem value="outro" className="text-white">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="empresa" className="text-white font-medium text-lg">Nome da Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-14 text-lg focus:bg-white/20 transition-all duration-300"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="desafio" className="text-white font-medium text-lg">
                    Qual seu maior desafio HOJE no Planejamento de PCP? (Opcional)
                  </Label>
                  <Textarea
                    id="desafio"
                    name="desafio"
                    value={formData.desafio}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl text-lg resize-none focus:bg-white/20 transition-all duration-300"
                    rows={4}
                    placeholder="Descreva seus principais desafios..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-100 rounded-full py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Quero entrar na Fila de Espera
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Obrigado. Sua inscrição foi confirmada.
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Você está na fila de espera. Em breve, nossa equipe entrará em contato pelo e-mail informado com os próximos passos.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 border-t border-gray-900">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6 group">
            <div className="w-8 h-8 rounded-xl overflow-hidden transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img
                src="/texfy-logo.png"
                alt="Texfy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">Texfy</span>
          </div>
          <p className="text-gray-400 text-lg">
            © 2025 Texfy. Planejamento Inteligente para PCP Têxtil.
          </p>
        </div>
      </footer>
    </div>
  )
}