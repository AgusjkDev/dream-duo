const { VERCEL_URL, PORT } = process.env;

export const BASE_URL = VERCEL_URL ? `https://${VERCEL_URL}` : `http://localhost:${PORT || 3000}`;

export const SITE_CONFIG = {
    name: "Dream Duo",
    description:
        "Discover your perfect match with Dream Duo. Skip the wait and meet someone who fits your preferences in real-time. Instant connections, endless possibilities. Join now!",
    keywords:
        "Dream Duo, online dating, real-time matchmaking, instant connections, perfect match, dating preferences, matchmaking service, dating app",
    author: "Agustín Arnoldi",
};
