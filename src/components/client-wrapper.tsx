'use client'

import { Leva } from 'leva'
import { useState } from 'react'
import { GL } from '@/components/gl'

export function ClientWrapper({ children }: { children: React.ReactNode }) {
	const [hovering] = useState(false)
	return (
		<>
			<GL hovering={hovering} />
			{children}
			<Leva hidden />
		</>
	)
}
