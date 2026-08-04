'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] flex flex-col items-center justify-center text-center px-4 font-serif">
      <div className="text-3xl text-[#d4af37] font-serif mb-2">Notice</div>
      <h2 className="text-xl font-light text-white mb-2">Reservation System Interrupted</h2>
      <p className="text-gray-400 text-xs max-w-md mb-6 font-sans">
        An error occurred while connecting to the kitchen registry or table availability system.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#c49f27] text-black font-bold text-xs font-sans rounded-xl transition-colors uppercase tracking-wider"
      >
        Retry Booking Service
      </button>
    </div>
  );
}
