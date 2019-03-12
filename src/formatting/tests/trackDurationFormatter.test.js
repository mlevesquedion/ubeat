import durationFormatter from '../trackDurationFormatter';

test.each([
  [0, '0:00'],
  [1, '0:01'],
  [13, '0:13'],
  [63, '1:03'],
  [1322, '22:02']
])(`.format(%i)`, (timeMillis, expected) => {
  expect(durationFormatter.format(timeMillis)).toBe(expected);
});
