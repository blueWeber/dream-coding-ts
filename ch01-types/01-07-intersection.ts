{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker): void {
    console.log(person.name, person.employeeId, person.work);
  }

  internWork({
    name: 'blue',
    score: 100,
    employeeId: 47,
    work: () => {},
  });
}
