import { HolofluxLoader } from '@/HoloFluxLoader'

if (!customElements.get('holoflux-loader')) {
  customElements.define('holoflux-loader', HolofluxLoader)
}

export * from '@/HoloFluxLoader'
