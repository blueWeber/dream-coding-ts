{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  // react useState -> const [a, setA] = useState('a')
  let student: [string, number];
  student = ['name', 123];
}
