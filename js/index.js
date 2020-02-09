let speed = 10
let step = 50
document.querySelector('.img4 .border-font').addEventListener('click', goTop)
document.querySelector('.img1 .border-font').addEventListener('click', goBottom)
document
  .querySelector('.img2 .border-font')
  .addEventListener('click', function() {
    goZoom('.img2')
  })
document
  .querySelector('.img3 .border-font')
  .addEventListener('click', function() {
    goZoom('.img3')
  })

function goTop() {
  let currentPosition, timer

  currentPosition = document.documentElement.scrollTop
  currentPosition -= step

  if (currentPosition > 0) {
    window.scrollTo(0, currentPosition)
    timer = setTimeout('goTop()', speed) // 不加引号的话相当于直接执行函数
  } else {
    currentPosition = 0
    window.scrollTo(0, 0)
    window.clearTimeout(timer)
  }
}

function goBottom() {
  let currentPosition, timer
  let maxHeight = document.querySelector('html').scrollHeight
  let windowHeight = document.body.clientHeight

  currentPosition = document.documentElement.scrollTop
  currentPosition += step

  if (currentPosition < maxHeight - windowHeight) {
    window.scrollTo(0, currentPosition)
    timer = setTimeout('goBottom()', speed) // 不加引号的话相当于直接执行函数
  } else {
    currentPosition = maxHeight
    window.scrollTo(0, maxHeight)
    window.clearTimeout(timer)
  }
}

function goZoom(divName) {
  if (document.querySelector(divName).style.height === '100%') {
    document.querySelector(divName).style.height = '400px'
  } else {
    document.querySelector(divName).style.height = '100%'
  }
}
