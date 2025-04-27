'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Calendar} from '@/components/ui/calendar';
import {cn} from '@/lib/utils';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {CalendarIcon} from 'lucide-react';
import {format} from 'date-fns';
import {useToast} from '@/hooks/use-toast';

const services = [
  {id: '1', name: 'Haircut', price: 30},
  {id: '2', name: 'Beard Trim', price: 20},
  {id: '3', name: 'Shave', price: 25},
];

const barbers = [
  {id: '1', name: 'Tony'},
  {id: '2', name: 'Sarah'},
];

export default function BookNowPage() {
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const {toast} = useToast();

  const handleSubmit = () => {
    // Placeholder - Implement actual booking submission logic here.
    toast({
      title: 'Booking Submitted!',
      description: `Your ${service} with ${barber} on ${date ? format(date, 'PPP') : 'selected date'} has been requested.`,
    });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Book Your Appointment</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <Label htmlFor="service">Select Service</Label>
                <Select onValueChange={setService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(serviceItem => (
                      <SelectItem key={serviceItem.id} value={serviceItem.name}>
                        {serviceItem.name} (${serviceItem.price})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="barber">Select Barber</Label>
                <Select onValueChange={setBarber}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a barber" />
                  </SelectTrigger>
                  <SelectContent>
                    {barbers.map(barberItem => (
                      <SelectItem key={barberItem.id} value={barberItem.name}>
                        {barberItem.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                  </PopoverContent>
                </Popover>
              </div>

              <Input type="time" placeholder="Select Time" />
              <Input type="text" placeholder="Your Name" />
              <Input type="tel" placeholder="Your Phone" />

              <Button onClick={handleSubmit}>Submit Booking</Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              {services.map(serviceItem => (
                <div key={serviceItem.id} className="mb-4">
                  <strong>{serviceItem.name}</strong> - ${serviceItem.price}
                  <p>A brief description of the service.</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
