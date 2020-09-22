import React, { useState } from 'react'

export const SkuCard = (props) => {
  const { value, label, onChange, disabled, activate, style } = props
  const [innerActive, setInnerActive] = useState(activate ?? false)

  const handleChange = (value) => () => {
    if (!disabled) {
      onChange?.(value, !innerActive)
      setInnerActive(!innerActive)
    }
  }

  return (
    <div
      className={
        disabled ?? false
          ? 'disabled'
          : activate ?? innerActive
          ? 'activate'
          : 'normal'
      }
      onClick={handleChange(value)}
      style={{ ...(style ?? {}) }}
    >
      {label}
    </div>
  )
}
