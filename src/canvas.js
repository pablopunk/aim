const div = 1.2
const width = document.body.clientWidth / div
const height = document.body.clientHeight / div

const canvas = document.createElement('canvas')
canvas.id = 'main-canvas'
canvas.width = width
canvas.height = height

document.querySelector('#canvas').innerHtml = ''
document.querySelector('#canvas').appendChild(canvas)

const ctx = canvas.getContext('2d')

module.exports = { canvas, ctx, height, width }
