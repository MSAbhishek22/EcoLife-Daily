import React, { useEffect, useState } from 'react'
import { auth, signInWithGoogle, logout, db } from '../services/firebase'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

export default function Auth(){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    return auth.onAuthStateChanged(async (u) => {
      setUser(u)
      if (u) {
        // Initialize new user with zeroed progress if not present
        const ref = doc(db, 'users', u.uid)
        const snap = await getDoc(ref)
        if (!snap.exists()) {
          await setDoc(ref, {
            uid: u.uid,
            displayName: u.displayName || '',
            photoURL: u.photoURL || '',
            createdAt: serverTimestamp(),
            xp: 0,
            streak: 0,
            impact: { plastic: 0, water: 0, co2: 0, trees: 0 }
          })
        }
      }
    })
  },[])

  if(!user) return <button onClick={signInWithGoogle} className="btn primary">Sign in with Google</button>

  return (
    <div className="flex items-center gap-3">
      <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />
      <div>{user.displayName}</div>
      <button onClick={logout} className="btn outline">Sign out</button>
    </div>
  )
}
