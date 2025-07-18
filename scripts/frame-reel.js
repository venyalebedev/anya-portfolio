let frameWrapper = document.querySelector('#frame-wrapper')
let frameReel = document.querySelector('#frame-reel')

// Создать переменную с именем проекта
// Добавить цикл для назначения условий: чтобы скрипт применялся только для

let frameCount = 14

for (let i = 1; i <= frameCount; i = i + 1) {
  let image = document.createElement('img')
  image.src = `https://venyalebedev.github.io/anya-portfolio/images/pravdinsk-identity/cover-sequence/pravdinsk-cover-${i}.jpg`

  frameReel.append(image)
}

frameWrapper.addEventListener('mousemove', function(event) {
  let rect = frameWrapper.getBoundingClientRect()

  let progress = (event.clientX - rect.left) / (rect.width)
  let frameNumber = (Math.floor(progress * frameCount))

  frameNumber = Math.max(frameNumber, 0)

  frameReel.style.marginLeft = -100 * frameNumber + '%'
})