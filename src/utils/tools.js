export function randint(max) {
  return Math.floor(Math.random() * max);
}

export function norm(text) {
  return text.normalize("NFD").replace(/\p{Mn}/gu, "");
}
