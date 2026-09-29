import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className="border-t border-white/10 py-10 px-4 relative z-10 bg-black">
			<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
				<div>
					<span className="text-white font-medium">Pedro Henrique Andrade</span> • Full Stack Engineer
				</div>

				<div className="flex items-center gap-5">
					<a
						href="https://wa.me/5541991798306"
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
						href="mailto:contato@nulldev.com.br"
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
		</footer>
	)
}
