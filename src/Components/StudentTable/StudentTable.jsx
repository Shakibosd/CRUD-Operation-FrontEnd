import { Link } from "react-router-dom";

const StudentTables = () => {
  return (
    <div className="p-12 bg-gray-200 mt-32">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-7">
        Student Records
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <Link
          to={"/student/create"}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
        >
          Add New Student
        </Link>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-1 px-1 text-left">SL.</th>
                <th className="py-1 px-1 text-left">Name</th>
                <th className="py-1 px-1 text-left">Place</th>
                <th className="py-1 px-1 text-left">Phone</th>
                <th className="py-1 px-1 text-left">Email</th>
                <th className="py-1 px-1 text-left">Create At</th>
                <th className="py-1 px-1 text-left">Update At</th>
                <th className="py-1 px-1 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTables;