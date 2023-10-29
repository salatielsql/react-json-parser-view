// import { TypeTag } from './TypeTag'

type JsonProp = {
  key: string
  value: string | number | JsonProp[]
  type: string
}

type Props = {
  jsonArray: JsonProp[]
  isCollapseOpen: boolean
}

export function JsonRenderView({ jsonArray, isCollapseOpen }: Props) {
  return jsonArray.map((item) => {
    if (typeof item.value === 'object') {
      return (
        <details className="p-0.5" key={item.key} open={isCollapseOpen}>
          <summary className="cursor-pointer">
            {/* <TypeTag
              type={item.type}
              value={item.key}
              length={
                item.type === 'array'
                  ? item.value.length
                  : Object.keys(item.value).length
              }
            /> */}

            <span className="font-mono text-slate-600">{item.key}</span>
          </summary>

          <div className="ml-1 pl-4 border-l border-slate-100">
            {typeof item.value === 'object' ? (
              <JsonRenderView
                jsonArray={item.value}
                isCollapseOpen={isCollapseOpen}
              />
            ) : (
              JSON.stringify(item.value)
            )}
          </div>
        </details>
      )
    }
    console.log(item.key, item.value, item.type)
    const isBoolean = item.type === 'boolean'
    const isString = item.type === 'string'
    const isNumber = item.type === 'number'

    return (
      <div className="my-1 h-5 flex" key={item.key}>
        <div className="flex">
          <span className="font-mono text-slate-600">{item.key}</span>
          {/* <TypeTag type={item.type} /> */}
          <span className="mx-1 text-slate-400">:</span>

          {isBoolean && (
            <span
              className={`font-mono ${
                String(item.value) === 'true'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {isBoolean ? String(item.value) : item.value}
            </span>
          )}

          {isString && (
            <span className="font-mono text-neutral-500">
              <span className="font-mono text-neutral-300 select-none">"</span>
              {item.value}
              <span className="font-mono text-neutral-300 select-none">"</span>
            </span>
          )}

          {isNumber && (
            <span className="font-mono text-cyan-600">{item.value}</span>
          )}
        </div>
      </div>
    )
  })
}
