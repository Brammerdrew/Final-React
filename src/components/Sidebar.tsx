

const Sidebar = () => {
  return (
    <div className="pt-20">
      <div className="h-screen w-64 fixed left-0 overflow-auto bg-slate-200">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Placeholder</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;