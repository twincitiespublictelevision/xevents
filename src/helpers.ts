export function randomKey() {
  return Math.floor((Date.now() + Math.random() * 10000)).toString(36);
}