import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { company, companyAddress } from '@/lib/company'

export function Footer() {
	return (
		<footer className="border-t border-white/10 py-10 px-4 relative z-10 bg-black">
			<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-400">
				<div>
					<span className="text-white font-semibold">{company.ownerName}</span> • Full Stack Engineer
				</div>

				<div className="flex items-center gap-5">
					<a
						href={company.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
					>
						<MessageCircle className="w-3.5 h-3.5" />
						<span>WhatsApp</span>
					</a>
					<a
						href="https://github.com/nulldevelop"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors flex items-center gap-1.5"
					>
						<Github className="w-3.5 h-3.5" />
						<span>GitHub</span>
					</a>
					<a
						href="https://www.linkedin.com/in/pedrodevfull/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors flex items-center gap-1.5"
					>
						<Linkedin className="w-3.5 h-3.5" />
						<span>LinkedIn</span>
					</a>
					<a
						href={`mailto:${company.email}`}
						className="hover:text-white transition-colors flex items-center gap-1.5"
					>
						<Mail className="w-3.5 h-3.5" />
						<span>Email</span>
					</a>
				</div>

				<Link
					href="#"
					className="hover:text-white transition-colors flex items-center gap-1"
				>
					<span>Topo</span>
					<ArrowUp className="w-3 h-3" />
				</Link>
			</div>

			<div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 text-center sm:text-left">
				<p>
					© {new Date().getFullYear()} {company.legalName} • CNPJ {company.cnpj}
					<br />
					{companyAddress}
				</p>
				<nav className="flex items-center gap-4 shrink-0">
					<Link href="/privacidade" className="hover:text-white transition-colors">
						Política de Privacidade
					</Link>
					<Link href="/termos" className="hover:text-white transition-colors">
						Termos de Uso
					</Link>
				</nav>
			</div>
		</footer>
	)
}
