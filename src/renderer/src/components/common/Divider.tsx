interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

function Divider({ orientation = 'horizontal' }: DividerProps) {
  const baseClasses = 'bg-gray-300'
  const orientationClasses = orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full'

  return <div className={`${baseClasses} ${orientationClasses}`} />
}

export default Divider
