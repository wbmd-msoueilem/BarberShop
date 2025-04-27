import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

const teamMembers = [
  {
    id: '1',
    name: 'Tony',
    bio: 'Master barber with 15 years of experience.',
    photoUrl: 'https://picsum.photos/id/237/100/100',
    specialties: ['Fades', 'Beard Trims'],
  },
  {
    id: '2',
    name: 'Sarah',
    bio: 'Expert in modern hairstyles and coloring.',
    photoUrl: 'https://picsum.photos/id/1027/100/100',
    specialties: ['Hair Coloring', 'Modern Styles'],
  },
  {
    id: '3',
    name: 'Carlos',
    bio: 'Classic cuts and straight razor shaves.',
    photoUrl: 'https://picsum.photos/id/1005/100/100',
    specialties: ['Classic Cuts', 'Straight Razor Shaves'],
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
          <CardDescription>A brief history and mission statement.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lebjawi Barbershop was founded in 2010 with a simple mission: to provide the best haircuts and grooming services in town. We're passionate about
            our craft and dedicated to our customers.
          </p>
        </CardContent>
      </Card>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <BarberCard key={member.id} barber={member} />
          ))}
        </div>
      </section>
    </div>
  );
}

function BarberCard({barber}: {barber: any}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={barber.photoUrl} alt={barber.name} />
            <AvatarFallback>{barber.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle>{barber.name}</CardTitle>
        </div>
        <CardDescription>{barber.bio}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Specialties:</strong> {barber.specialties.join(', ')}
        </p>
      </CardContent>
    </Card>
  );
}
