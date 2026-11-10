import { ReactNode } from 'react'

export function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: ReactNode }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}
