export default {
    SWAPI: {
        base_url: 'https://swapi.dev/api',
    },

     //REDIS SERVICES
  REDIS_HOST: {
    default: process.env.REDIS_HOST || "127.0.0.1",
  },
  REDIS_PORT: {
    default:  process.env.REDIS_PORT || 6379,
  },
  REDIS_USERNAME: {
    default: process.env.REDIS_USERNAME || "",
  },
  REDIS_PASSWORD: {
    default: process.env.REDIS_PASSWORD || "",
  },
}