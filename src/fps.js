let fps = 0

module.exports.renderFps = function () {
  document.querySelector('#fps').innerText = `${fps} fps`
  fps = 0
}

module.exports.oneMoreFps = function () {
  fps++
}

window.setInterval(module.exports.renderFps, 1000)
