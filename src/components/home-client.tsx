'use client'

import { GL } from '@/components/gl'
import { Leva } from 'leva'
import { useState } from 'react'

interface HomeClientProps {
	children: React.ReactNode
}

export function HomeClient({ children }: HomeClientProps) {
	const [hovering] = useState(false)
	return (
		<>
			<GL hovering={hovering} />
			{children}
			<Leva hidden />
		</>
	)
}


