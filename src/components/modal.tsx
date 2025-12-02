import { X } from 'lucide-react';

const Modal = ({
  title,
  onClose,
  children,
  danger = false,
}: {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
  danger?: boolean;
}) => (
  <div
    className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 p-4 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div className="animate-scale-up flex max-h-[90vh] w-full max-w-[500px] flex-col overflow-hidden rounded-sm bg-white shadow-xl dark:border dark:border-zinc-800 dark:bg-zinc-900">
      <div
        className={`border-b px-6 py-4 ${danger ? 'border-red-100 bg-red-50/50 dark:border-red-900/30 dark:bg-red-900/10' : 'border-stone-100 dark:border-zinc-800'} flex shrink-0 items-center justify-between`}
      >
        <h3
          id="modal-title"
          className={`font-medium ${danger ? 'text-red-700 dark:text-red-400' : 'text-stone-900 dark:text-stone-200'}`}
        >
          {title}
        </h3>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
      <div className="overflow-y-auto p-6">{children}</div>
    </div>
  </div>
);

export default Modal;
