'use client'

import { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BlurFade } from '@/components/ui/blur-fade'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		try {
			const { error } = await authClient.signUp.email({
				email,
				password,
				name,
				username,
				callbackURL: '/dashboard',
			})

			if (error) {
				toast.error(error.message || 'Erro ao criar conta')
			} else {
				toast.success('Conta criada com sucesso!')
				router.push('/dashboard')
				router.refresh()
			}
		} catch (err) {
			toast.error('Ocorreu um erro inesperado')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
			<BlurFade delay={0.1}>
				<Card className="w-full max-w-md border-border/50 bg-card/50 backdrop-blur-xl">
					<CardHeader className="space-y-1 text-center">
						<CardTitle className="text-3xl font-sentient">Criar Conta</CardTitle>
						<CardDescription className="font-mono">
							Preencha os dados abaixo para se registrar.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleRegister} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name" className="font-mono">Nome Completo</Label>
								<Input
									id="name"
									placeholder="Seu Nome"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									className="bg-background/50"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="username" className="font-mono">Usuário</Label>
								<Input
									id="username"
									placeholder="seu_usuario"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
									className="bg-background/50"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email" className="font-mono">E-mail</Label>
								<Input
									id="email"
									type="email"
									placeholder="seu@email.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="bg-background/50"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password" className="font-mono">Senha</Label>
								<Input
									id="password"
									type="password"
									placeholder="••••••••"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="bg-background/50"
								/>
							</div>
							<Button
								type="submit"
								className="w-full font-mono mt-2"
								disabled={loading}
							>
								{loading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Criando conta...
									</>
								) : (
									'Registrar'
								)}
							</Button>
							<div className="text-center mt-4">
								<p className="text-sm text-foreground/60 font-mono">
									Já tem uma conta?{' '}
									<Link href="/login" className="text-primary hover:underline">
										Faça login
									</Link>
								</p>
							</div>
						</form>
					</CardContent>
				</Card>
			</BlurFade>
		</div>
	)
}
