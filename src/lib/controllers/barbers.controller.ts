// src/lib/controllers/barbers.controller.ts
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const barbersCollection = collection(db, 'barbers');

export const getBarbers = async () => {
    try {
        const snapshot = await getDocs(barbersCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching barbers:", error);
        return [];
    }
};

export const getBarberById = async (id: string) => {
    try {
        const barberDoc = await getDoc(doc(barbersCollection, id));
        if (barberDoc.exists()) {
            return { id: barberDoc.id, ...barberDoc.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching barber:", error);
        return null;
    }
};
