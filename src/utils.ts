export const shuffler = (arr: any[]) => {
  return [...arr].sort(() => Math.random() - 0.5);
}