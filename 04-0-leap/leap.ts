function isLeapYear(year: number) {
  if (year % 4 === 0) {
    if (year % 100) {
      if (year % 400 !== 0) return false;
    }
    return false;
  }
  return false;
}

export default isLeapYear;
