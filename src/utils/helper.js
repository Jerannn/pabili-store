export default function fakeFetchingDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const capitalizeFirstLetter = (w) =>
  w
    .split("")
    .map((l, i) => (i === 0 ? l.toUpperCase() : l))
    .join("");
