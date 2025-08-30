import React, { useState, useEffect } from 'react'
import EditableField from './EditableField'
import { defaultProfile } from '../utils/fallbackData'

export default function ProfileCard(){
  const [profile, setProfile] = useState(() => {
    try{ const p = JSON.parse(localStorage.getItem('eco_profile')); return p || defaultProfile }catch(e){return defaultProfile}
  })

  useEffect(()=>{ localStorage.setItem('eco_profile', JSON.stringify(profile)) }, [profile])

  return (
    <div className="profile-card bg-white rounded-xl p-6 shadow-premium">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-2xl font-bold">{profile.name?.[0] || 'E'}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Display Name</div>
              <div className="font-semibold text-lg">{profile.name}</div>
            </div>
            <div>
              <button className="btn outline" onClick={() => { localStorage.removeItem('eco_profile'); setProfile(defaultProfile) }}>Reset</button>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">{profile.bio}</div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <EditableField label="Display name" value={profile.name} onSave={val => setProfile(p => ({ ...p, name: val }))} />
        <EditableField label="Bio / Goals" value={profile.bio} onSave={val => setProfile(p => ({ ...p, bio: val }))} />
        <EditableField label="Preferred language" value={profile.language} onSave={val => setProfile(p => ({ ...p, language: val }))} />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button className="btn primary">Save</button>
        <button className="btn outline" onClick={() => { localStorage.removeItem('eco_profile'); setProfile(defaultProfile) }}>Sign out</button>
      </div>
    </div>
  )
}
