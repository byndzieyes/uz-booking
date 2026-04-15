export interface BookingData {
  trainId: string;
  wagonId: number;
  seats: number[];
  passengerInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
}

const STORAGE_KEY = 'uz_bookings';

export const BookingService = {
  getAllBookings: (): BookingData[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveBooking: (booking: BookingData): void => {
    const bookings = BookingService.getAllBookings();
    bookings.push(booking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  },

  getBookedSeats: (trainId: string, wagonId: number): number[] => {
    const bookings = BookingService.getAllBookings();
    const relevantBookings = bookings.filter((b) => b.trainId === trainId && b.wagonId === wagonId);

    const bookedSeats: number[] = [];
    relevantBookings.forEach((booking) => {
      bookedSeats.push(...booking.seats);
    });

    return bookedSeats;
  },
};
