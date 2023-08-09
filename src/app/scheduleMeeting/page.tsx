import React from 'react';

const SchedulingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Scheduling Page</h1>
        <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://meetings.hubspot.com/unnikrishnan"
            title="Scheduling Widget"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default SchedulingPage;