export const onDeleteTodo = (id) => {
  console.log(id)
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}