// src/lib/controllers/appointments.controller.ts
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Timestamp } from 'firebase/firestore';

const appointmentsCollection = collection(db, 'appointments');

export const addAppointment = async (appointmentData: any) => { // Define a proper type/interface for appointmentData
    try {
        const docRef = await addDoc(appointmentsCollection, {
            ...appointmentData,
            createdAt: Timestamp.now()
        });
        return { id: docRef.id, ...appointmentData };
    } catch (error) {
        console.error("Error adding appointment:", error);
        throw error;
    }
};

export const getAppointmentsByDate = async (date: Date) => {
    try {
        const q = query(appointmentsCollection, where('appointmentDate', '==', date));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching appointments:", error);
        return [];
    }
};
