const API = 'https://6707f6e58e86a8d9e42da09c.mockapi.io/api/todo/tasks/';

export const getTodos = async () => {
  try {
    const response = await fetch(`${API}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const todosData = await response.json();

    return todosData;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const deleteTodo = async (id) => {
  try {
    fetch(`${API}${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

export const addTodo = async (newTask) => {
  try {
    const response = await fetch(`${API}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    const responseData = response.json();

    return responseData;
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};
