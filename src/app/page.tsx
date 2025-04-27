'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {cn} from '@/lib/utils';
import {MapEmbed} from '@/components/map-embed';
import {Facebook, Instagram, Twitter} from 'lucide-react';
import {getServiceRecommendation} from '@/ai/flows/service-recommendation';
import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"

const shopInfo = {
  name: 'SharpCut Barbershop',
  tagline: 'Where style meets precision.',
  address: '123 Main Street, Anytown USA',
  phone: '555-123-4567',
  email: 'info@sharpcut.com',
  socialMedia: {
    facebook: 'https://facebook.com/sharpcut',
    instagram: 'https://instagram.com/sharpcut',
    twitter: 'https://twitter.com/sharpcut',
  },
  welcomeMessage: `Welcome to SharpCut Barbershop! We're dedicated to providing the highest quality cuts and grooming services in a relaxed and modern atmosphere.`,
};

const barbers = [
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

export default function Home() {
  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleRecommendation = async () => {
    const result = await getServiceRecommendation({preferences: preferences});
    setRecommendation(result.recommendation);
  };

  const { state } = useSidebar()

  return (
    <div className="container flex">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/about">About</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/gallery">Gallery</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/contact">Contact</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/policy">Policy</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/book-now">Book Now</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 p-4">
          <>
      <HeroSection shopName={shopInfo.name} tagline={shopInfo.tagline} />

      <div className="container mx-auto py-10">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{shopInfo.name}</CardTitle>
            <CardDescription>{shopInfo.welcomeMessage}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Address:</strong> {shopInfo.address}
            </p>
            <p>
              <strong>Phone:</strong> {shopInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {shopInfo.email}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href={shopInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
              <a href={shopInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a href={shopInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
            </div>
            <div className="mt-4">
              <MapEmbed address={shopInfo.address} />
            </div>
          </CardContent>
        </Card>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Barbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barbers.map(barber => (
              <BarberCard key={barber.id} barber={barber} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Recommendation</h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Input
              type="text"
              placeholder="Enter your preferences (e.g., short hair, beard trim)"
              value={preferences}
              onChange={e => setPreferences(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleRecommendation}>Get Recommendation</Button>
          </div>
          {recommendation && (
            <div className="mt-4">
              <strong>Recommendation:</strong> {recommendation}
            </div>
          )}
        </section>
      </div>
    </>
      </div>
    </div>
  );
}

function HeroSection({shopName, tagline}: {shopName: string; tagline: string}) {
  return (
    <section
      className="relative py-24 bg-gray-100"
      style={{
        backgroundImage: 'url(https://picsum.photos/id/39/1600/400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">{shopName}</h1>
        <p className="text-xl text-gray-200">{tagline}</p>
        <Button className="mt-8">Book Now</Button>
      </div>
    </section>
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
