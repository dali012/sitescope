'use client';

import { useEffect, useState } from 'react';

import {
  Clock,
  Edit2,
  FileText,
  MoreHorizontal,
  Pause,
  Play,
  Stethoscope,
  Trash2,
  X,
} from 'lucide-react';

import { SCHEDULED_TASKS } from '@/constants';

export default function QueuePage() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedTasks.length === SCHEDULED_TASKS.length) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(SCHEDULED_TASKS.map(task => task.id));
    }
  };

  const toggleSelectTask = (taskId: string) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter(id => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (openMenuId && !target.closest('.menu-container')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuId]);

  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-slide-up-fade p-4 md:p-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-light text-stone-900 dark:text-stone-100">
              Task Queue
            </h1>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
              Scheduled monitoring tasks and execution status.
            </p>
          </div>
          <div className="flex w-full gap-2 md:w-auto">
            {selectedTasks.length > 0 ? (
              <div className="animate-fade-in flex items-center gap-2">
                <span className="mr-2 text-sm text-stone-500 dark:text-stone-400">
                  {selectedTasks.length} selected
                </span>
                <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-600 hover:bg-stone-50 md:flex-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-stone-300 dark:hover:bg-zinc-800">
                  <Pause size={14} /> Pause
                </button>
                <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm border border-red-100 bg-red-50 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-100 md:flex-none dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30">
                  <Trash2 size={14} /> Delete
                </button>
                <button
                  onClick={() => setSelectedTasks([])}
                  className="flex cursor-pointer items-center justify-center rounded-sm border border-stone-200 bg-white p-2 text-stone-500 hover:bg-stone-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-stone-400 dark:hover:bg-zinc-800"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <>
                <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-600 hover:bg-stone-50 md:flex-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-stone-300 dark:hover:bg-zinc-800">
                  <Pause size={14} /> Pause All
                </button>
                <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm bg-stone-900 px-3 py-2 text-xs font-medium text-white hover:bg-stone-800 md:flex-none dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white">
                  <Play size={14} /> Run Now
                </button>
              </>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-stone-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="overflow-x-auto">
            <table className="relative w-full min-w-[800px] text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 font-medium text-stone-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-stone-400">
                <tr>
                  <th className="w-10 px-6 py-3">
                    <input
                      type="checkbox"
                      checked={
                        selectedTasks.length === SCHEDULED_TASKS.length &&
                        SCHEDULED_TASKS.length > 0
                      }
                      onChange={toggleSelectAll}
                      className="rounded-sm border-stone-300 text-stone-900 focus:ring-stone-900 dark:border-zinc-700 dark:bg-zinc-800 dark:checked:bg-stone-200"
                    />
                  </th>
                  <th className="px-6 py-3">Task Name</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Frequency</th>
                  <th className="px-6 py-3">Next Run</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-zinc-800">
                {SCHEDULED_TASKS.map((task, index) => {
                  const isLastItems = index >= SCHEDULED_TASKS.length - 2;
                  return (
                    <tr
                      key={task.id}
                      className="group transition-colors hover:bg-stone-50/50 dark:hover:bg-zinc-800/30"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedTasks.includes(task.id)}
                          onChange={() => toggleSelectTask(task.id)}
                          className="rounded-sm border-stone-300 text-stone-900 focus:ring-stone-900 dark:border-zinc-700 dark:bg-zinc-800 dark:checked:bg-stone-200"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-stone-900 dark:text-stone-200">
                        {task.name}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium capitalize ${
                            task.type === 'uptime'
                              ? 'border border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400'
                              : task.type === 'performance'
                                ? 'border border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-900/20 dark:text-indigo-400'
                                : 'border border-stone-200 bg-stone-100 text-stone-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-stone-400'
                          }`}
                        >
                          {task.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-stone-500 dark:text-stone-400">
                        {task.frequency}
                      </td>
                      <td className="flex items-center gap-2 px-6 py-4 text-stone-500 dark:text-stone-400">
                        <Clock size={14} />
                        {task.nextRun}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              task.status === 'active' ||
                              task.status === 'success'
                                ? 'bg-green-500'
                                : task.status === 'failed'
                                  ? 'animate-pulse bg-red-500'
                                  : 'bg-stone-400'
                            }`}
                          ></div>
                          <span className="text-stone-700 capitalize dark:text-stone-300">
                            {task.status === 'success' ? 'Active' : task.status}
                          </span>
                        </div>
                      </td>
                      <td className="relative flex items-center justify-end gap-2 px-6 py-4 text-right">
                        {task.status === 'failed' && (
                          <button className="animate-fade-in flex items-center gap-1.5 rounded-sm border border-red-100 bg-red-50 px-2 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-100 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30">
                            <Stethoscope size={12} /> Analyze
                          </button>
                        )}
                        {task.status === 'success' &&
                          task.hasRecentIncident && (
                            <button className="animate-fade-in flex items-center gap-1.5 rounded-sm border border-indigo-100 bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:border-indigo-900/50 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/30">
                              <FileText size={12} /> Post-Mortem
                            </button>
                          )}
                        <div className="menu-container relative">
                          <button
                            onClick={() =>
                              setOpenMenuId(
                                openMenuId === task.id ? null : task.id,
                              )
                            }
                            className="cursor-pointer text-stone-400 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
                          >
                            <MoreHorizontal size={18} />
                          </button>

                          {openMenuId === task.id && (
                            <div
                              className={`animate-fade-in absolute right-0 z-50 w-40 rounded-sm border border-stone-200 bg-white text-left shadow-xl dark:border-zinc-800 dark:bg-zinc-900 ${
                                isLastItems
                                  ? 'bottom-full mb-1'
                                  : 'top-full mt-1'
                              }`}
                            >
                              <button className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-xs text-stone-700 transition-colors hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-zinc-800">
                                <Pause size={12} /> Pause
                              </button>
                              <button className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-xs text-stone-700 transition-colors hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-zinc-800">
                                <Edit2 size={12} /> Edit Config
                              </button>
                              <div className="my-1 border-t border-stone-100 dark:border-zinc-800"></div>
                              <button className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-xs text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10">
                                <Trash2 size={12} /> Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
