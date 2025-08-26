import React  from 'react'
import Styles from './Link.module.css'

const Link = ({children, ...rest}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={Styles.link} {...rest}>{children}</a>
  )
}

export default Link