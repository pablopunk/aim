const tau = Math.PI * 2

module.exports.circle = function (ctx, x, y, width, color = 'white') {
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.arc(x, y, width, 0, tau)
  ctx.stroke()
}
