import { isURL } from '../helpers/is-url'
import { VARIABLE_TYPES } from '../types'

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
            <span className="font-mono text-slate-600">{item.key}</span>
            <span className="font-mono text-slate-400 text-xs ml-1">
              {item.type === VARIABLE_TYPES.array && `[${item.value.length}]`}
              {item.type === VARIABLE_TYPES.object &&
                `{${Object.keys(item.value).length}}`}
            </span>
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
          <span className="mx-1 text-slate-400">:</span>

          {isBoolean && (
            <span
              className={`font-mono italic ${
                String(item.value) === 'true'
                  ? 'text-emerald-500'
                  : 'text-red-500'
              }`}
            >
              {isBoolean ? String(item.value) : item.value}
            </span>
          )}

          {isString && (
            <span>
              <span className="font-mono text-neutral-400 select-none">"</span>
              {isURL(item.value as string) ? (
                <a
                  href={item.value as string}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="font-mono text-stone-500 underline hover:text-blue-500"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-mono text-stone-500">{item.value}</span>
              )}

              <span className="font-mono text-neutral-400 select-none">"</span>
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
