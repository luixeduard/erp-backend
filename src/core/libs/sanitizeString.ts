export function sanitizeString({ value }: { value: string }): string {
  if (typeof value !== 'string') return value;
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[,]/g, '')
    .toUpperCase();
};