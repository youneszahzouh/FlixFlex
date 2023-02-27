export function trimTextWithEllipsis(text: string, maxLetters: number) {
  if (text.length < maxLetters) return text;
  else {
    return text.slice(0, maxLetters) + "...";
  }
}
