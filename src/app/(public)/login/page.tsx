'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authClient } from '@/lib/auth-client'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		const { error } = await authClient.signIn.email({
			email,
			password,
			callbackURL: '/',
		})

		if (error) {
			toast.error(error.message || 'Erro ao fazer login')
		} else {
			toast.success('Login realizado com sucesso!')
			router.push('/')
		}
		setLoading(false)
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-black px-4">
			<div className="absolute top-10 left-1/2 -translate-x-1/2">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="NullPHR Logo"
						width={80}
						height={80}
						className="object-contain"
					/>
				</Link>
			</div>

			<Card className="w-full max-w-md border-white/10 bg-black/50 backdrop-blur-xl">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-2xl font-bold tracking-tight text-white">Login</CardTitle>
					<CardDescription className="text-white/60">
						Entre com suas credenciais para acessar o painel
					</CardDescription>
				</CardHeader>
				<form onSubmit={handleLogin}>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email" className="text-white/80">E-mail</Label>
							<Input
								id="email"
								type="email"
								placeholder="exemplo@nullphr.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-yellow-500"
							/>
						</div>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password" className="text-white/80">Senha</Label>
							</div>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="border-white/10 bg-white/5 text-white focus-visible:ring-yellow-500"
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button
							type="submit"
							className="w-full bg-yellow-500 font-bold text-black hover:bg-yellow-600"
							disabled={loading}
						>
							{loading ? "Entrando..." : "Entrar"}
						</Button>
					</CardFooter>
				</form>
			</Card>
	</div>
	)
}
