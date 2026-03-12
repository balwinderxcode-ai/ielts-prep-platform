export default function Reading() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Reading Practice</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-600 mb-4">Passage: The History of the Internet</p>
        <p className="text-gray-800 leading-relaxed mb-6">
          The Internet has revolutionized the computer and communications world like nothing before. The invention of the telegraph, telephone, radio, and computer set the stage for this unprecedented integration of capabilities...
        </p>
        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg mb-2">Question 1</h3>
          <p className="mb-3">What inventions set the stage for the Internet?</p>
          <div className="space-y-2">
             <label className="flex items-center space-x-2"><input type="radio" name="q1" className="text-blue-600"/><span>Telegraph and telephone</span></label>
             <label className="flex items-center space-x-2"><input type="radio" name="q1" className="text-blue-600"/><span>Automobiles and airplanes</span></label>
          </div>
        </div>
      </div>
    </div>
  );
}