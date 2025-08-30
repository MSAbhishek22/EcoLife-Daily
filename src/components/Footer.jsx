import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-12">
      <div className="glass-card rounded-2xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">Made with love for nature 🌱</div>
          <nav className="flex items-center gap-4 text-sm text-muted">
            <Link to="#" className="hover:text-primary">About</Link>
            <Link to="#" className="hover:text-primary">Contact Us</Link>
            <Link to="#" className="hover:text-primary">Privacy Policy</Link>
          </nav>
          <div className="flex items-center gap-3 text-muted">
            <a href="#" aria-label="Facebook" className="text-headings hover:text-primary"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="text-headings hover:text-primary"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="text-headings hover:text-primary"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted mt-3">© {new Date().getFullYear()} EcoLife Daily — Small steps, big impact.</div>
    </footer>
  )
}
