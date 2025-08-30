import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default function Profile() {
  return (
    <section className="page">
      <div className="max-w-3xl mx-auto grid gap-4">
        <ProfileCard />
        <div className="p-4 bg-white rounded-xl shadow-premium">
          <h4 className="font-semibold mb-2">Account Settings</h4>
          <div className="flex flex-col gap-3">
            <button className="btn outline">Sign out</button>
            <button className="btn" style={{ background: 'linear-gradient(90deg,#FFB74D,#FFA726)', color: 'white' }}>Delete account</button>
          </div>
        </div>
      </div>
    </section>
  )
}
