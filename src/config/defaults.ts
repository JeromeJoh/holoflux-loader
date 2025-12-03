import { LoaderOptions } from './types'

export function parseOptions(el: HTMLElement): LoaderOptions {
  return {
    edgeProgress: el.getAttribute('edge-progress') || 'no-edges',
    bgColor: el.getAttribute('bg-color') || 'black',
    fgColor: el.getAttribute('fg-color') || 'white',
  }
}
