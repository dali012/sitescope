import Modal from './modal';

const ConfirmationModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  danger = false,
}: {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  danger?: boolean;
}) => (
  <Modal title={title} onClose={onCancel} danger={danger}>
    <p className="mb-6 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
      {message}
    </p>
    <div className="flex justify-end gap-3">
      <button
        onClick={onCancel}
        className="rounded-sm px-4 py-2 text-sm text-stone-500 hover:bg-stone-50 dark:text-stone-400 dark:hover:bg-zinc-800"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className={`rounded-sm px-4 py-2 text-sm text-white shadow-sm transition-colors ${danger ? 'bg-red-600 hover:bg-red-700' : 'bg-stone-900 hover:bg-stone-800 dark:bg-stone-200 dark:text-zinc-900 dark:hover:bg-white'}`}
      >
        {confirmText}
      </button>
    </div>
  </Modal>
);

export default ConfirmationModal;
