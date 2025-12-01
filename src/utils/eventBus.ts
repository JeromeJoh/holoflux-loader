import { HolofluxLoader } from '@/HolofluxLoader'

export function listenLoaderEvents(loader: HolofluxLoader) {
  window.addEventListener('hololoader:show', () => loader.show())
  window.addEventListener('hololoader:hide', () => loader.hide())
  window.addEventListener('hololoader:progress', (e: any) => {
    loader.setProgress(e.detail.value)
  })
}
