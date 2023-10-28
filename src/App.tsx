import { useState } from 'react'
import './styles.css'
import superjson from 'superjson'

import { JsonRenderView } from './ui/JsonRenderView'
import { smallArrayJson, smallObjectJson } from './data/example'
import { transformJsonToArray } from './services/transform-json-to-array'

function App() {
  const [content] = useState<string>('{}')

  const { json } = superjson.serialize(JSON.parse(content))

  const jsonArray = transformJsonToArray(JSON.parse(smallObjectJson))
  const jsonArray2 = transformJsonToArray(JSON.parse(smallArrayJson))

  console.log('result1:object', jsonArray)
  console.log('result1:array', jsonArray2)
  return (
    <div className="flex justify-between items-start min-h-screen w-full gap-4">
      <div className="p-4 border-2 border-slate-100 w-1/2 flex-1">
        <h2>Parser:</h2>
        <pre className="p-4 min-h-screen" contentEditable="true">
          {JSON.stringify(json, null, 2)}
        </pre>
      </div>
      <div className="p-4 border-2 border-green-100 w-1/2 flex-1">
        <h2>Render:</h2>
        <JsonRenderView jsonArray={jsonArray} />
      </div>
    </div>
  )
}

export default App
