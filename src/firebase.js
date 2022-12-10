import { initializeApp } from 'firebase/app'
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: process.env.VUE_APP_FB_API_KEY,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET
})

const storage = getStorage(app);

export default storage
