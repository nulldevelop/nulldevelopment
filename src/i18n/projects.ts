import type { ProjectData } from '@/lib/projects-data'
import type { Locale } from './config'
import type { Dictionary } from './dictionaries/types'

/**
 * Applies the translated copy of a curated project. Portuguese keeps whatever
 * the database/curated list provides, so edits made in the dashboard still win.
 */
export function localizeProject(project: ProjectData, locale: Locale, t: Dictionary): ProjectData {
	const badge = project.statusBadge ? (t.badges[project.statusBadge] ?? project.statusBadge) : undefined

	if (locale === 'pt') return { ...project, statusBadge: badge }

	const copy = t.projects[project.slug]
	return {
		...project,
		title: t.titles[project.slug] ?? project.title,
		shortDescription: copy?.shortDescription ?? project.shortDescription,
		content: copy?.content ?? project.content,
		statusBadge: badge,
	}
}
