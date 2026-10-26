export const company = {
	legalName: '66.983.110 PEDRO HENRIQUE ANDRADE',
	ownerName: 'Pedro Henrique Andrade',
	cnpj: '66.983.110/0001-29',
	openingDate: '26/05/2026',
	legalStatus: 'Microempreendedor Individual (MEI)',
	cnae: '9511-8/00 - Reparação e manutenção de computadores e de equipamentos periféricos',
	address: {
		street: 'Rua Camilo Stelfeld, 149',
		district: 'Jardim Santa Rosa',
		city: 'Campina Grande do Sul',
		state: 'PR',
		zip: '83433-540',
	},
	email: 'contato@nulldev.com.br',
	phone: '(41) 99179-8306',
	whatsapp: 'https://wa.me/5541991798306',
} as const

export const companyAddress = `${company.address.street}, ${company.address.district}, ${company.address.city}/${company.address.state} - CEP ${company.address.zip}`
