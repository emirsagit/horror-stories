export default function CautionNotification({ changeNotificationMessage, notificationMessage }) {
  return (
    <div className="text-white fixed bottom-0 right-0 z-50 px-4 rounded-lg py-8 min-h-32 text-sm bg-yellow-600">
      <button className="top-2 right-2 absolute" onClick={() => changeNotificationMessage("")}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <p className="text-lg font-bold tracking-wider text-gray-900 uppercase text-center">DİKKAT!</p>
      <p className="text-gray-800 font-bold mt-2 tracking-wider">{notificationMessage}</p>
    </div>
  );
}
