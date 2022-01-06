export const saveTodoInLocal = (data) => {
  const localData = JSON.parse(localStorage.getItem('todos'));
  const dataTostore = localData !== null ? { ...localData, data } : data;

  localStorage.setItem('todos', JSON.stringify(dataTostore));
};

export const getTodoById = (list, id) => list.find((item) => +item.id === +id);
