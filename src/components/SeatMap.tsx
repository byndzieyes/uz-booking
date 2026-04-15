interface SeatMapProps {
  totalSeats: number;
  bookedSeats: number[];
  selectedSeats: number[];
  onToggleSeat: (seatNumber: number) => void;
}

export default function SeatMap({ totalSeats, bookedSeats, selectedSeats, onToggleSeat }: SeatMapProps) {
  const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

  return (
    <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Seat map:</h3>

      <div className="flex gap-4 mb-6 text-sm font-medium">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-slate-300 rounded"></div> Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-indigo-600 rounded"></div> Selected
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-rose-500 rounded"></div> Booked
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-4 justify-items-center max-w-sm mx-auto">
        {seats.map((seat) => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              disabled={isBooked}
              onClick={() => onToggleSeat(seat)}
              className={`w-12 h-14 sm:w-14 sm:h-16 rounded-xl flex items-center justify-center font-bold text-lg transition-all shadow-sm
                ${
                  isBooked
                    ? 'bg-rose-500 text-white cursor-not-allowed opacity-70 border-b-4 border-rose-700'
                    : isSelected
                      ? 'bg-indigo-600 text-white border-b-4 border-indigo-800 hover:bg-indigo-700 transform -translate-y-1'
                      : 'bg-white text-slate-700 border border-slate-200 border-b-4 border-b-slate-300 hover:bg-slate-100'
                }
              `}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
