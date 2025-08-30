
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

const initialTasks = [
  { id: 1, text: 'Use a reusable water bottle today', points: 10, completed: false },
  { id: 2, text: 'Unplug electronics when not in use', points: 5, completed: false },
  { id: 3, text: 'Sort your recyclables correctly', points: 15, completed: true },
  { id: 4, text: 'Take a shorter shower (under 5 mins)', points: 20, completed: false },
];

export default function EcoTasks({ addXp }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    const newTaskObject = {
      id: Date.now(),
      text: newTask,
      points: Math.floor(Math.random() * 10) + 5, // Random points between 5 and 14
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id && !task.completed) {
        addXp(task.points);
        return { ...task, completed: true };
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <section className="page">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-headings">Your Eco Missions</h2>
        <p className="text-muted">Complete tasks to earn XP and level up your green journey!</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add your own eco task..."
            className="flex-grow p-3 rounded-lg border bg-transparent focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="btn primary p-3 flex items-center justify-center">
            <Plus size={20} />
          </button>
        </form>

        <div className="space-y-3">
          <AnimatePresence>
            {tasks.map(task => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="task-checkbox"
                    disabled={task.completed}
                  />
                  <span className="flex-grow">{task.text}</span>
                  <span className="task-points">+{task.points} XP</span>
                </div>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}