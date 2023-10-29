export function transformJsonToArray(json: any): any[] {
  if (!json) {
    return []
  }

  return Object.keys(json).map((key) => {
    const value = json[key]
    const type = typeof value

    if (type !== 'object') return { key, value, type }

    if (Array.isArray(value)) {
      return { key, type: 'array', value: transformJsonToArray(value) }
    }

    return { key, type, value: transformJsonToArray(value) }
  })
}
