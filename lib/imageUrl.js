/**
 * Resolves a relative image path to a full backend URL.
 * - /uploads/previews/uuid.jpg → http://localhost:3000/uploads/previews/uuid.jpg
 * - Already absolute URLs pass through unchanged
 * - null/undefined paths return a placeholder
 */
export function resolveImageUrl(path) {
  if (!path) return '/products/placeholder.svg';
  
  // Already absolute URL (http://, https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  // Remove trailing /api/v1 if present, keep the base origin
  const origin = baseUrl.replace(/\/api\/v1\/?$/, '');
  
  return `${origin}${path}`;
}