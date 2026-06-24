/**
 * Returns safe dimensions for Next.js Image component.
 * If metadata contains valid width/height, returns them.
 * If metadata is missing or invalid, returns null so the caller can use `fill` instead.
 * 
 * @param {Object} metadata - Image metadata from backend { width, height }
 * @returns {{ width: number, height: number } | null}
 */
export function getImageDimensions(metadata) {
  if (
    metadata &&
    typeof metadata.width === 'number' &&
    typeof metadata.height === 'number' &&
    metadata.width > 0 &&
    metadata.height > 0
  ) {
    return {
      width: metadata.width,
      height: metadata.height,
    };
  }
  
  return null;
}