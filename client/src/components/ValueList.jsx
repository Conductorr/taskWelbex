import React, { memo } from 'react'
import ValueItem from './ValueItem'

function ValueList({posts, triggerRef}) {
  return (
    <>
    {posts.map((post, index) => (
        <ValueItem triggerRef={index === posts.length - 1 ? triggerRef : undefined} key={post.autoincrement} posts={post} />
      ))}
      </>
  )
}

export default memo(ValueList) 

