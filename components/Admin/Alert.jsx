'use client';

export default function Alert({ type = 'error', message }) {
  if (!message) return null;

  const styles = {
    error: {
      border: 'border-red-200 bg-red-50',
      icon: (
        <svg className="h-5 w-5 text-red-500 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      text: 'text-red-700',
    },
    success: {
      border: 'border-green-200 bg-green-50',
      icon: (
        <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: 'text-green-700',
    },
  };

  const s = styles[type];

  return (
    <div className={`mb-6 rounded-xl border ${s.border} p-4`}>
      <div className="flex items-start gap-3">
        {s.icon}
        <p className={`text-sm ${s.text}`}>{message}</p>
      </div>
    </div>
  );
}