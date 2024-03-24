export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const NEXT_PUBLIC_BASE_URL = IS_DEVELOPMENT
    ? `http://localhost:${process.env.PORT || 3000}`
    : process.env.NEXT_PUBLIC_BASE_URL;

export const SITE_CONFIG = {
    name: "Dream Duo",
    description:
        "Discover your perfect match with Dream Duo. Skip the wait and meet someone who fits your preferences in real-time. Instant connections, endless possibilities. Join now!",
    keywords:
        "Dream Duo, online dating, real-time matchmaking, instant connections, perfect match, dating preferences, matchmaking service, dating app",
    author: "Agustín Arnoldi",
};
