import test from 'ava'
import {Target} from './src/target'

test('Target can be touched correctly', async t => {
  const target = new Target(10, 10, 5)

  t.true(target.touched(5, 5))
  t.true(target.touched(15, 15))
  t.true(target.touched(10, 10))
  t.true(target.touched(12, 12))
  t.true(target.touched(9, 9))
  t.false(target.touched(16, 16))
  t.false(target.touched(4, 4))
  t.false(target.touched(16, 10))
  t.false(target.touched(10, 16))
})
