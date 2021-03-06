import namehash from './namehash'

it('should allow to specify parent', async () => {
  const one = namehash("hello.zil")
  const two = namehash("hello", {parent: namehash('zil')})
  expect(one).toEqual(two)
});

it('should hash empty name', async () => {
  expect(namehash('')).toEqual('0x0000000000000000000000000000000000000000000000000000000000000000')
});

it('should zil zone', async () => {
  expect(namehash('zil')).toEqual('0x9915d0456b878862e822e2361da37232f626a2e47505c8795134a95d36138ed3')
});
it('should label.zil', async () => {
  expect(namehash('label1.zil')).toEqual('0xcdd867def9a6228893521bc9ee5f2c69ed1481f5795defe7ae7683276e3b9c64')
});

it('should support no prefix', async () => {
  expect(namehash('', {prefix: false})).toEqual('0000000000000000000000000000000000000000000000000000000000000000')
});
