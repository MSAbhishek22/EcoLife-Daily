import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

let analytics = null
;(async () => {
  try {
    if (await isSupported()) {
      analytics = getAnalytics(app)
    }
  } catch (e) {
    // analytics not critical; ignore in unsupported/SSR-like environments
    console.warn('Analytics unavailable:', e?.message || e)
  }
})()

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  try {
    return await signInWithPopup(auth, provider)
  } catch (err) {
    // Fallback for environments that block popups (iOS Safari, embedded, strict settings)
    if (
      err?.code === 'auth/popup-blocked' ||
      err?.code === 'auth/popup-closed-by-user' ||
      err?.code === 'auth/operation-not-supported-in-this-environment'
    ) {
      return await signInWithRedirect(auth, provider)
    }
    if (err?.code === 'auth/unauthorized-domain') {
      console.error('Firebase Auth unauthorized domain. Add your Vercel domain to Firebase Console → Authentication → Settings → Authorized domains.')
    }
    throw err
  }
}

export function logout(){
  return signOut(auth)
}

export { auth, db, analytics }
