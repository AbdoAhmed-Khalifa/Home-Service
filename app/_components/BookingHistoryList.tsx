'use client';
import { format } from 'date-fns';
import Image from 'next/image';
import { BookingType } from '../_types/bookingType';
import { User, MapPin, Calendar, Clock } from 'lucide-react';
export default function BookingHistoryList({
  bookingHistory,
}: {
  bookingHistory: BookingType[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {bookingHistory.map((booking, index) => (
        <div key={index} className="flex gap-4 rounded-lg border p-4 mb-5">
          <Image
            src={booking.business.images[0]}
            alt={booking.business.name}
            width={120}
            height={120}
            className="rounded-lg object-cover"
          />

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">{booking.business.name}</h2>
            <h2 className="flex gap-2 text-primary">
              <User className="text-primary" /> {booking.business.contactPerson}
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <MapPin className="text-primary" /> {booking.business.address}
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <Calendar className="text-primary" /> Service on :{' '}
              <span className="text-black">
                {format(new Date(booking.date), 'dd/MMM/yyyy')}
              </span>
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <Clock className="text-primary" /> Service on :{' '}
              <span className="text-black">{booking.time}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
