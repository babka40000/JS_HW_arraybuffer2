import ArrayBufferConverter from '../index';

const converter = new ArrayBufferConverter();
test('test convertion', () => {
  converter.load('Любое тестовое значение');
  expect(converter.toString()).toBe('Любое тестовое значение');
});
