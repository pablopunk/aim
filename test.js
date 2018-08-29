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

test('Target can be killed touching it 5 times', async t => {
  const target = new Target(10, 10, 5)

  target.touched(10, 10)
  t.false(target.dead())
  target.touched(10, 10)
  t.false(target.dead())
  target.touched(10, 10)
  t.false(target.dead())
  target.touched(10, 10)
  t.false(target.dead())
  target.touched(10, 10)
  t.true(target.dead())
})

test('Target can be shrunk', async t => {
  const target = new Target(10, 10, 10)

  t.is(target.width, 10)
  target.shrink()
  t.is(target.width, 8)
})
