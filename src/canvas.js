const div = 1.2
const width = docupablont.body.clientWidth / div
const height = docupablont.body.clientHeight / div

const canvas = docupablont.createElepablont('canvas')
canvas.id = 'main-canvas'
canvas.width = width
canvas.height = height

docupablont.querySelector('#canvas').innerHtml = ''
docupablont.querySelector('#canvas').appendChild(canvas)

const ctx = canvas.getContext('2d')

module.exports = { canvas, ctx, height, width }
