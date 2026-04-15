import { useState } from 'react';

interface BookingFormProps {
  selectedSeats: number[];
  onSubmit: (passengerData: { firstName: string; lastName: string; phone: string; email: string }) => void;
  isLoading: boolean;
}

export default function BookingForm({ selectedSeats, onSubmit, isLoading }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      alert('Please select seats!');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Booking Form</h3>

      {selectedSeats.length > 0 ? (
        <div className="mb-4 text-slate-700 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
          Selected seats: <span className="font-bold text-indigo-700">{selectedSeats.join(', ')}</span>
        </div>
      ) : (
        <div className="mb-4 text-rose-600 bg-rose-50 p-3 rounded-lg border border-rose-100 font-medium">
          Please select seats on the map to continue.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Іван"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Франко"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="+380..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="ivan@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={selectedSeats.length === 0 || isLoading}
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
        >
          {isLoading ? 'Pending...' : `Book (${selectedSeats.length} seats)`}
        </button>
      </form>
    </div>
  );
}
