import create from 'zustand';

const useTodoStore = create((set) => ({
// TODO: answer here
todos: [],

addTodo: (todo) => 
    set((state) => ({
        todos: [todo,
            ...state.todos,
        ]
    })),

removeTodo: (selectedId) => 
    set((state) => ({
        todos: state.todos.filter((t) => t.id !== selectedId)
    })),

toggleTodo: (selectedId) => 
    set((state) => ({
        todos: state.todos.map((t) => 
            t.id === selectedId ? { ...t, isDone: !t.isDone} :t
        ),
    })),

}));


export default useTodoStore;

