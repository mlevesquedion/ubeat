import isEmpty from '../isEmpty';

test.each(
  [
    [[], true],
    [[1], false],
    [[[[[[]]]]], false],
    [{}, true],
    [{ a: 1 }, false],
    [{ a: {} }, false]
  ]
)(
  `isEmpty.array(%s)`,
  (obj, expected) => {
    expect(isEmpty(obj))
      .toBe(expected);
  }
);
