"use client";

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
import {ar} from 'date-fns/locale';

const services = [
  {id: '1', name: 'قص شعر', price: '٣٠'},
  {id: '2', name: 'تشذيب اللحية', price: '٢٠'},
  {id: '3', name: 'حلاقة', price: '٢٥'},
];

const barbers = [
  {id: '1', name: 'طوني'},
  {id: '2', name: 'سارة'},
];

export default function BookNowPage() {
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const {toast} = useToast();

  const handleSubmit = () => {
    // Placeholder - Implement actual booking submission logic here.
    toast({
      title: 'تم إرسال الحجز!',
      description: `${name} ${service} مع ${barber} في ${date ? format(date, 'PPP', {locale: ar}) : 'تاريخ محدد'} ${time} تم طلبه.`,
    });
  };

  return (
    <div className="container mx-auto py-10 text-right">
      <h1 className="text-3xl font-semibold mb-6">احجز موعدك</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir="rtl">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>تفاصيل الموعد</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <Label htmlFor="service">اختر الخدمة</Label>
                <Select onValueChange={setService}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر خدمة" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(serviceItem => (
                      <SelectItem
                        key={serviceItem.id}
                        value={serviceItem.name}>
                        {serviceItem.name} ({serviceItem.price})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="barber">اختر الحلاق</Label>
                <Select onValueChange={setBarber}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر حلاق" />
                  </SelectTrigger>
                  <SelectContent >
                    {barbers.map(barberItem => (
                      <SelectItem key={barberItem.id} value={barberItem.name}>
                        {barberItem.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>اختر التاريخ</Label>
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
                      {date ? format(date, 'PPP', {locale: ar}) : <span>اختر تاريخ</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      locale={ar}
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      dir="rtl"
                    />
                  </PopoverContent>

                </Popover>
              </div>

              <Input type="time" placeholder="Select Time" />
              <Input type="text" placeholder="Your Name" />
              <Input type="tel" placeholder="Your Phone" />

              <Button onClick={handleSubmit}>تأكيد الحجز</Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader >
              <CardTitle>خدماتنا</CardTitle>
            </CardHeader>
            <CardContent>
              {services.map(serviceItem => (
                <div key={serviceItem.id} className="mb-4">
                  <strong>{serviceItem.name}</strong> - {serviceItem.price}
                  <p>وصف موجز للخدمة</p>
                </div>
              ))}




            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
