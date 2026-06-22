export const GO_RELOADED_QUESTIONS = [
  {
    id: "go-reloaded-overview",
    type: "lesson",
    title: "Go Reloaded Overview",
    eyebrow: "Plain Text Lesson",
    category: "go-reloaded",
    estimatedTime: "10min",
    tags: ["go", "strings", "fs"],
    sections: [
      {
        heading: "What you are building",
        body: [
          "Go Reloaded is a text-editing tool written in Go. It reads an input file, applies a series of transformations, and writes the result to an output file.",
          "The program is driven by markers embedded in the text, such as (hex), (bin), (up), (low), (cap), and optional counts like (up, 2).",
        ],
      },
      {
        heading: "Core transformations",
        body: [
          "(hex) replaces the word before it with the decimal form of a hexadecimal number. Example: `1E (hex)` becomes `30`.",
          "(bin) replaces the word before it with the decimal form of a binary number. Example: `10 (bin)` becomes `2`.",
          "(up), (low), and (cap) change the casing of the word before them, or of the previous N words when a count is provided.",
          "Punctuation spacing, apostrophe pairs, and article correction (`a` to `an`) are also part of the final output.",
        ],
      },
      {
        heading: "What to practice here",
        body: [
          "Break the project into small pure functions first: number conversion, casing helpers, article fixes, and punctuation cleanup.",
          "Write unit tests for each helper before wiring them together with Go's file system APIs.",
        ],
      },
    ],
  },
  {
    id: "hex-to-decimal",
    type: "coding",
    title: "Hex to Decimal",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "10min",
    tags: ["go-reloaded", "hex", "numbers"],
    prompt: [
      "In Go Reloaded, every `(hex)` marker replaces the previous word with its decimal value.",
      "Write a function that converts a hexadecimal string into its decimal integer equivalent.",
      "Example: `1E` should become `30`.",
    ],
    examples: [
      {
        input: 'hex = "1E"',
        output: "30",
        explanation: "1E in base 16 equals 30 in decimal.",
      },
      {
        input: 'hex = "42"',
        output: "66",
      },
    ],
    hints: [
      "Use strconv.ParseInt with base 16 in Go.",
      "The input word is always a valid hexadecimal number.",
    ],
    defaultCode: {
      javascript: `function hexToDecimal(hex) {
  // write your code here
}`,
      typescript: `function hexToDecimal(hex: string): number {
  // write your code here
}`,
      go: `import "strconv"

func hexToDecimal(hex string) int {
  // write your code here
  return 0
}`,
      python: `def hex_to_decimal(hex_value):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "hexToDecimal",
      typescript: "hexToDecimal",
      go: "hexToDecimal",
      python: "hex_to_decimal",
    },
    testCases: [
      { id: 1, input: '"1E"', expected: "30", hidden: false },
      { id: 2, input: '"42"', expected: "66", hidden: false },
      { id: 3, input: '"FF"', expected: "255", hidden: false },
    ],
  },
  {
    id: "bin-to-decimal",
    type: "coding",
    title: "Binary to Decimal",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "10min",
    tags: ["go-reloaded", "binary", "numbers"],
    prompt: [
      "Every `(bin)` marker in Go Reloaded replaces the previous word with its decimal value.",
      "Write a function that converts a binary string into its decimal integer equivalent.",
      "Example: `10 (bin)` should become `2`.",
    ],
    examples: [
      {
        input: 'bin = "10"',
        output: "2",
        explanation: "10 in binary equals 2 in decimal.",
      },
      {
        input: 'bin = "1010"',
        output: "10",
      },
    ],
    hints: [
      "Use strconv.ParseInt with base 2 in Go.",
      "The input word is always a valid binary number.",
    ],
    defaultCode: {
      javascript: `function binToDecimal(bin) {
  // write your code here
}`,
      typescript: `function binToDecimal(bin: string): number {
  // write your code here
}`,
      go: `import "strconv"

func binToDecimal(bin string) int {
  // write your code here
  return 0
}`,
      python: `def bin_to_decimal(bin_value):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "binToDecimal",
      typescript: "binToDecimal",
      go: "binToDecimal",
      python: "bin_to_decimal",
    },
    testCases: [
      { id: 1, input: '"10"', expected: "2", hidden: false },
      { id: 2, input: '"1010"', expected: "10", hidden: false },
      { id: 3, input: '"11111111"', expected: "255", hidden: false },
    ],
  },
  {
    id: "apply-up",
    type: "coding",
    title: "Apply Uppercase",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "8min",
    tags: ["go-reloaded", "strings", "case"],
    prompt: [
      "The `(up)` marker converts the word before it to uppercase.",
      "Write a function that returns the uppercase version of a single word.",
      "Example: `go (up)` becomes `GO`.",
    ],
    examples: [
      {
        input: 'word = "go"',
        output: '"GO"',
      },
      {
        input: 'word = "times"',
        output: '"TIMES"',
      },
    ],
    hints: [
      "Use strings.ToUpper in Go or the equivalent in your language.",
      "Assume the input is one word with no surrounding spaces.",
    ],
    defaultCode: {
      javascript: `function applyUp(word) {
  // write your code here
}`,
      typescript: `function applyUp(word: string): string {
  // write your code here
}`,
      go: `import "strings"

func applyUp(word string) string {
  // write your code here
  return ""
}`,
      python: `def apply_up(word):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "applyUp",
      typescript: "applyUp",
      go: "applyUp",
      python: "apply_up",
    },
    testCases: [
      { id: 1, input: '"go"', expected: '"GO"', hidden: false },
      { id: 2, input: '"times"', expected: '"TIMES"', hidden: false },
      { id: 3, input: '"winter"', expected: '"WINTER"', hidden: false },
    ],
  },
  {
    id: "apply-low",
    type: "coding",
    title: "Apply Lowercase",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "8min",
    tags: ["go-reloaded", "strings", "case"],
    prompt: [
      "The `(low)` marker converts the word before it to lowercase.",
      "Write a function that returns the lowercase version of a single word.",
      "Example: `SHOUTING (low)` becomes `shouting`.",
    ],
    examples: [
      {
        input: 'word = "SHOUTING"',
        output: '"shouting"',
      },
      {
        input: 'word = "IT"',
        output: '"it"',
      },
    ],
    hints: [
      "Use strings.ToLower in Go or the equivalent in your language.",
      "Assume the input is one word with no surrounding spaces.",
    ],
    defaultCode: {
      javascript: `function applyLow(word) {
  // write your code here
}`,
      typescript: `function applyLow(word: string): string {
  // write your code here
}`,
      go: `import "strings"

func applyLow(word string) string {
  // write your code here
  return ""
}`,
      python: `def apply_low(word):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "applyLow",
      typescript: "applyLow",
      go: "applyLow",
      python: "apply_low",
    },
    testCases: [
      { id: 1, input: '"SHOUTING"', expected: '"shouting"', hidden: false },
      { id: 2, input: '"IT"', expected: '"it"', hidden: false },
      { id: 3, input: '"DESPAIR"', expected: '"despair"', hidden: false },
    ],
  },
  {
    id: "apply-cap",
    type: "coding",
    title: "Apply Capitalize",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "8min",
    tags: ["go-reloaded", "strings", "case"],
    prompt: [
      "The `(cap)` marker capitalizes the word before it.",
      "Write a function that returns the word with the first letter uppercase and the rest lowercase.",
      "Example: `bridge (cap)` becomes `Bridge`.",
    ],
    examples: [
      {
        input: 'word = "bridge"',
        output: '"Bridge"',
      },
      {
        input: 'word = "BROOKLYN"',
        output: '"Brooklyn"',
      },
    ],
    hints: [
      "Capitalize only the first rune, then lowercase the remainder.",
      "Handle empty strings safely.",
    ],
    defaultCode: {
      javascript: `function applyCap(word) {
  // write your code here
}`,
      typescript: `function applyCap(word: string): string {
  // write your code here
}`,
      go: `import "strings"

func applyCap(word string) string {
  // write your code here
  return ""
}`,
      python: `def apply_cap(word):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "applyCap",
      typescript: "applyCap",
      go: "applyCap",
      python: "apply_cap",
    },
    testCases: [
      { id: 1, input: '"bridge"', expected: '"Bridge"', hidden: false },
      { id: 2, input: '"BROOKLYN"', expected: '"Brooklyn"', hidden: false },
      {
        id: 3,
        input: '"foolishness"',
        expected: '"Foolishness"',
        hidden: false,
      },
    ],
  },
  {
    id: "uppercase-last-words",
    type: "coding",
    title: "Uppercase Last N Words",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "12min",
    tags: ["go-reloaded", "strings", "case"],
    prompt: [
      "When Go Reloaded sees `(up, N)`, it uppercases the N words immediately before the marker.",
      "Write a function that takes a slice of words and a count, then uppercases the last `count` words in place.",
      'Example: `["This", "is", "so", "exciting"]` with count `2` becomes `["This", "is", "SO", "EXCITING"]`.',
    ],
    examples: [
      {
        input: 'words = ["This", "is", "so", "exciting"], count = 2',
        output: '["This", "is", "SO", "EXCITING"]',
      },
      {
        input:
          'words = ["it", "was", "the", "worst", "of", "times"], count = 1',
        output: '["it", "was", "the", "worst", "of", "TIMES"]',
      },
    ],
    hints: [
      "Only modify the trailing `count` entries in the slice.",
      "Leave earlier words unchanged.",
    ],
    defaultCode: {
      javascript: `function uppercaseLastWords(words, count) {
  // write your code here
}`,
      typescript: `function uppercaseLastWords(words: string[], count: number): string[] {
  // write your code here
}`,
      go: `import "strings"

func uppercaseLastWords(words []string, count int) []string {
  // write your code here
  return words
}`,
      python: `def uppercase_last_words(words, count):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "uppercaseLastWords",
      typescript: "uppercaseLastWords",
      go: "uppercaseLastWords",
      python: "uppercase_last_words",
    },
    testCases: [
      {
        id: 1,
        input: '["This","is","so","exciting"]\n2',
        expected: '["This","is","SO","EXCITING"]',
        hidden: false,
      },
      {
        id: 2,
        input: '["it","was","the","worst","of","times"]\n1',
        expected: '["it","was","the","worst","of","TIMES"]',
        hidden: false,
      },
      {
        id: 3,
        input: '["it","was","the","age","of","foolishness"]\n6',
        expected: '["IT","WAS","THE","AGE","OF","FOOLISHNESS"]',
        hidden: false,
      },
    ],
  },
  {
    id: "fix-article",
    type: "coding",
    title: "Fix A to An",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "15min",
    tags: ["go-reloaded", "strings", "articles"],
    prompt: [
      "Go Reloaded turns `a` into `an` when the next word begins with a vowel (`a`, `e`, `i`, `o`, `u`) or with `h`.",
      "Write a function that applies this rule throughout a sentence.",
      "Example: `bearing a untold story` becomes `bearing an untold story`.",
    ],
    examples: [
      {
        input:
          '"There is no greater agony than bearing a untold story inside you."',
        output:
          '"There is no greater agony than bearing an untold story inside you."',
      },
      {
        input: '"There it was. A amazing rock!"',
        output: '"There it was. An amazing rock!"',
      },
    ],
    hints: [
      "Look for ` a ` followed by a word whose first letter is a vowel or h.",
      "Also handle ` A ` at the start of a clause when appropriate.",
    ],
    defaultCode: {
      javascript: `function fixArticle(text) {
  // write your code here
}`,
      typescript: `function fixArticle(text: string): string {
  // write your code here
}`,
      go: `import (
  "strings"
  "unicode"
)

func fixArticle(text string) string {
  // write your code here
  return text
}`,
      python: `def fix_article(text):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "fixArticle",
      typescript: "fixArticle",
      go: "fixArticle",
      python: "fix_article",
    },
    testCases: [
      {
        id: 1,
        input:
          '"There is no greater agony than bearing a untold story inside you."',
        expected:
          '"There is no greater agony than bearing an untold story inside you."',
        hidden: false,
      },
      {
        id: 2,
        input: '"There it was. A amazing rock!"',
        expected: '"There it was. An amazing rock!"',
        hidden: false,
      },
      {
        id: 3,
        input: '"It was a hour ago when we left."',
        expected: '"It was an hour ago when we left."',
        hidden: false,
      },
    ],
  },
  {
    id: "normalize-quotes",
    type: "coding",
    title: "Normalize Quote Spacing",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "12min",
    tags: ["go-reloaded", "strings", "punctuation"],
    prompt: [
      "In Go Reloaded, apostrophe pairs should hug the words between them with no extra spaces.",
      "Write a function that trims spaces immediately inside paired `'` marks.",
      "Example: `' awesome '` becomes `'awesome'`.",
    ],
    examples: [
      {
        input: "\"I am exactly how they describe me: ' awesome '\"",
        output: "\"I am exactly how they describe me: 'awesome'\"",
      },
      {
        input:
          "\"As Elton John said: ' I am the most well-known homosexual in the world '\"",
        output:
          "\"As Elton John said: 'I am the most well-known homosexual in the world'\"",
      },
    ],
    hints: [
      "Find opening and closing single quotes, then trim the content between them.",
      "Preserve the words inside the quotes; only remove surrounding spaces.",
    ],
    defaultCode: {
      javascript: `function normalizeQuotes(text) {
  // write your code here
}`,
      typescript: `function normalizeQuotes(text: string): string {
  // write your code here
}`,
      go: `import "strings"

func normalizeQuotes(text string) string {
  // write your code here
  return text
}`,
      python: `def normalize_quotes(text):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "normalizeQuotes",
      typescript: "normalizeQuotes",
      go: "normalizeQuotes",
      python: "normalize_quotes",
    },
    testCases: [
      {
        id: 1,
        input: "\"I am exactly how they describe me: ' awesome '\"",
        expected: "\"I am exactly how they describe me: 'awesome'\"",
        hidden: false,
      },
      {
        id: 2,
        input:
          "\"As Elton John said: ' I am the most well-known homosexual in the world '\"",
        expected:
          "\"As Elton John said: 'I am the most well-known homosexual in the world'\"",
        hidden: false,
      },
      {
        id: 3,
        input: "\"She whispered: ' hello there '\"",
        expected: "\"She whispered: 'hello there'\"",
        hidden: false,
      },
    ],
  },
  {
    id: "fix-comma-spacing",
    type: "coding",
    title: "Fix Comma Spacing",
    eyebrow: "Coding Question",
    category: "go-reloaded",
    estimatedTime: "12min",
    tags: ["go-reloaded", "strings", "punctuation"],
    prompt: [
      "Go Reloaded requires punctuation to sit next to the previous word, with a space before the next word.",
      "Write a function that fixes comma spacing only.",
      "Example: `there ,and then` becomes `there, and then`.",
    ],
    examples: [
      {
        input: '"I was sitting over there ,and then BAMM !!"',
        output: '"I was sitting over there, and then BAMM !!"',
      },
      {
        input: '"Punctuation tests are ... kinda boring ,what do you think ?"',
        output: '"Punctuation tests are ... kinda boring, what do you think ?"',
      },
    ],
    hints: [
      "Remove spaces before commas.",
      "Ensure there is exactly one space after a comma when the next character is not whitespace.",
    ],
    defaultCode: {
      javascript: `function fixCommaSpacing(text) {
  // write your code here
}`,
      typescript: `function fixCommaSpacing(text: string): string {
  // write your code here
}`,
      go: `import (
  "regexp"
  "strings"
)

func fixCommaSpacing(text string) string {
  // write your code here
  return text
}`,
      python: `def fix_comma_spacing(text):
    # write your code here
    pass`,
    },
    functionName: {
      javascript: "fixCommaSpacing",
      typescript: "fixCommaSpacing",
      go: "fixCommaSpacing",
      python: "fix_comma_spacing",
    },
    testCases: [
      {
        id: 1,
        input: '"I was sitting over there ,and then BAMM !!"',
        expected: '"I was sitting over there, and then BAMM !!"',
        hidden: false,
      },
      {
        id: 2,
        input: '"Punctuation tests are ... kinda boring ,what do you think ?"',
        expected:
          '"Punctuation tests are ... kinda boring, what do you think ?"',
        hidden: false,
      },
      {
        id: 3,
        input: '"Ready ,set ,go"',
        expected: '"Ready, set, go"',
        hidden: false,
      },
    ],
  },
  {
    id: "fix-hex-bug",
    type: "coding",
    title: "Fix Hex Conversion Bug",
    eyebrow: "Debug Coding Question",
    category: "go-reloaded",
    estimatedTime: "10min",
    tags: ["go-reloaded", "debug", "hex"],
    prompt: [
      "This helper is meant to power the `(hex)` marker, but it returns the wrong values.",
      "Find and fix the bug so hexadecimal strings convert to the correct decimal integer.",
    ],
    examples: [
      {
        input: 'hex = "1E"',
        output: "30",
      },
      {
        input: 'hex = "42"',
        output: "66",
      },
    ],
    hints: [
      "Check which numeric base is being used during parsing.",
      "Hexadecimal numbers must be parsed in base 16.",
    ],
    defaultCode: {
      javascript: `function hexToDecimal(hex) {
  return parseInt(hex, 10);
}`,
      typescript: `function hexToDecimal(hex: string): number {
  return parseInt(hex, 10);
}`,
      go: `import "strconv"

func hexToDecimal(hex string) int {
  val, _ := strconv.ParseInt(hex, 10, 64)
  return int(val)
}`,
      python: `def hex_to_decimal(hex_value):
    return int(hex_value, 10)`,
    },
    functionName: {
      javascript: "hexToDecimal",
      typescript: "hexToDecimal",
      go: "hexToDecimal",
      python: "hex_to_decimal",
    },
    testCases: [
      { id: 1, input: '"1E"', expected: "30", hidden: false },
      { id: 2, input: '"42"', expected: "66", hidden: false },
      { id: 3, input: '"FF"', expected: "255", hidden: false },
    ],
  },
  {
    id: "fix-article-bug",
    type: "coding",
    title: "Fix Article Rule Bug",
    eyebrow: "Debug Coding Question",
    category: "go-reloaded",
    estimatedTime: "10min",
    tags: ["go-reloaded", "debug", "articles"],
    prompt: [
      "This helper decides whether `an` should be used instead of `a`, but it misses one of the Go Reloaded rules.",
      "Fix the function so words starting with `h` also require `an`.",
    ],
    examples: [
      {
        input: 'word = "untold"',
        output: "true",
      },
      {
        input: 'word = "hour"',
        output: "true",
      },
    ],
    hints: [
      "Vowels are not the only trigger in this project.",
      "Words beginning with `h` should also return true.",
    ],
    defaultCode: {
      javascript: `function shouldUseAn(word) {
  if (!word) return false;
  const vowels = "aeiou";
  return vowels.includes(word[0].toLowerCase());
}`,
      typescript: `function shouldUseAn(word: string): boolean {
  if (!word) return false;
  const vowels = "aeiou";
  return vowels.includes(word[0].toLowerCase());
}`,
      go: `import "strings"

func shouldUseAn(word string) bool {
  if word == "" {
    return false
  }
  vowels := "aeiou"
  return strings.ContainsRune(vowels, rune(strings.ToLower(word)[0]))
}`,
      python: `def should_use_an(word):
    if not word:
        return False
    return word[0].lower() in "aeiou"`,
    },
    functionName: {
      javascript: "shouldUseAn",
      typescript: "shouldUseAn",
      go: "shouldUseAn",
      python: "should_use_an",
    },
    testCases: [
      { id: 1, input: '"untold"', expected: "true", hidden: false },
      { id: 2, input: '"hour"', expected: "true", hidden: false },
      { id: 3, input: '"rock"', expected: "false", hidden: false },
    ],
  },
  {
    id: "fix-cap-bug",
    type: "coding",
    title: "Fix Capitalize Bug",
    eyebrow: "Debug Coding Question",
    category: "go-reloaded",
    estimatedTime: "10min",
    tags: ["go-reloaded", "debug", "case"],
    prompt: [
      "This `(cap)` helper uppercases the first letter but leaves the rest untouched.",
      "Fix it so the rest of the word is lowercase, matching Go Reloaded behavior.",
    ],
    examples: [
      {
        input: 'word = "bridge"',
        output: '"Bridge"',
      },
      {
        input: 'word = "BROOKLYN"',
        output: '"Brooklyn"',
      },
    ],
    hints: [
      "Capitalization in this project means first letter upper, remaining letters lower.",
      "Check what happens to the tail of the word after the first character.",
    ],
    defaultCode: {
      javascript: `function applyCap(word) {
  if (!word) return word;
  return word[0].toUpperCase() + word.slice(1);
}`,
      typescript: `function applyCap(word: string): string {
  if (!word) return word;
  return word[0].toUpperCase() + word.slice(1);
}`,
      go: `import "strings"

func applyCap(word string) string {
  if word == "" {
    return word
  }
  return strings.ToUpper(word[:1]) + word[1:]
}`,
      python: `def apply_cap(word):
    if not word:
        return word
    return word[0].upper() + word[1:]`,
    },
    functionName: {
      javascript: "applyCap",
      typescript: "applyCap",
      go: "applyCap",
      python: "apply_cap",
    },
    testCases: [
      { id: 1, input: '"bridge"', expected: '"Bridge"', hidden: false },
      { id: 2, input: '"BROOKLYN"', expected: '"Brooklyn"', hidden: false },
      {
        id: 3,
        input: '"foolishness"',
        expected: '"Foolishness"',
        hidden: false,
      },
    ],
  },
  {
    id: "hex-marker-mcq",
    type: "mcq",
    title: "What Does (hex) Do?",
    eyebrow: "MCQ Question",
    category: "go-reloaded",
    estimatedTime: "4min",
    tags: ["go-reloaded", "hex"],
    question:
      'In Go Reloaded, what happens when the program sees "42 (hex)" in the input text?',
    options: [
      { id: "a", label: "It deletes the word 42." },
      { id: "b", label: "It replaces 42 with its decimal value, 66." },
      { id: "c", label: "It converts 42 into hexadecimal." },
      { id: "d", label: "It uppercases the word 42." },
    ],
    correctOptionId: "b",
    explanation:
      "The word before `(hex)` is treated as a hexadecimal number and replaced by its decimal equivalent. 42 in hex equals 66.",
  },
  {
    id: "punctuation-mcq",
    type: "mcq",
    title: "Ellipsis Punctuation Rule",
    eyebrow: "MCQ Question",
    category: "go-reloaded",
    estimatedTime: "4min",
    tags: ["go-reloaded", "punctuation"],
    question:
      'How should Go Reloaded format "I was thinking ... You were right"?',
    options: [
      { id: "a", label: "I was thinking ... You were right" },
      { id: "b", label: "I was thinking... You were right" },
      { id: "c", label: "I was thinking . . . You were right" },
      { id: "d", label: "I was thinking...You were right" },
    ],
    correctOptionId: "b",
    explanation:
      "Grouped punctuation like `...` should stay together with no spaces inside the group, while keeping a space before the next word.",
  },
  {
    id: "modifier-count-mcq",
    type: "mcq",
    title: "Modifier Count Behavior",
    eyebrow: "MCQ Question",
    category: "go-reloaded",
    estimatedTime: "4min",
    tags: ["go-reloaded", "case"],
    question: 'What is the correct result of "This is so exciting (up, 2)"?',
    options: [
      { id: "a", label: "THIS IS SO EXCITING" },
      { id: "b", label: "This is SO EXCITING" },
      { id: "c", label: "This IS SO EXCITING" },
      { id: "d", label: "This is so EXCITING" },
    ],
    correctOptionId: "b",
    explanation:
      "With `(up, 2)`, only the two words immediately before the marker are uppercased.",
  },
  {
    id: "hex-output-text",
    type: "text",
    title: "Hex Marker Output",
    eyebrow: "Text Input Question",
    category: "go-reloaded",
    estimatedTime: "3min",
    tags: ["go-reloaded", "hex"],
    question:
      'In the sample "Simply add 42 (hex) and 10 (bin)", what decimal number replaces `42 (hex)`?',
    context:
      "The learner should identify the decimal value produced by the (hex) marker in Go Reloaded. The correct answer is 66 because 42 is interpreted as hexadecimal.",
    placeholder: "Type the decimal number",
    acceptedAnswers: ["66"],
    explanation:
      "42 in hexadecimal equals 66 in decimal, so the transformed sentence begins with `Simply add 66 and 2`.",
  },
  {
    id: "article-rule-text",
    type: "text",
    title: "When A Becomes An",
    eyebrow: "Text Input Question",
    category: "go-reloaded",
    estimatedTime: "3min",
    tags: ["go-reloaded", "articles"],
    question:
      "Besides vowels, which starting letter also triggers the `a` to `an` rule in Go Reloaded?",
    context:
      "Go Reloaded replaces `a` with `an` when the next word begins with a vowel (a, e, i, o, u) or with one other letter mentioned in the subject. The learner should name that letter.",
    placeholder: "Type one letter",
    acceptedAnswers: ["h"],
    explanation:
      "Words like `hour` and `homosexual` require `an` because Go Reloaded also treats leading `h` as a trigger.",
  },
  {
    id: "fs-api-text",
    type: "text",
    title: "File System Focus",
    eyebrow: "Text Input Question",
    category: "go-reloaded",
    estimatedTime: "3min",
    tags: ["go-reloaded", "go", "fs"],
    question:
      "Go Reloaded reads an input file and writes an output file. Which Go standard library area does the project focus on for this?",
    context:
      "The project introduction mentions learning about Go's file system API while building a file-based text transformation tool. Accept answers referring to the file system or fs API.",
    placeholder: "Type your answer",
    acceptedAnswers: ["fs", "filesystem", "file system", "os"],
    explanation:
      "The project is designed to teach Go's file system APIs for reading input files and writing transformed output.",
  },
];
