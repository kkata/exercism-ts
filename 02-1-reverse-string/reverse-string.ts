class ReverseString {
  static reverse(text: string) {
    return [...text].length === 0 ? "" : [...text].reduceRight((p, c) => p + c);
  }
}

export default ReverseString;
