import Sidebar from '@/components/dashboard/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans text-stone-900 selection:bg-stone-200 dark:bg-zinc-950 dark:text-stone-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative flex min-w-0 flex-1 flex-col bg-white dark:bg-zinc-950">
        {children}
      </div>
    </div>
  );
}
