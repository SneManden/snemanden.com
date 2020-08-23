export const jsonHeaderWithCacheControl = () => ({
    "Content-Type": "application/json",
    // 'Cache-Control': `max-age=${5 * 60 * 1e3}` // 5 minutes
});
