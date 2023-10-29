import {
  IconSpaceOff,
  IconAlignLeft,
  IconClipboardText,
} from '@tabler/icons-react'

type Props = {
  onRemoveWhitespaceClick: () => void
  onFormatClick: () => void
  onCopyClick: () => void
}

export function FormatJsonTools({
  onRemoveWhitespaceClick,
  onFormatClick,
  onCopyClick,
}: Props) {
  return (
    <div className="flex gap-2">
      <button
        title="Format JSON"
        className="w-6 h-6 p-0 flex items-center justify-center bg-slate-200 border-0 text-slate-600 hover:text-slate-800  hover:bg-slate-300"
        onClick={onFormatClick}
      >
        <IconAlignLeft size={16} />
      </button>

      <button
        title="Remove Whitespace"
        className="w-6 h-6 p-0 flex items-center justify-center bg-slate-200 border-0 text-slate-600 hover:text-slate-800  hover:bg-slate-300"
        onClick={onRemoveWhitespaceClick}
      >
        <IconSpaceOff size={16} />
      </button>

      <button
        title="Copy JSON"
        className="w-6 h-6 p-0 flex items-center justify-center bg-slate-200 border-0 text-slate-600 hover:text-slate-800  hover:bg-slate-300"
        onClick={onCopyClick}
      >
        <IconClipboardText size={16} />
      </button>
    </div>
  )
}
