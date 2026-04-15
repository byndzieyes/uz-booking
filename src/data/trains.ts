export interface Train {
  id: string;
  trainNumber: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  duration: string;
}

export const trainsData: Train[] = [
  {
    id: '1',
    trainNumber: '091К',
    departureCity: 'Київ',
    arrivalCity: 'Львів',
    departureTime: '2026-05-10T22:37:00',
    duration: '7 hours 15 min',
  },
  {
    id: '2',
    trainNumber: '105Ш',
    departureCity: 'Одеса',
    arrivalCity: 'Київ',
    departureTime: '2026-05-10T21:10:00',
    duration: '9 hours 30 min',
  },
  {
    id: '3',
    trainNumber: '063Х',
    departureCity: 'Харків',
    arrivalCity: 'Київ',
    departureTime: '2026-05-11T07:15:00',
    duration: '5 hours 45 min',
  },
  {
    id: '4',
    trainNumber: '743Д',
    departureCity: 'Дніпро',
    arrivalCity: 'Львів',
    departureTime: '2026-05-11T09:20:00',
    duration: '13 hours 10 min',
  },
  {
    id: '5',
    trainNumber: '705К',
    departureCity: 'Київ',
    arrivalCity: 'Перемишль',
    departureTime: '2026-05-12T06:00:00',
    duration: '8 hours 05 min',
  },
];
