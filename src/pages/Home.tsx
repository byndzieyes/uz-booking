import { useState } from 'react';
import { trainsData } from '../data/trains';
import TrainList from '../components/TrainList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trainsData.filter((train) => {
    const query = searchQuery.toLowerCase();
    return (
      train.trainNumber.toLowerCase().includes(query) ||
      train.departureCity.toLowerCase().includes(query) ||
      train.arrivalCity.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Tickets for trains</h1>
        <p className="text-slate-500">Book train tickets quickly and conveniently.</p>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <input
          type="text"
          placeholder="From, to or train number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-lg"
        />
      </div>

      <TrainList trains={filteredTrains} />
    </div>
  );
}
