import { User } from 'lucide-react';
import React from 'react';

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-100 border-end d-flex flex-column transition-all duration-200" style={{ width: '5rem' }}>

      <div className="border-bottom w-100 p-3">
        <div className="d-flex align-items-center gap-2">
          <User className="w-100" style={{ width: '1.5rem', height: '1.5rem' }} />
          <span className="fw-medium d-none d-lg-block">Contacts</span>
        </div>
      </div>

      <div className="overflow-auto w-100 py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-100 p-3 d-flex align-items-center gap-3">

            <div className="position-relative mx-auto mx-lg-0">
              <div className="skeleton-loader rounded-circle" style={{ width: '48px', height: '48px' }}></div>
            </div>

            <div className="d-none d-lg-block text-start flex-grow-1">
              <div className="skeleton-loader mb-2" style={{ height: '16px', width: '128px' }}></div>
              <div className="skeleton-loader" style={{ height: '12px', width: '64px' }}></div>
            </div>

          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
