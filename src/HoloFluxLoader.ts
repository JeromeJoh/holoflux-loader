import base from '@/styles/base.css?inline'
import anim from '@/styles/animations.css?inline'
import slots from '@/styles/slots.css?inline'
import edges from '@/styles/progress-edge.css?inline'

import { listenLoaderEvents } from './utils/eventBus'
import { runExitAnimation } from './utils/animation'
import { LoaderOptions } from './config/types'
import { parseOptions } from './config/defaults'

export class HolofluxLoader extends HTMLElement {
  shadow: ShadowRoot
  progress = 0
  options: LoaderOptions
  $overlay: HTMLElement

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.options = parseOptions(this)
    this.shadow.innerHTML = `
      <style>${base}${anim}${slots}${edges}</style>
      <div class="overlay ${this.options.edgeProgress ? '' : 'no-edges'}">
        
        <div class="edge top"></div>
        <div class="edge right"></div>
        <div class="edge bottom"></div>
        <div class="edge left"></div>

        <slot name="top-left"></slot>
        <slot name="top-right"></slot>
        <slot name="bottom-left"></slot>
        <slot name="bottom-right"></slot>
        <slot name="spotlight"></slot>

        <div class="loader-core">
          <slot></slot>
        </div>
      </div>
    `
  }

  connectedCallback() {
    listenLoaderEvents(this)
    this.$overlay = this.shadowRoot.querySelector('.overlay')
    this.classList.add('ready')
    console.log(11111111111, this.$overlay)
  }

  setProgress(value: number) {
    this.progress = value
    const edges = this.shadow.querySelectorAll('.edge')
    edges.forEach((edge) => {
      ;(edge as HTMLElement).style.setProperty('--progress', String(value))
    })
  }

  show() {
    this.classList.remove('hidden')
  }

  hide() {
    runExitAnimation(this.$overlay)
  }
}
