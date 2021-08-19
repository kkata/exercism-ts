class Words {
  count(words: string) {
    const wordsArr = words
      .split(/\s+/)
      .filter((w) => w !== "")
      .map((w) => w.toLocaleLowerCase());
    const output = new Map<string, number>();
    for (const w of wordsArr) {
      if (output.has(w)) {
        const wordCount = output.get(w);
        if (typeof wordCount === "number") {
          output.set(w, wordCount + 1);
        }
      } else {
        output.set(w, 1);
      }
    }
    return output;
  }
}

export default Words;
