'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authClient } from '@/lib/auth-client'

export default function LoginPage() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		const { error } = await authClient.signIn.username({
			username,
			password,
			callbackURL: '/dashboard',
		})

		if (error) {
			toast.error(error.message || 'Erro ao fazer login')
		} else {
			toast.success('Login realizado com sucesso!')
			router.push('/dashboard')
		}
		setLoading(false)
	}

	return (
		<div className="relative flex min-h-screen items-center justify-center bg-background px-4 overflow-hidden">
			{/* Glow de fundo */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<div className="h-125 w-125 rounded-full bg-yellow-500/5 blur-[120px]" />
			</div>

			<div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">
				{/* Logo texto */}
				<Link href="/" className="flex flex-col items-center leading-none">
					<span className="font-sentient font-bold text-3xl text-white tracking-tight">
						null<span className="text-yellow-500">.</span>dev
					</span>
					<div className="h-0.5 w-full bg-linear-to-r from-yellow-700 via-yellow-400 to-yellow-700 rounded-full mt-1" />
				</Link>

				{/* Card */}
				<div className="w-full rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-8 flex flex-col gap-6">
					<div className="text-center space-y-1">
						<h1 className="font-sentient text-2xl font-bold text-white">
							Acesso ao Painel
						</h1>
						<p className="font-mono text-xs text-foreground/40">
							Entre com suas credenciais para continuar
						</p>
					</div>

					<form onSubmit={handleLogin} className="flex flex-col gap-4">
						<div className="space-y-1.5">
							<Label htmlFor="username" className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
								Usuário
							</Label>
							<Input
								id="username"
								type="text"
								placeholder="seu_usuario"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-yellow-500 focus-visible:border-yellow-500/50 h-11 rounded-xl"
							/>
						</div>

						<div className="space-y-1.5">
							<Label htmlFor="password" className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
								Senha
							</Label>
							<Input
								id="password"
								type="password"
								placeholder="••••••••"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-yellow-500 focus-visible:border-yellow-500/50 h-11 rounded-xl"
							/>
						</div>

						<Button
							type="submit"
							className="w-full h-11 mt-2 rounded-xl bg-yellow-500 font-mono font-bold text-black hover:bg-yellow-400 transition-all duration-200 hover:scale-[1.02]"
							disabled={loading}
						>
							{loading ? 'Entrando...' : 'Entrar →'}
						</Button>
					</form>
				</div>

				<p className="font-mono text-xs text-foreground/20">
					© {new Date().getFullYear()} Null Development
				</p>
			</div>
		</div>
	)
}
