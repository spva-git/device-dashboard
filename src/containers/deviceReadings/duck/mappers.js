export const deviceReadingsMapper = ({ results }) => {
  return results.map(({ name }) => {
    return name;
  });
};
