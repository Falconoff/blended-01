import { formatDistanceToNow } from 'date-fns';

export function formatDate(date) {
  return formatDistanceToNow(new Date(date));
}
