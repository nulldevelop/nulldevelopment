'use client'

import { GL } from '@/components/gl'
import { Leva } from 'leva'
import { useState } from 'react'

interface ClientWrapperProps {
	children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
	const [hovering] = useState(false)
	return (
		<>
			<GL hovering={hovering} />
			{children}
			<Leva hidden />
		</>
	)
}


