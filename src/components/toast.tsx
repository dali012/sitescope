import { AlertTriangle, Check, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export const ToastContainer = ({
  toasts,
  removeToast,
}: {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}) => (
  <div className="pointer-events-none fixed right-6 bottom-6 z-60 flex flex-col gap-3">
    {toasts.map(toast => (
      <div
        key={toast.id}
        className="animate-slide-up-fade pointer-events-auto flex min-w-[300px] items-center gap-3 rounded-sm bg-stone-900 px-4 py-3 text-white shadow-lg dark:bg-white dark:text-stone-900"
      >
        {toast.type === 'success' && (
          <Check size={16} className="text-green-400 dark:text-green-600" />
        )}
        {toast.type === 'error' && (
          <AlertTriangle size={16} className="text-red-400 dark:text-red-600" />
        )}
        {toast.type === 'info' && (
          <Info size={16} className="text-blue-400 dark:text-blue-600" />
        )}
        <span className="flex-1 text-sm font-medium">{toast.message}</span>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-stone-500 hover:text-white dark:hover:text-stone-600"
        >
          <X size={14} />
        </button>
      </div>
    ))}
  </div>
);
