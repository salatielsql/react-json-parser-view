import { VARIABLE_TYPES } from '../types'
import {
  IconLetterS,
  IconQuestionMark,
  Icon123,
  IconToggleLeft,
  IconBracketsContain,
  IconCodeDots,
  IconCircleOff,
} from '@tabler/icons-react'

const iconMap = {
  [VARIABLE_TYPES.string]: IconLetterS,
  [VARIABLE_TYPES.number]: Icon123,
  [VARIABLE_TYPES.boolean]: IconToggleLeft,
  [VARIABLE_TYPES.array]: IconBracketsContain,
  [VARIABLE_TYPES.object]: IconCodeDots,
  [VARIABLE_TYPES.null]: IconCircleOff,
}

function getIconElement(type: keyof typeof VARIABLE_TYPES) {
  if (Object.hasOwnProperty.call(iconMap, type)) {
    return iconMap[type]
  }

  return IconQuestionMark
}

export function TypeTag({
  type,
  value,
  length,
}: {
  type: keyof typeof VARIABLE_TYPES
  value: string
  length: number
}) {
  const Icon = getIconElement(type)

  return (
    <div className="p-1 rounded inline-flex items-center justify-center">
      <span className="text-slate-400">
        <Icon size={16} />
      </span>
      <span className="text-xs font-medium text-slate-500">{value}</span>
      {type === VARIABLE_TYPES.array && `[${length}]`}
      {type === VARIABLE_TYPES.object && `{${length}}`}
    </div>
  )
}
