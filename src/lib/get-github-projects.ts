interface GitHubRepo {
	id: number
	name: string
	description: string | null
	html_url: string
	homepage: string | null
	topics: string[]
}

export interface GitHubProject {
	id: string
	title: string
	slug: string
	shortDescription: string
	image: string
	stack: string[]
	link: string | null
}

export async function getGitHubProjects(): Promise<GitHubProject[]> {
	const username = process.env.GITHUB_USERNAME
	const token = process.env.GITHUB_TOKEN

	if (!username) return []

	const headers: HeadersInit = {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	}
	if (token) headers.Authorization = `Bearer ${token}`

	const res = await fetch(
		`https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=20`,
		{
			headers,
			next: { revalidate: 3600 },
		},
	).catch(() => {
		console.error('Failed to fetch GitHub projects')
		return null
	})

	if (!res || !res.ok) return []

	const repos: GitHubRepo[] = await res.json()

	return repos.map((repo) => ({
		id: String(repo.id),
		title: repo.name
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (c) => c.toUpperCase()),
		slug: repo.name,
		shortDescription: repo.description ?? '',
		image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
		stack: repo.topics,
		link: repo.homepage || repo.html_url,
	}))
}
