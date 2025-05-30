export const getLinkUrlFirstSegment = (link: string) => {
  // Si es una URL externa (comienza con http:// o https://), retornar null
  if (link.startsWith('http://') || link.startsWith('https://')) {
    return null;
  }
  const firstSegment = link.split("/")[1];
  return firstSegment;
};
