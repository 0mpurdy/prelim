import { ShortDatePipe } from './short-date.pipe';

describe('ShortDatePipe', () => {

  let pipe: ShortDatePipe;

  beforeEach(() => {

    pipe = new ShortDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should map normal time', () => {
    const date = new Date(2017, 2, 1, 22, 13, 17);
    const shortTime = pipe.transform(date);
    expect(shortTime).toBe('22:13');
  });

  it('should map time with single digit hours and minutes', () => {
    const date = new Date(2017, 2, 1, 4, 7, 17);
    const shortTime = pipe.transform(date);
    expect(shortTime).toBe('04:07');
  });

});
