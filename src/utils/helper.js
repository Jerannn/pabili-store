export default function fakeFetchingDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
