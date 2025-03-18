import { STATUS_IMAGES } from "./contants";
import { randInt } from "./random";

export const getRandomImage = (context: keyof typeof STATUS_IMAGES) => {
  const pool = STATUS_IMAGES[context];

  try {
    return pool[randInt(pool.length)];
  } catch {
    return pool[0];
  }
};
