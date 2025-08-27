import React from 'react'

interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement>{
    value: string;
    label: string;
}

const SelectorOption = ({value, label}: SelectorOption) => {
  return (
    <option value={value}>{label}</option>
  )
}

export default SelectorOption
