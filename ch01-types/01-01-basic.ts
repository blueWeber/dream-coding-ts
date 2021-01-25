{
  /**
   * JavaScript
   * Primitives: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array, ...
   */

  /** TypeScript */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false;

  // undefined
  let age: number | undefined;
  age = undefined;

  // null
  let person: string | null;
  person = '';

  // unknown은 무조건 타입을 좁혀서 사용해야 하는 의무가 있는 반면,
  // any는 타입을 좁혀서 사용하지 않아도 되서 자유롭다는 차이점이 있다.

  // unknown
  let notSure: unknown;
  notSure = 0;
  notSure = 'he';

  // any
  let anything: any = 0;
  anything = 'hello';

  //
  // void - return;
  function print(): void {}

  // never - 절대 리턴하지 않음 - while 반복, 에러 던지기
  // never never never... 구글 검색
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }

  // object
  function acceptSomeObject(obj: object): void {}
}
