{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUMBER = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }
  enum Days1 {
    Monday = 1,
    Tuesday,
    Wednesday,
  }
  enum Days2 {
    Monday = 'mon',
    Tuesday = 'tue',
    Wednesday = 'wed',
  }
  console.log(Days.Tuesday);
  console.log(Days1.Tuesday);
  console.log(Days2.Tuesday);
  let day: Days = Days.Monday;

  type dayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let d: dayOfWeek = 'Tuesday';
}
