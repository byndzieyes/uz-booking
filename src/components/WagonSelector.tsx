interface WagonSelectorProps {
  wagons: number[];
  selectedWagon: number;
  onSelectWagon: (wagonId: number) => void;
}

export default function WagonSelector({ wagons, selectedWagon, onSelectWagon }: WagonSelectorProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-slate-900 mb-3">Choose train car:</h3>
      <div className="flex gap-3 flex-wrap">
        {wagons.map((wagon) => (
          <button
            key={wagon}
            onClick={() => onSelectWagon(wagon)}
            className={`px-4 py-2 rounded-xl font-medium transition-colors border shadow-sm ${
              selectedWagon === wagon
                ? 'bg-indigo-600 text-white border-indigo-700'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Сar {wagon}
          </button>
        ))}
      </div>
    </div>
  );
}
