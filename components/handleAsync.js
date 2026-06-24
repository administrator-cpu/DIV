/**
 * Wraps an async promise and returns an array [error, data].
 */
export async function handleAsync(promise) {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    // Ensure the error is always a standard Error object
    const parsedError = error instanceof Error ? error : new Error(String(error));
    return [parsedError, null];
  }
}