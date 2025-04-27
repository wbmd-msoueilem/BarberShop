# **App Name**: SharpCut

## Core Features:

- Shop Information Display: Display shop information including name, address, phone number, and social media links.
- Barber Profiles: Showcase barber profiles with photos, bios, and specialties.
- Service Recommendation: AI tool that suggest services based on customer preferences.

## Style Guidelines:

- Primary color: Dark gray (#333) for a modern, sophisticated look.
- Secondary color: Light gray (#f0f0f0) for backgrounds and subtle accents.
- Accent: Teal (#008080) for buttons and interactive elements.
- Clean and minimalist layout with clear sections and ample whitespace.
- Use sharp, modern icons for services and social media links.

## Original User Request:
Okay, here is a comprehensive prompt you can provide to Firebase Studio (or a similar AI code generation tool) to create the barbershop website you've described. This prompt incorporates all your requirements, including the Next.js/React structure, TypeScript controllers for Firestore interaction, page details, and the visual style from your image.

Prompt for AI Code Generation (e.g., Firebase Studio):

"Generate a modern, responsive barbershop website using Next.js (App Router) and React.js. The entire codebase should use TypeScript (.ts and .tsx files only). All dynamic content (shop info, services, team, gallery, policies, bookings) must be fetched from and submitted to Cloud Firestore using dedicated TypeScript controllers for each data entity. The website should have a clean, simple, and intuitive design, optimized for all devices.

1. Project Setup & Configuration:

Framework: Next.js 14+ (using App Router)
Language: TypeScript
Styling: Tailwind CSS (configure tailwind.config.ts and globals.css)
State Management: Use React Context API or Zustand if necessary for managing booking state or user sessions (optional).
Firebase: Initialize Firebase SDK for web (v9 modular SDK) in a dedicated configuration file (lib/firebaseConfig.ts or similar). Use environment variables for Firebase credentials.
2. Firestore Data Structure:

Define the following Firestore collections:
settings: A single document (e.g., main) containing shop name, address, phone, email, social media URLs (object), welcome message, tagline, history/mission/values text, policies text (appointment, cancellation, health/safety).
barbers: Documents for each barber (fields: name, bio, photoUrl, specialties [array, optional]).
services: Documents for each service (fields: name, description, price, duration [in minutes, optional], iconUrl [optional]).
galleryImages: Documents for each gallery image (fields: imageUrl, caption [optional], category [e.g., 'shop', 'team', 'client-cuts']).
appointments: Documents for bookings (fields: clientName, clientContact [phone/email], appointmentDate [Timestamp], appointmentTime [string, e.g., '10:00 AM'], barberId [string, reference to barbers doc ID], serviceId [string, reference to services doc ID], specialRequests [string, optional], createdAt [Timestamp], status [string, e.g., 'confirmed', 'completed', 'cancelled']).
contactSubmissions (Optional): Documents for contact form entries (fields: name, email, message, submittedAt [Timestamp]).
3. Controllers (/lib/controllers directory - .ts files):

Create separate controller files for each Firestore collection (e.g., settings.controller.ts, barbers.controller.ts, services.controller.ts, gallery.controller.ts, appointments.controller.ts, contact.controller.ts).
Each controller must export async functions for CRUD (Create, Read, Update, Delete) operations relevant to its collection, using the Firebase v9 modular SDK.
Naming Convention: getSettings, updateSettings, getBarbers, getBarberById, addAppointment, getAppointmentsByDate, getServices, getGalleryImages, addContactSubmission, etc.
Implement proper error handling (try/catch blocks) and return data in a consistent format.
Example (services.controller.ts):
TypeScript

import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Assuming db export from config

const servicesCollection = collection(db, 'services');

export const getServices = async () => {
    try {
        const snapshot = await getDocs(servicesCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching services:", error);
        return []; // Return empty array on error
    }
};

export const addService = async (serviceData: any) => { // Define a proper type/interface for serviceData
    try {
        const docRef = await addDoc(servicesCollection, serviceData);
        return { id: docRef.id, ...serviceData };
    } catch (error) {
        console.error("Error adding service:", error);
        throw error; // Re-throw or handle appropriately
    }
};

// Add functions for getServiceById, updateService, deleteService
Ensure controllers are self-contained and only handle data logic.
4. UI Components (/components directory - .tsx files):

Create reusable UI components: Header, Footer, Button, Logo, Navigation, HeroSection, BarberCard, GalleryGrid, ServiceListItem, BookingForm, ContactForm, MapEmbed, PolicySection, etc.
Use TypeScript for props definition (interface Props {}).
5. Page Structure (Next.js App Router - /app directory):

layout.tsx:
Root layout containing <html>, <body>.
Render the Header and Footer components.
Import globals.css.
page.tsx (Homepage):
Fetch shop name, tagline, and potentially featured gallery images using controllers in a Server Component or via client-side fetching.
Render HeroSection with a background image/slideshow.
Display the shop name prominently and the welcome message/tagline.
/about/page.tsx (About Page):
Fetch shop history/mission/values from settings controller.
Fetch barber details from barbers controller.
Display the fetched text content.
Render BarberCard components for each team member.
/gallery/page.tsx (Gallery Page):
Fetch images from galleryImages controller.
Render images using the GalleryGrid component. Consider adding filtering options.
/contact/page.tsx (Contact Us Page):
Fetch contact details (address, phone, email) from settings controller.
Display contact info clearly.
Render MapEmbed component showing the address.
(Optional) Render the ContactForm component, which uses contact.controller.ts for submission. Implement client-side validation.
/policy/page.tsx (Policy Page):
Fetch policy text from settings controller.
Render the policies using the PolicySection component or simple text blocks.
/book-now/page.tsx (Book Now Page):
Fetch barbers and services using their respective controllers to populate form dropdowns.
Render the BookingForm component. This form should:
Include fields for date, time, barber selection, service selection, name, contact, special requests.
Use a date picker component.
Potentially fetch available time slots based on selected date and barber (advanced).
On submit, call the addAppointment function from appointments.controller.ts. Implement client-side validation and provide user feedback (success/error messages).
Render a ServiceList component alongside or near the form, displaying services fetched from services controller (name, description, price).
6. Header and Footer Specifics:

Header Component:
Use the provided image (Screenshot 2025-04-26 at 10.13.52 PM.jpg) as a strict visual reference.
Left side: Logo component (display shop name or an image logo URL fetched from settings).
Right side: Navigation component with links: "Home", "About", "Gallery", "Contact Us", "Policy".
Far Right: A visually distinct Button component for "Book Now", styled prominently.
Ensure it's responsive, potentially collapsing into a hamburger menu on smaller screens.
Footer Component:
Keep it simple.
Display contact info (Address, Phone, Email - fetch from settings).
Include icons linking to social media profiles (fetch URLs from settings).
7. Styling and Responsiveness:

Apply styling using Tailwind CSS utility classes.
Ensure the layout adapts gracefully to desktop, tablet, and mobile screen sizes.
Prioritize a clean, modern aesthetic suitable for a barbershop.
8. Code Quality & Best Practices:

Write clean, readable, and well-documented TypeScript code.
Use Server Components for data fetching where possible for performance. Use Client Components ('use client') only when necessary (e.g., for forms, interactive elements).
Implement appropriate loading states (e.g., skeletons or spinners) while data is being fetched.
Implement robust error handling for API calls (Firestore interactions) and form submissions.

attached an image from a website I like it's ui
  