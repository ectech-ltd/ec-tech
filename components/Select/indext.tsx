import React from 'react'
import * as RSelect from '@radix-ui/react-select'
import classnames from 'classnames'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'

const SelectItem = React.forwardRef(function SelectItem(
  { children, className, ...props }: any,
  forwardedRef,
) {
  return (
    <RSelect.Item
      className={classnames(
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <RSelect.ItemText>{children}</RSelect.ItemText>
      <RSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </RSelect.ItemIndicator>
    </RSelect.Item>
  )
})

export default function Select() {
  return (
    <RSelect.Root>
      <RSelect.Trigger
        className="inline-flex items-center justify-between border border-gray-900 rounded-lg px-4 text-sm leading-none h-10 gap-2 bg-white outline-none min-w-[256px]"
        aria-label="City"
      >
        <RSelect.Value placeholder="Chọn khu vực" />
        <RSelect.Icon className="text-violet11">
          <ChevronDownIcon />
        </RSelect.Icon>
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <RSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUpIcon />
          </RSelect.ScrollUpButton>
          <RSelect.Viewport className="p-2">
            <SelectItem value="Ho Chi Minh">Ho Chi Minh</SelectItem>
            <SelectItem value="Hanoi">Hanoi</SelectItem>
          </RSelect.Viewport>
          <RSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronDownIcon />
          </RSelect.ScrollDownButton>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  )
}
