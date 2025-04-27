// src/lib/controllers/gallery.controller.ts
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const galleryImagesCollection = collection(db, 'galleryImages');

export const getGalleryImages = async () => {
    try {
        const snapshot = await getDocs(galleryImagesCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return [];
    }
};
