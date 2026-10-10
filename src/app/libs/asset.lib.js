/**
 * Helper to resolve static public assets respecting NEXT_PUBLIC_BASE_PATH
 * Handles root domain ('') as well as edge subpath previews ('/p/portfolio')
 */
export const getAssetPath = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${cleanPath}` : cleanPath;
};
