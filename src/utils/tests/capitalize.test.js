import capitalize from '../capitalize';

test.each([['', ''], ['cat', 'Cat'], ['small cat', 'Small cat']])(
  `capitalize(%s)`,
  (input, expected) => {
    expect(capitalize(input)).toBe(expected);
  }
);
