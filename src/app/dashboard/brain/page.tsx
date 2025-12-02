'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ArrowRight, Globe, Plus, X } from 'lucide-react';

import Modal from '@/components/modal';
import { INITIAL_BRAIN_ITEMS } from '@/constants';
import { BrainItem } from '@/types';

export default function BrainPage() {
  const [items, setItems] = useState<BrainItem[]>(INITIAL_BRAIN_ITEMS);
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState<Partial<BrainItem>>({
    type: 'doc',
    tags: [],
  });

  const handleAdd = () => {
    if (!newItem.title || !newItem.url) return;

    const item: BrainItem = {
      id: Math.random().toString(36),
      title: newItem.title,
      url: newItem.url,
      description: newItem.description || '',
      type: newItem.type || 'doc',
      tags: newItem.tags || [],
      dateAdded: new Date().toISOString(),
      favicon: `https://picsum.photos/32/32?random=${Math.random()}`,
    };

    setItems([...items, item]);
    setIsAdding(false);
    setNewItem({ type: 'doc', tags: [] });
  };
  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-slide-up-fade p-4 md:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-stone-900 dark:text-stone-100">
              Brain
            </h1>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
              Context sources for SiteScope AI.
            </p>
          </div>
          <button
            onClick={() => setIsAdding(true)}
            className="flex cursor-pointer items-center gap-2 rounded-sm bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            <Plus size={16} /> Add Source
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item: BrainItem) => (
            <div
              key={item.id}
              className="group relative flex h-56 flex-col rounded-sm border border-stone-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-stone-100 bg-stone-50 dark:border-zinc-700 dark:bg-zinc-800">
                  {item.favicon ? (
                    <Image
                      src={item.favicon}
                      width={20}
                      height={20}
                      alt={`${item.title || 'favicon'}`}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    <Globe size={20} className="text-stone-400" />
                  )}
                </div>
                <button className="cursor-pointer text-stone-300 opacity-0 transition-opacity group-hover:opacity-100 hover:text-red-500">
                  <X size={16} />
                </button>
              </div>
              <h3 className="mb-1 truncate font-semibold text-stone-900 dark:text-stone-100">
                {item.title}
              </h3>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mb-4 flex items-center gap-1 truncate text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
              >
                {item.url} <ArrowRight size={10} className="-rotate-45" />
              </a>
              <p className="line-clamp-2 flex-1 text-sm text-stone-500 dark:text-stone-400">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-sm bg-stone-100 px-2 py-0.5 text-[10px] font-medium tracking-wider text-stone-600 uppercase dark:bg-zinc-800 dark:text-stone-400">
                  {item.type}
                </span>
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-sm border border-stone-200 px-2 py-0.5 text-[10px] font-medium text-stone-500 dark:border-zinc-700 dark:text-stone-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isAdding && (
        <Modal title="Add Knowledge Source" onClose={() => setIsAdding(false)}>
          <div className="space-y-4">
            <input
              placeholder="Title (e.g., Landing Page)"
              className="w-full rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              value={newItem.title || ''}
              onChange={e => setNewItem({ ...newItem, title: e.target.value })}
            />
            <input
              placeholder="URL (e.g., https://site.com)"
              className="w-full rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              value={newItem.url || ''}
              onChange={e => setNewItem({ ...newItem, url: e.target.value })}
            />
            <textarea
              placeholder="Description of this asset..."
              className="h-24 w-full resize-none rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              value={newItem.description || ''}
              onChange={e =>
                setNewItem({ ...newItem, description: e.target.value })
              }
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsAdding(false)}
                className="cursor-pointer rounded-sm px-4 py-2 text-sm text-stone-500 hover:bg-stone-50 dark:text-stone-400 dark:hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="cursor-pointer rounded-sm bg-stone-900 px-4 py-2 text-sm text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                Add Source
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
