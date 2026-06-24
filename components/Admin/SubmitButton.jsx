'use client';

export default function SubmitButton({ isSubmitting, label = 'Save', loadingLabel = 'Saving...', onCancel }) {
  return (
    <div className="flex gap-4 pt-4 border-t border-gray-100">
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-sm font-bold text-white shadow-lg hover:from-pink-600 hover:to-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {loadingLabel}
          </span>
        ) : (
          label
        )}
      </button>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
        >
          Cancel
        </button>
      )}
    </div>
  );
}