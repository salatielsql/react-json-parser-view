export const JsonTransformers = {
  formatFromString: (jsonString: string) => {
    try {
      const json = JSON.parse(jsonString)

      return JSON.stringify(json, null, 2)
    } catch (e) {
      console.error(e)
      return ''
    }
  },
  removeWhiteSpaceFromString: (jsonString: string) => {
    try {
      const json = JSON.parse(jsonString)

      return JSON.stringify(json)
    } catch (e) {
      console.error(e)
      return ''
    }
  },
}
