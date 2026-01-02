export async function runExitAnimation(loader: HTMLElement) {
  // loader.classList.add(`exit-fade-out`)
  //   loader.addEventListener(
  //   'animationend',
  //   () => {
  //     loader.classList.remove(`exit-fade-out`)
  //     console.log('animationend hook')
  //   },
  //   { once: true }
  // )

  const anim = loader.animate([{ opacity: 1 }, { opacity: 0 }], {
    delay: 300,
    duration: 600,
    easing: 'ease-in',
  })

  await anim.finished
}
