import { classNames } from 'shared/lib/class-names/class-names';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', ['additionalClass'])).toBe(
      'someClass additionalClass',
    );
  });

  test('with mods', () => {
    const mods = { selected: true };

    expect(classNames('someClass', [], mods)).toBe('someClass selected');
  });

  test('with mods false', () => {
    const mods = { selected: false };

    expect(classNames('someClass', [], mods)).toBe('someClass');
  });
});
