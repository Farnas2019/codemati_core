import { createClient } from "redis";
import { default as Redis } from "ioredis";
import config from "config";

const DEFAULT_EXP = 900;

const redis = new Redis({
  port: config.get<number>("REDIS_PORT.default"),
  host: config.get<string>("REDIS_HOST.default"),
  username: config.get<string>("REDIS_USERNAME.default"),
  password: config.get<string>("REDIS_PASSWORD.default"),
});

export const getOrSetCache = (key: string, cb: any) => {
  return new Promise(async (resolve: any, reject: any) => {
    const current_data = await redis.get(key);

    if (!current_data) {
      console.log("🥺 ~ file: redis.ts ~ cache missed ~ ", current_data);

      const fresh_data = await cb();
      if (!fresh_data) {
        return reject(null);
      }
      await redis.set(key, JSON.stringify(fresh_data), "EX", DEFAULT_EXP);
      return resolve(fresh_data);
    }

    return resolve(JSON.parse(current_data));
  });
};

export default redis;
