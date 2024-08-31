import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reduxToolkit/slice/todoSlice';

function AddTodo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({ name, email }));
        setName('');
        setEmail('');
    };
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 lg:w-[400px] rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                className="bg-gray-800 lg:w-[400px] rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
