/ lib/controllers/services.controller.ts
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

export const getServiceById = async (id: string) => {
  try {
      const serviceDoc = await getDoc(doc(servicesCollection, id));
      if (serviceDoc.exists()) {
          return { id: serviceDoc.id, ...serviceDoc.data() };
      } else {
          return null;
      }
  } catch (error) {
      console.error("Error fetching service:", error);
      return null;
  }
};

export const updateService = async (id: string, serviceData: any) => {
  try {
      await updateDoc(doc(servicesCollection, id), serviceData);
      return { id, ...serviceData };
  } catch (error) {
      console.error("Error updating service:", error);
      throw error;
  }
};

export const deleteService = async (id: string) => {
  try {
      await deleteDoc(doc(servicesCollection, id));
      return { success: true };
  } catch (error) {
      console.error("Error deleting service:", error);
      return { success: false, error };
  }
};
