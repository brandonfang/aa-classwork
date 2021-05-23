export const allTodos = (state) => (
  Object.values(state.todos).map((todo => todo))
);

