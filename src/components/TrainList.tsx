import TrainCard from './TrainCard';
import type { Train } from '../data/trains';

interface TrainListProps {
  trains: Train[];
}

export default function TrainList({ trains }: TrainListProps) {
  if (trains.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
        <h3 className="text-xl font-bold mt-4 text-slate-900">Trains not found</h3>
        <p className="text-slate-500 mt-2">Try changing the search parameters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}
