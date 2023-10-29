import { IconBrandGithub, IconCodeDots } from '@tabler/icons-react'

export function Header() {
  return (
    <div className="flex w-full h-8 justify-between bg-slate-800 text-slate-50 px-4">
      <div className="flex items-center justify-center">
        <IconCodeDots />
        <h1 className="text-base font-bold ml-1">JSON Parser View</h1>
      </div>
      <div className="flex items-center justify-end">
        <a href="#" className="text-slate-50 hover:text-slate-100">
          <IconBrandGithub size={16} />
        </a>
      </div>
    </div>
  )
}
