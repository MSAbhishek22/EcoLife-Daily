import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function EditableField({ label, value, onSave, placeholder='' }){
  const [editing, setEditing] = useState(false)
  const [val, setVal] = useState(value || '')

  function save(){
    setEditing(false)
    onSave && onSave(val)
  }

  return (
    <div className="editable-field">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">{label}</div>
        <div>
          {!editing ? (
            <div className="flex items-center gap-2">
              <div className="font-medium">{value || placeholder}</div>
              <button className="text-xs text-emerald-600" onClick={() => setEditing(true)}>Edit</button>
            </div>
          ) : (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="flex items-center gap-2">
              <input className="border rounded px-2 py-1 text-sm" value={val} onChange={e => setVal(e.target.value)} />
              <button className="btn primary text-sm" onClick={save}>Save</button>
              <button className="btn outline text-sm" onClick={() => { setEditing(false); setVal(value) }}>Cancel</button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
