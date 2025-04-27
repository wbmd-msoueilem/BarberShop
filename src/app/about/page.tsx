import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

const teamMembers = [
  {
    id: '1',
    name: 'طوني',
    bio: 'حلاق ماهر مع 15 عامًا من الخبرة.',
    photoUrl: 'https://picsum.photos/id/237/100/100',
    specialties: ['تلاشي', 'تشذيب اللحية'],
  },
  {
    id: '2',
    name: 'سارة',
    bio: 'خبيرة في قصات الشعر الحديثة والتلوين.',
    photoUrl: 'https://picsum.photos/id/1027/100/100',
    specialties: ['تلوين الشعر', 'قصات عصرية'],
  },
  {
    id: '3',
    name: 'كارلوس',
    bio: 'قصات كلاسيكية وحلاقة بالشفرة المستقيمة.',
    photoUrl: 'https://picsum.photos/id/1005/100/100',
    specialties: ['قصات كلاسيكية', 'حلاقة بالشفرة المستقيمة'],
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10" dir="rtl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>قصتنا</CardTitle>
          <CardDescription>نبذة عن تاريخنا ورسالتنا</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            تأسس الموضة للحلاقة العليا عام 2010 بمهمة بسيطة: تقديم أفضل خدمات قص
            وتجميل الشعر في المدينة. نحن متحمسون لمهنتنا وملتزمون بعملائنا.
          </p>
        </CardContent>
      </Card>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">تعرف على فريقنا</h2>
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
          <strong>التخصصات:</strong> {barber.specialties.join('، ')}
        </p>
      </CardContent>
    </Card>
  );
}
