export function bind<T extends Function>(
  target: object,
  key: string,
  descriptor: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void {
  if (!descriptor || typeof descriptor.value !== 'function') {
    throw new TypeError(`Only methods can be decorated with @bind. <${key}> is not a method!`);
  }

  return {
    configurable: true,
    get(this: T): T {
      const bound: T = descriptor?.value?.bind(this);
      Object.defineProperty(this, key, {
        value: bound,
        configurable: true,
        writable: true
      });
      return bound;
    }
  };
}

export default bind;
