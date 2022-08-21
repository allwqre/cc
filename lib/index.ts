type Arg = string | boolean | null | undefined;

export const cc = (...args: Arg[]): string =>
  args.reduce((acc: string, cur: Arg) => {
    if (typeof cur === 'string') {
      acc && (acc += ' ');
      acc += cur;
    }
    return acc;
  }, '');

export default cc;
