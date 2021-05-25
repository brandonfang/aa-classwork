export const fetchTodos = () => (
  $.ajax({
    url: '/api/todos',
    method: 'GET'
  })
);