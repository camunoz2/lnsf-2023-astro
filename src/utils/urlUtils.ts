export const getLinkUrlFirstSegment = (link: string) => {
  const firstSegment = link.split("/")[1];
  return firstSegment;
};
