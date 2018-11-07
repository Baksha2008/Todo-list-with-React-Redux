export const onAddTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}