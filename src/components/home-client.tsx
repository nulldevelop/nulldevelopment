'use client'

import { BackgroundGrid } from '@/components/background-grid'

interface HomeClientProps {
	children: React.ReactNode
}

export function HomeClient({ children }: HomeClientProps) {
	return (
		<>
			<BackgroundGrid />
			{children}
		</>
	)
}
