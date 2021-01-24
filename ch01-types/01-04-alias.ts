{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'name';
  type Student = {
    name: String;
    age: number;
  };
  const student: Student = {
    name: 'Mike',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
}
