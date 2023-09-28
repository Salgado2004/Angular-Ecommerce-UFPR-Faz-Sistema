import { MoneyPipe } from './money.pipe';

describe('MoneyPipe', () => {
  it('create an instance', () => {
    const pipe = new MoneyPipe();
    expect(pipe).toBeTruthy();
  });
});
