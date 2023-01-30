function compose<T>(...fns: Array<(args: T) => T>): (args: T) => T;
function compose<T>(...fns: Array<(args: T[]) => T[]>): (args: T[]) => T[];
function compose(...fns: Array<(args: any) => any>): any {
  return (args: any) => fns.reduce((prev, fn) => fn(prev), args);
}

export default compose;
