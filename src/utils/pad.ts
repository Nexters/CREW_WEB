export const pad = (base: string, number: number) => {
  return (
    base.slice(0, base.length - number.toString().length) + number.toString()
  );
};
