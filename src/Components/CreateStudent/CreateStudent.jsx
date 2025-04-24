import { Link } from "react-router-dom";

const CreateStudent = () => {
  return (
    <div className="bg-gray-200 p-6 mt-32">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Create Student
      </h2>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name (Max 100 Characters)"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="place"
              className="block text-sm font-medium text-gray-700"
            >
              Place
            </label>
            <input
              type="text"
              name="place"
              id="place"
              placeholder="Enter Your Place (Max 100 Characters)"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Your Phone Number (Max 16 Digits) Example: +8801XXXXXXXXX"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Valid Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Valid Email Example: demon45@gmail.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save
            </button>
            <Link
              to={"/"}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;