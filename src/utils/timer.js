export const sleep = (timeMs) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs);
  });
};
