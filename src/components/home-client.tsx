'use client'

import { Leva } from 'leva'
import { useState } from 'react'
import { GL } from '@/components/gl'

export function HomeClient({ children }: { children: React.ReactNode }) {
	const [hovering, _setHovering] = useState(false)
	return (
		<>
			<GL hovering={hovering} />
			{children}
			<Leva hidden />
		</>
	)
}
