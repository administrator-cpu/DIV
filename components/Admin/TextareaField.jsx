'use client';

export default function TextareaField({ label, name, error, registration, placeholder, required, rows = 4, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        rows={rows}
        {...registration}
        {...props}
        className={`w-full rounded-xl border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0 resize-none ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}