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

const currentDate = new Date();
export const MAX_BIRTHDATE = new Date(
    currentDate.getUTCFullYear() - 18,
    currentDate.getUTCMonth(),
    currentDate.getUTCDate(),
);
export const MIN_BIRTHDATE = new Date("1900-01-01");
export const MAX_WEIGHT = 512;
export const MAX_HEIGHT = 512;
