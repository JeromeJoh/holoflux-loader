export function runExitAnimation(loader: HTMLElement) {
  const anim = loader.getAttribute('exit-animation') || 'fade-out'
  loader.classList.add(`exit-${anim}`)

  loader.addEventListener(
    'animationend',
    () => {
      loader.classList.add('hidden')
      loader.classList.remove(`exit-${anim}`)
    },
    { once: true }
  )
}
