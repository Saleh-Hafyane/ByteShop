import { Order } from './order';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order(10,4000)).toBeTruthy();
  });
});
