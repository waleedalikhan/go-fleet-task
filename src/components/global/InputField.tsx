import React from 'react'
import cn from 'classnames'

type Props = {
  fieldLabel?: string
  fieldType: string
  value?: string
  placeholderText?: string
  isRequired?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  hasSymbol?: boolean
  symbol?: string
  hasIcon?: boolean
  icon?: React.ReactNode
  labelClassName?: any
}

const InputField: React.FC<Props> = ({
  fieldType = 'text',
  fieldLabel,
  value,
  placeholderText,
  isRequired,
  onChange,
  hasSymbol,
  symbol,
  hasIcon,
  icon,
  labelClassName,
}) => {
  return (
    <>
      {!hasIcon && (
        <div className="group">
          {fieldLabel && (
            <label className={cn('block text-black-900 mb-1', labelClassName)}>
              {fieldLabel}{' '}
              {isRequired && <span className="text-red-600">*</span>}
            </label>
          )}
          <div className="relative flex items-center py-px">
            {hasSymbol && (
              <div className="absolute pl-3 pr-4 right-px bg-white flex items-center">
                <span className="uppercase text-black-400 tracking-primary-spacing">
                  {symbol}
                </span>
              </div>
            )}
            <input
              type={fieldType}
              className="block w-full rounded-md border border-card-border-color text-black-900 shadow-sm shadow-[rgba(54,55,68,0.05)] placeholder:text-black-400 focus:border-primary py-2.5 px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none outline-none"
              placeholder={placeholderText}
              required={isRequired}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      )}
      {hasIcon && (
        <div className="group">
          {fieldLabel && (
            <label className="block text-black-900 mb-1">
              {fieldLabel}{' '}
              {isRequired && <span className="text-red-600">*</span>}
            </label>
          )}
          <div className="relative flex items-center gap-3 rounded-md border border-card-border-color focus:border-primary py-2.5 px-3 shadow-sm shadow-[rgba(54,55,68,0.05)]">
            <div className="text-black-400">{icon}</div>
            <div className="flex-1">
              <input
                type={fieldType}
                className="block w-full text-black-900 placeholder:text-black-400 focus:ring-0 focus:ring-offset-0 focus:outline-none outline-non border-0 bg-transparent p-0"
                placeholder={placeholderText}
                required={isRequired}
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default InputField
