export const siteConfig = {
    name: "Dream Duo",
    description:
        "Discover your perfect match with Dream Duo. Skip the wait and meet someone who fits your preferences in real-time. Instant connections, endless possibilities. Join now!",
    keywords:
        "Dream Duo, online dating, real-time matchmaking, instant connections, perfect match, dating preferences, matchmaking service, dating app",
    author: "Agustín Arnoldi",
    baseUrl:
        process.env.NODE_ENV === "development"
            ? `http://localhost:${process.env.PORT || 3000}`
            : process.env.BASE_URL,
};
