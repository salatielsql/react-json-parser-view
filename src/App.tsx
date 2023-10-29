import { ChangeEvent, useMemo, useState } from 'react'
import './styles.css'
import superjson from 'superjson'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import toast, { Toaster } from 'react-hot-toast'

import { JsonRenderView } from './ui/JsonRenderView'
import { transformJsonToArray } from './services/transform-json-to-array'
import { JsonTransformers } from './services/json-transform'
import { FormatJsonTools } from './ui/FormatJsonTools'
import { PreviewTools } from './ui/PreviewTools'
import { Header } from './ui/Header'

import { Clipboard } from './services/clipboard'
import { STORAGE_KEYS } from './types'

function App() {
  const [isCollapseOpen, setCollapseOpen] = useState(true)
  const [content, setContent] = useState(
    localStorage.getItem(STORAGE_KEYS.jsonSource) || '{}'
  )

  const serializedContent = useMemo(
    () => superjson.serialize(JSON.parse(content)),
    [content]
  )

  const jsonArray = useMemo(
    () => transformJsonToArray(serializedContent.json),
    [serializedContent]
  )

  const handleCopyJson = async () => {
    try {
      await Clipboard.copyText(content)
      toast.success('Copied to clipboard!')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  const handleJSONChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const json = event.target.value

      JSON.parse(json)
      setContent(json)
      localStorage.setItem(STORAGE_KEYS.jsonSource, json)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <>
      <Header />

      <PanelGroup autoSaveId="react-json-parser-view" direction="horizontal">
        <Panel defaultSize={40} className="p-4 bg-slate-50">
          <div className="flex justify-between pb-4">
            <h2 className="font-bold text-slate-600 ">JSON</h2>
            <FormatJsonTools
              onRemoveWhitespaceClick={() =>
                setContent(JsonTransformers.removeWhiteSpaceFromString(content))
              }
              onFormatClick={() =>
                setContent(JsonTransformers.formatFromString(content))
              }
              onCopyClick={handleCopyJson}
            />
          </div>

          <textarea
            className="font-mono text-sm p-4 min-h-screen w-full bg-slate-50 focus:outline-none border-2 border-transparent rounded focus:border-blue-100"
            value={content}
            onChange={handleJSONChange}
          ></textarea>
        </Panel>
        <PanelResizeHandle className="w-1 min-h-screen bg-slate-100 hover:bg-blue-200" />

        <Panel className="p-4" defaultSize={60}>
          <div className="flex justify-between pb-4">
            <h2 className="font-bold text-slate-600">Preview</h2>
            <PreviewTools
              onExpandAllClick={() => setCollapseOpen(true)}
              onCollapseAllClick={() => setCollapseOpen(false)}
            />
          </div>

          <JsonRenderView
            jsonArray={jsonArray}
            isCollapseOpen={isCollapseOpen}
          />
        </Panel>
      </PanelGroup>
      <Toaster />
    </>
  )
}

export default App
