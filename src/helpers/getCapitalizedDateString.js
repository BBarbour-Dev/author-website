import { formatRelativeDate } from './formatRelativeDate';

export function getCapitalizedDateString(string) {
	const formatted = formatRelativeDate(string);
	return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
