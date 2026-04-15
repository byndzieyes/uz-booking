import { Link } from 'react-router-dom';
import type { Train } from '../data/trains';

interface TrainCardProps {
  train: Train;
}

export default function TrainCard({ train }: TrainCardProps) {
  const dateObj = new Date(train.departureTime);
  const formattedDate = dateObj.toLocaleDateString('uk-UA', { day: '2-digit', month: 'short' });
  const formattedTime = dateObj.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-center justify-between">
      <div className="flex flex-col md:flex-row gap-6 w-full items-start md:items-center">
        <div className="bg-indigo-50 text-indigo-700 font-bold px-4 py-2 rounded-xl text-center min-w-20">
          {train.trainNumber}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            {train.departureCity} <span className="text-slate-400 mx-2">→</span> {train.arrivalCity}
          </h3>
          <p className="text-slate-500 text-sm flex gap-4">
            <span>Duration: {train.duration}</span>
          </p>
        </div>

        <div className="text-left md:text-right">
          <div className="text-2xl font-black text-slate-900">{formattedTime}</div>
          <div className="text-slate-500 font-medium">{formattedDate}</div>
        </div>
      </div>

      <Link
        to={`/booking/${train.id}`}
        className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors whitespace-nowrap text-center"
      >
        Select Seats
      </Link>
    </div>
  );
}
