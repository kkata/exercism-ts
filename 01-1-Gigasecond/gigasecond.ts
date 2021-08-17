class Gigasecond {
  private startDate: Date;
  constructor(startDate: Date) {
    this.startDate = startDate;
  }
  date(): Date {
    const GIGASECOND_AS_MILLISECONDS = 1000000000000;
    return new Date(this.startDate.getTime() + GIGASECOND_AS_MILLISECONDS);
  }
}

export default Gigasecond;
