'use client';
import { Calendar } from '@/components/ui/calendar';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { NotebookPen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createNewBooking, getBookedBusiness } from '../_services/GlobalApi';
import { BusinessListType } from '../_types/businessListType';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { format } from 'date-fns';

interface TimeSlot {
  time: string;
}

export default function BookingSection() {
  const [date, setDate] = useState<Date | undefined>();
  const params = useParams();
  const [timeSlot, setTimeSlot] = useState<TimeSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>();
  const [bookedSlot, setBookedSlot] = useState<
    { date: string; time: string }[]
  >([]);

  const { data } = useSession();

  useEffect(() => {
    getTime();
  }, []);

  function getTime() {
    const timeList: TimeSlot[] = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: `${i}:00 AM`,
      });
      timeList.push({
        time: `${i}:30 AM`,
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: `${i}:00 PM`,
      });
      timeList.push({
        time: `${i}:30 PM`,
      });
    }
    setTimeSlot(timeList);
  }

  useEffect(() => {
    async function bookedList() {
      if (date !== undefined) {
        const data = await getBookedBusiness(
          params.BusinessId as string,
          date.toLocaleDateString('en-GB')
        );
        setBookedSlot(data);
      }
    }
    bookedList();
  }, [date, params.BusinessId]);

  async function saveBooking() {
    try {
      if (
        !date ||
        !selectedTime ||
        !data ||
        !data.user ||
        !data.user.email ||
        !data.user.name
      ) {
        throw new Error('Missing required information for booking');
      }
      const id = await createNewBooking(
        params.BusinessId as string,
        format(new Date(date), 'dd/MMM/yyyy'),
        selectedTime,
        data.user.email,
        data.user.name
      );
      setDate(undefined);
      setSelectedTime('');
      toast('Service booked successfully');
    } catch (error) {
      console.error('Error:', error);
      toast('Error while creating booking');
    }
  }

  function getBookedTime(time: string): boolean {
    return bookedSlot.find(item => item.time === time)?.time ? true : false;
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button title="Book Appointment" className="flex gap-2 w-full">
            <NotebookPen />
            <span className=" lg:block hidden">Book Appointment</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">
              Book a Service
            </SheetTitle>
            <SheetDescription className="text-lg">
              Select Date and Time to book a service
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-5 items-baseline">
            <h2 className="mt-5 mb-2 font-bold text-xl">Select Date</h2>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div className="mb-10">
            <h2 className="my-5 font-bold text-xl">Select Time</h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlot.map((item, index) => (
                <Button
                  onClick={() => setSelectedTime(item.time)}
                  key={index}
                  disabled={getBookedTime(item.time)}
                  variant="outline"
                  className={`border rounded-full p-2 px-3 hover:bg-primary hover:text-blue-50 ${
                    selectedTime === item.time && 'bg-primary text-blue-50'
                  }`}
                >
                  {item.time}
                </Button>
              ))}
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <div className="flex gap-5">
                <Button variant="destructive" type="submit">
                  Cancel
                </Button>
              </div>
            </SheetClose>
            <Button
              onClick={saveBooking}
              type="submit"
              disabled={!selectedTime || !date}
            >
              Book
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
