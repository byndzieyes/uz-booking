import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { trainsData } from '../data/trains';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { BookingService } from '../services/BookingService';

export default function Booking() {
  const { trainId } = useParams<{ trainId: string }>();
  const navigate = useNavigate();

  const train = trainsData.find((t) => t.id === trainId);

  const [selectedWagon, setSelectedWagon] = useState<number>(1);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableWagons = [1, 2, 3];
  const seatsPerWagon = 24;

  const bookedSeats = trainId ? BookingService.getBookedSeats(trainId, selectedWagon) : [];

  const handleWagonSelect = (wagonId: number) => {
    setSelectedWagon(wagonId);
    setSelectedSeats([]);
  };

  if (!train) return <div className="text-center py-20 text-xl font-bold">Train not found</div>;

  const handleToggleSeat = (seat: number) => {
    setSelectedSeats((prev) => (prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]));
  };

  const handleBookingSubmit = (passengerData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }) => {
    if (!trainId) return;

    setIsSubmitting(true);

    setTimeout(() => {
      BookingService.saveBooking({
        trainId,
        wagonId: selectedWagon,
        seats: selectedSeats,
        passengerInfo: passengerData,
      });

      alert(
        `Tickets successfully booked!\nTrain: ${train.trainNumber}\nCar: ${selectedWagon}\nSeats: ${selectedSeats.join(', ')}`,
      );
      navigate('/');
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <Link to="/" className="text-indigo-600 hover:underline mb-6 inline-block font-medium">
        ← Back
      </Link>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <h1 className="text-2xl font-black text-slate-900 mb-2">
          Train {train.trainNumber}: {train.departureCity} → {train.arrivalCity}
        </h1>
        <p className="text-slate-500">
          Departure: {new Date(train.departureTime).toLocaleString('uk-UA')} | Duration: {train.duration}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <WagonSelector wagons={availableWagons} selectedWagon={selectedWagon} onSelectWagon={handleWagonSelect} />
          <SeatMap
            totalSeats={seatsPerWagon}
            bookedSeats={bookedSeats}
            selectedSeats={selectedSeats}
            onToggleSeat={handleToggleSeat}
          />
        </div>

        <div>
          <BookingForm selectedSeats={selectedSeats} onSubmit={handleBookingSubmit} isLoading={isSubmitting} />
        </div>
      </div>
    </div>
  );
}
