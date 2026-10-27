export function format(template: string, vars: Record<string, string | number>) {
	return template.replace(/\{(\w+)\}/g, (match, key) =>
		key in vars ? String(vars[key]) : match,
	)
}

export function whatsappUrl(phoneUrl: string, message: string) {
	return `${phoneUrl}?text=${encodeURIComponent(message)}`
}
