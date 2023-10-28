type JsonProp = {
  key: string
  value: string | number | JsonProp[]
  type: string
}

type Props = {
  jsonArray: JsonProp[]
}

export function JsonRenderView({ jsonArray }: Props) {
  return jsonArray.map((item) => {
    if (typeof item.value === 'object') {
      return (
        <details className="bg-slate-200 p-2" key={item.key}>
          <summary>
            ({item.type}) {item.key}
          </summary>

          <p className="bg-slate-50 p-2">
            {typeof item.value === 'object' ? (
              <JsonRenderView jsonArray={item.value} />
            ) : (
              JSON.stringify(item.value)
            )}
          </p>
        </details>
      )
    }

    return (
      <div className="bg-slate-200 p-2" key={item.key}>
        ({item.type}) {item.key}: {item.value}
      </div>
    )
  })
}
