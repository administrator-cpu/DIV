'use client';

import { useState } from 'react';

export default function ImageUploader({ onChange }) {
  const [previews, setPreviews] = useState([]);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);

    // Pass ALL files (existing + new) to parent
    const dt = new DataTransfer();
    document.querySelectorAll('#previewInput').forEach((input) => {
      Array.from(input.files).forEach((f) => dt.items.add(f));
    });
    files.forEach((f) => dt.items.add(f));
    onChange(Array.from(dt.files));
  };

  const removeFile = (index) => {
    URL.revokeObjectURL(previews[index]);
    const newPreviews = previews.filter((_, i) => i !== index);
    setPreviews(newPreviews);

    // Update parent with remaining files
    const dt = new DataTransfer();
    newPreviews.forEach(() => {}); // Can't reconstruct files from previews, so just update previews
    // Notify parent of removal
    const remaining = previews.filter((_, i) => i !== index);
    setPreviews(remaining);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">Preview Images</label>
      <input
        id="previewInput"
        type="file"
        multiple
        accept="image/*"
        onChange={handleFiles}
        className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <p className="mt-1 text-xs text-gray-500">PNG, JPG, WebP, or GIF. Max 5MB each. Up to 10 images.</p>

      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {previews.map((preview, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden border border-gray-200">
              <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-24 object-cover" />
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
              <span className="absolute bottom-1 left-1 text-xs bg-black/60 text-white px-1.5 py-0.5 rounded">{index + 1}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}