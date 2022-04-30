import React from 'react'
import { useTodos } from '../hooks/useTodos'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const { todos } = useTodos()

  return (
    <ul style={{
      userSelect: 'none',
      listStyle: 'none'
    }}>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
      }
    </ul>
  )
}
