export default function Listening() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Listening Practice</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
          <p className="text-blue-800 font-medium mb-2">Audio Player placeholder</p>
          <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
             <div className="bg-blue-600 w-1/3 h-full rounded-full"></div>
          </div>
          <div className="flex space-x-4 mt-3">
             <button className="text-blue-700 bg-white px-3 py-1 rounded shadow-sm hover:bg-blue-50 text-sm font-semibold">Play</button>
             <button className="text-blue-700 bg-white px-3 py-1 rounded shadow-sm hover:bg-blue-50 text-sm font-semibold">Pause</button>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-4">Section 1: Hotel Booking</h3>
        <p className="mb-4 text-gray-700">Fill in the blanks. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.</p>
        
        <div className="space-y-4 max-w-md">
          <div className="flex items-center space-x-3">
            <span className="font-medium text-gray-500">1.</span>
            <span className="text-gray-700">Date of arrival:</span>
            <input type="text" className="flex-1 border-b-2 border-gray-300 outline-none focus:border-blue-500 px-2 py-1" />
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-medium text-gray-500">2.</span>
            <span className="text-gray-700">Room type:</span>
            <input type="text" className="flex-1 border-b-2 border-gray-300 outline-none focus:border-blue-500 px-2 py-1" />
          </div>
        </div>
      </div>
    </div>
  );
}