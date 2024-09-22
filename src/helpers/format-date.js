import { format, formatDistanceToNow } from 'date-fns';

export function formatDate(date) {
  return formatDistanceToNow(new Date(date));
}

export function formatCrypto(date) {
  return format(new Date(date), 'Pp');
}
