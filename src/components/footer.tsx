import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
	empresa: [
		{ label: 'Sobre Mim', href: '#sobre' },
		{ label: 'Especialidades', href: '#sobre' },
		{ label: 'Portfólio', href: '#portfolio' },
		{ label: 'FAQ', href: '#faq' },
	],
	servicos: [
		{ label: 'Landing Pages', href: '#sobre' },
		{ label: 'Sistemas & SaaS', href: '#sobre' },
		{ label: 'Consultoria', href: '#sobre' },
	],
	social: [
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/pedrodevfull',
			icon: Linkedin,
		},
		{ label: 'GitHub', href: 'https://github.com/nulldevelop', icon: Github },
		{ label: 'Email', href: 'mailto:seu-email@exemplo.com', icon: Mail },
	],
}

export function Footer() {
	return (
		<footer className="bg-zinc-950 border-t border-foreground/10 pt-20 pb-10 px-4 relative z-10">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* Brand Section */}
					<div className="lg:col-span-1">
						<Link href="/" className="inline-block mb-6">
							<span className="font-sentient text-2xl font-bold tracking-tighter">
								PH<span className="text-yellow-500">.</span>
							</span>
						</Link>
						<p className="font-mono text-sm text-foreground/50 leading-relaxed max-w-xs">
							Transformando desafios complexos em produtos digitais de alta performance e escalabilidade.
						</p>
					</div>

					{/* Links: Empresa */}
					<div>
						<h4 className="font-sentient text-sm uppercase tracking-widest text-foreground/30 mb-6">Navegação</h4>
						<ul className="space-y-4">
							{footerLinks.empresa.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="font-mono text-sm text-foreground/60 hover:text-yellow-500 transition-colors flex items-center group"
									>
										{link.label}
										<ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Links: Serviços */}
					<div>
						<h4 className="font-sentient text-sm uppercase tracking-widest text-foreground/30 mb-6">Soluções</h4>
						<ul className="space-y-4">
							{footerLinks.servicos.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="font-mono text-sm text-foreground/60 hover:text-yellow-500 transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Social & Contact */}
					<div>
						<h4 className="font-sentient text-sm uppercase tracking-widest text-foreground/30 mb-6">Conecte-se</h4>
						<div className="flex flex-col gap-4">
							{footerLinks.social.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 font-mono text-sm text-foreground/60 hover:text-yellow-500 transition-colors group"
								>
									<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-foreground/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
										<item.icon size={16} />
									</div>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-10 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="font-mono text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
						© {new Date().getFullYear()} Pedro Henrique Andrade • Todos os direitos reservados.
					</p>

					<div className="flex items-center gap-6">
						<Link href="#" className="font-mono text-[10px] text-foreground/30 hover:text-foreground/60 transition-colors uppercase tracking-[0.2em]">
							Privacidade
						</Link>
						<Link href="#" className="font-mono text-[10px] text-foreground/30 hover:text-foreground/60 transition-colors uppercase tracking-[0.2em]">
							Termos
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
