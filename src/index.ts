import { HolofluxLoader } from '@/HolofluxLoader'

if (!customElements.get('holoflux-loader')) {
  customElements.define('holoflux-loader', HolofluxLoader)
}

export * from '@/HolofluxLoader'
