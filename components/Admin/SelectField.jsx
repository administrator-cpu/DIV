'use client';

export default function SelectField({ label, name, error, registration, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        {...registration}
        className={`w-full rounded-xl border px-4 py-3 text-gray-900 focus:ring-2 focus:ring-offset-0 ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}