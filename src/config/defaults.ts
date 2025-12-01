import { LoaderOptions } from './types'

export function parseOptions(el: HTMLElement): LoaderOptions {
  return {
    edgeProgress: el.hasAttribute('edge-progress'),
  }
}
