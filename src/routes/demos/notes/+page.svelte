<script lang="ts">
    import { onMount } from 'svelte';
  
    interface Todo {
      id: string;
      text: string;
      completed: boolean;
      createdAt: string;
    }
  
    let todos: Todo[] = [];
    let newTodoText: string = '';
  
    onMount(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        todos = JSON.parse(storedTodos);
      }
    });
  
    function saveTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  
    function addTodo() {
      if (newTodoText.trim()) {
        const newTodo: Todo = {
          id: crypto.randomUUID(),
          text: newTodoText,
          completed: false,
          createdAt: new Date().toISOString()
        };
        todos = [...todos, newTodo];
        saveTodos();
        newTodoText = '';
      }
    }
  
    function toggleTodo(id: string) {
      todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodos();
    }
  
    function deleteTodo(id: string) {
      todos = todos.filter(todo => todo.id !== id);
      saveTodos();
    }
  
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        addTodo();
      }
    }
  </script>
  
  <div class="max-w-2xl mx-auto p-6">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Todo List</h1>
      
      <div class="flex gap-2">
        <input
          type="text"
          bind:value={newTodoText}
          on:keypress={handleKeyPress}
          placeholder="Add a new todo..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          on:click={addTodo}
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  
    <div class="space-y-3">
      {#if todos.length === 0}
        <p class="text-gray-500 text-center py-8">No todos yet. Add one above!</p>
      {/if}
      
      {#each todos as todo (todo.id)}
        <div
          class="flex items-center gap-3 p-4 bg-slate-800 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            on:change={() => toggleTodo(todo.id)}
            class="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
          />
          <span class="flex-1 {todo.completed ? 'line-through text-slate-500' : 'text-white'}">
            {todo.text}
          </span>
          <button
            on:click={() => deleteTodo(todo.id)}
            class="text-red-500 hover:text-red-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 112 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      {/each}
    </div>
  </div>