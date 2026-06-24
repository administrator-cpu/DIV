export default function Divider({ text }) {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-gray-50 px-4 text-gray-500">{text}</span>
      </div>
    </div>
  );
}