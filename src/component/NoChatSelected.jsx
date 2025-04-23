import { MessageSquare } from 'lucide-react'
import React from 'react'

const NoChatSelected = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center px-4 py-5 bg-light position-relative custom-bg">
      <div className="text-center" style={{ maxWidth: '28rem' }}>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <div className="position-relative">
            <div className="rounded-4 d-flex align-items-center justify-content-center icon-bounce bg-primary bg-opacity-10" style={{ width: '4rem', height: '4rem' }}>
              <MessageSquare className="text-primary" style={{ width: '2rem', height: '2rem' }} />
            </div>
          </div>
        </div>
        <h2 className="h4 fw-bold">
          Welcome to Yapp
        </h2>
        <p className="text-muted">Select a conversation from sidebar to start Chat</p>
      </div>
    </div>
  )
}

export default NoChatSelected
