// src/lib/controllers/settings.controller.ts
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const settingsDocRef = doc(db, 'settings', 'main'); // Assuming a single document named 'main'

export const getSettings = async () => {
    try {
        const docSnapshot = await getDoc(settingsDocRef);
        if (docSnapshot.exists()) {
            return docSnapshot.data();
        } else {
            console.log("No settings document found!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching settings:", error);
        return null;
    }
};
