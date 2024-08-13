'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getUserBookingHistory } from '../_services/GlobalApi';
import BookingHistoryList from '@/app/_components/BookingHistoryList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookingType } from '../_types/bookingType';
export default function BookingDetails() {
  const { data } = useSession();
  const [bookingHistory, setBookingHistory] = useState<BookingType[]>();
  useEffect(() => {
    async function getBookings() {
      if (data?.user?.email) {
        const bookings = await getUserBookingHistory(data.user.email);
        setBookingHistory(bookings);
      }
    }
    getBookings();
  }, [data?.user?.email]);

  const completedBooking =
    bookingHistory?.filter(
      item =>
        new Date(item.date).setHours(0, 0, 0, 0) <
        new Date().setHours(0, 0, 0, 0)
    ) || [];

  const uncompletedBooking =
    bookingHistory?.filter(
      item =>
        new Date(item.date).setHours(0, 0, 0, 0) >=
        new Date().setHours(0, 0, 0, 0)
    ) || [];

  return (
    <>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          {bookingHistory && (
            <BookingHistoryList bookingHistory={uncompletedBooking} />
          )}
        </TabsContent>
        <TabsContent value="completed">
          {bookingHistory && (
            <BookingHistoryList bookingHistory={completedBooking} />
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
