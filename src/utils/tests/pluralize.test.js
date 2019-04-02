import pluralize from '../pluralize';

test.each([[['cat', 0], 'cats'], [['cat', 1], 'cat'], [['cat', 2], 'cats']])(
  `isEmpty.array(%s)`,
  (pair, expected) => {
    expect(pluralize(pair[0], pair[1])).toBe(expected);
  }
);
