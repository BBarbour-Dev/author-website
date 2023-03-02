import { formatRelative } from 'date-fns';

export function formatRelativeDate(date) {
	return formatRelative(new Date(date), new Date());
}
