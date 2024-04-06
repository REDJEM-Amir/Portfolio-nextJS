import React from 'react'
import css from '@/styles/containerFeed.module.css'

const ContainerFeed = ({
  children
}:{
  children?: React.ReactNode;
}) => {
  return (
    <div className={css.container}>
      {children}
    </div>
  )
}

export default ContainerFeed