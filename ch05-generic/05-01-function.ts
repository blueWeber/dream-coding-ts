{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);
  console.log(result);

  //
  function checkNotNullGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }
  const number = checkNotNullGeneric(123);
  const bool: boolean = checkNotNullGeneric(true);
}
