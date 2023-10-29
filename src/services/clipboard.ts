export const Clipboard = {
  copyText: (text: string) => {
    return navigator.clipboard.writeText(text)
  },
}
