/**
You have been given a string s, which is supposed to be a sentence. However,
someone forgot to put spaces between the different words, and for some reason
they capitalized the first letter of every word. Return the sentence after
making the following amendments:

Put a single space between the words.
Convert the uppercase letters to lowercase.
Example

For s = "CodefightsIsAwesome", the output should be
amendTheSentence(s) = "codefights is awesome";
For s = "Hello", the output should be
amendTheSentence(s) = "hello".
Input/Output

[time limit] 4000ms (js)
[input] string s

A string containing uppercase and lowercase English letters.

Guaranteed constraints:

3 ≤ s.length ≤ 100.

[output] string

The amended sentence.
*/
const { amendTheSentence } = require('./amendTheSentence');

describe('amendTheSentence()', () => {
  it('should properly format the sentence', () => {
    const s = 'CodefightsIsAwesome';
    const expected = 'codefights is awesome';

    const result = amendTheSentence(s);
    expect(result).toBe(expected);
  });

  it('should properly format the sentence', () => {
    const s = 'Hello';
    const expected = 'hello';

    const result = amendTheSentence(s);
    expect(result).toBe(expected);
  });

  it('should properly format the sentence', () => {
    const s = '';
    const expected = '';

    const result = amendTheSentence(s);
    expect(result).toBe(expected);
  });

  it('should properly format the sentence', () => {
    const s = 'JhBkPBaozMnBqEWiIaOEje';
    const expected = 'jh bk p baoz mn bq e wi ia o eje';

    const result = amendTheSentence(s);
    expect(result).toBe(expected);
  });
});
