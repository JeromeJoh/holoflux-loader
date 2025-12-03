export function runExitAnimation(loader: HTMLElement) {
  loader.classList.add(`exit-fade-out`)

  const anim = loader.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 2000,
    easing: 'ease-in',
  })

  anim.onfinish = () => loader.classList.add('hidden')

  loader.addEventListener(
    'animationend',
    () => {
      loader.classList.remove(`exit-fade-out`)
      console.log('animationend hook')
    },
    { once: true }
  )
}
