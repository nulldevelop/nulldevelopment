import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Pedro Henrique Andrade | Full Stack Engineer'
export const size = {
	width: 1200,
	height: 630,
}
export const contentType = 'image/png'

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					backgroundColor: '#09090b',
					backgroundImage:
						'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.08) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.08) 2%, transparent 0%)',
					backgroundSize: '100px 100px',
					padding: '64px',
					fontFamily: 'sans-serif',
				}}
			>
				{/* Top Header */}
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
						}}
					>
						<div
							style={{
								width: '42px',
								height: '42px',
								borderRadius: '12px',
								backgroundColor: 'rgba(250, 204, 21, 0.15)',
								border: '1px solid rgba(250, 204, 21, 0.4)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#facc15',
								fontSize: '24px',
								fontWeight: 'bold',
							}}
						>
							&lt;/&gt;
						</div>
						<span
							style={{
								fontSize: '28px',
								fontWeight: 'bold',
								color: '#ffffff',
								letterSpacing: '-0.5px',
							}}
						>
							pedro<span style={{ color: '#facc15' }}>.dev</span>
						</span>
					</div>

					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
							padding: '8px 18px',
							borderRadius: '9999px',
							backgroundColor: 'rgba(16, 185, 129, 0.15)',
							border: '1px solid rgba(16, 185, 129, 0.3)',
							color: '#34d399',
							fontSize: '18px',
							fontWeight: '600',
						}}
					>
						<div
							style={{
								width: '10px',
								height: '10px',
								borderRadius: '50%',
								backgroundColor: '#10b981',
							}}
						/>
						Disponível para Projetos Freelance
					</div>
				</div>

				{/* Middle Big Hero Text */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
					<h1
						style={{
							fontSize: '64px',
							fontWeight: '900',
							color: '#ffffff',
							margin: 0,
							letterSpacing: '-1.5px',
							lineHeight: 1.1,
						}}
					>
						Pedro Henrique Andrade
					</h1>
					<p
						style={{
							fontSize: '28px',
							color: '#facc15',
							margin: 0,
							fontWeight: '600',
						}}
					>
						Full Stack Engineer • Next.js & TypeScript
					</p>
					<p
						style={{
							fontSize: '20px',
							color: '#a1a1aa',
							margin: 0,
							maxWidth: '850px',
							lineHeight: 1.5,
						}}
					>
						Construção de aplicações web de alta performance, plataformas SaaS escaláveis e landing pages focadas em conversão.
					</p>
				</div>

				{/* Bottom Tech Pills */}
				<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
					{['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'].map((tech) => (
						<div
							key={tech}
							style={{
								padding: '8px 16px',
								borderRadius: '10px',
								backgroundColor: 'rgba(255, 255, 255, 0.06)',
								border: '1px solid rgba(255, 255, 255, 0.12)',
								color: '#e4e4e7',
								fontSize: '16px',
								fontWeight: '500',
							}}
						>
							{tech}
						</div>
					))}
				</div>
			</div>
		),
		{
			...size,
		}
	)
}
