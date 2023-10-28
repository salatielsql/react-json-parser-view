export function transformJsonToArray(json: any): any[] {
  if (!json) {
    return []
  }
  console.log(typeof json, Array.isArray(json))

  if (Array.isArray(json)) {
    return [
      { type: 'array', key: 'root', value: json.map(transformJsonToArray) },
    ]
  }

  return [
    {
      type: 'object',
      key: 'root',
      value: Object.keys(json).flatMap((key) => {
        console.log({ key })
        const value = json[key]
        const type = typeof value

        if (type === 'object' && !Array.isArray(value)) {
          return [{ key, type, value: transformJsonToArray(value) }]
        }

        if (type === 'object' && Array.isArray(value)) {
          return [{ key, type: 'array', value: transformJsonToArray(value) }]
        }

        return [{ key, value, type }]
      }),
    },
  ]
}
