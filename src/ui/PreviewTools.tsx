import { IconArrowAutofitUp, IconArrowAutofitDown } from '@tabler/icons-react'

type Props = {
  onCollapseAllClick: () => void
  onExpandAllClick: () => void
}

export function PreviewTools({ onCollapseAllClick, onExpandAllClick }: Props) {
  return (
    <div className="flex gap-2">
      <button
        title="Expand All"
        className="w-6 h-6 p-0 flex items-center justify-center bg-slate-200 border-0 text-slate-600 hover:text-slate-800  hover:bg-slate-300"
        onClick={onExpandAllClick}
      >
        <IconArrowAutofitDown size={16} />
      </button>

      <button
        title="Collapse All"
        className="w-6 h-6 p-0 flex items-center justify-center bg-slate-200 border-0 text-slate-600 hover:text-slate-800  hover:bg-slate-300"
        onClick={onCollapseAllClick}
      >
        <IconArrowAutofitUp size={16} />
      </button>
    </div>
  )
}
