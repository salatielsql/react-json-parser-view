export const isURL = (string: string): boolean => {
  if (!string) return false

  return !!string.match(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  )
}
