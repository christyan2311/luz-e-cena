import React  from 'react'
import styles from './Button.module.css'
import className from 'classnames'

type ButtonProps = {
  variant: 'default' | 'icon'
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> 

const Button = ({children, variant = 'default', ...rest}: ButtonProps) => {
  const classMap = {
    default: styles.default,
    icon: styles.icon
  };


  return (
    <button className={className(styles.botao, classMap[variant])} {...rest}>
      {children}</button>
  )
}

export default Button