import test from 'ava'
import {Target} from './src/target'
import {Bounds} from './src/bounds'

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

test('Target can move', async t => {
  const target = new Target(10, 10, 10, 0.2, 0.4)

  t.is(target.x, 10)
  t.is(target.y, 10)
  target.delta()
  t.is(target.x, 10.2)
  t.is(target.y, 10.4)
})

function testBounds (t, x, y, changedX, changedY) {
  const bounds = new Bounds({width: 100, height: 100})
  let target = new Target(10, 10, 10, -1, -2)

  const oldSpeedX = -1
  const oldSpeedY = -2

  target.x = x
  target.y = y
  target = bounds.check(target)
  t.is(target.speedX !== oldSpeedX, changedX)
  t.is(target.speedY !== oldSpeedY, changedY)
}

test('Target changes direction at bounds', async t => {
  testBounds(t, 10, 11, true, false)
  testBounds(t, 9, 11, true, false)
  testBounds(t, 11, 10, false, true)
  testBounds(t, 11, 9, false, true)
  testBounds(t, 90, 89, true, false)
  testBounds(t, 91, 89, true, false)
  testBounds(t, 89, 90, false, true)
})
