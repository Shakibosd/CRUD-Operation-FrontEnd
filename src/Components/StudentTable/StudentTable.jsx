import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StudentTables = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch(`https://crud-operation-backends.onrender.com/Crud_Opt/plans-get/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response : ", data);
                setStudents(data);
            })
            .catch((err) => {
                console.log("Error fetching data : ", err.message);
            });
    }, []);

    const deleteStudent = (id) => {
        if (window.confirm("Are You Sure You Want To Delete This Student?")) {
            fetch(`https://crud-operation-backends.onrender.com/Crud_Opt/plans-delete/${id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    if (res.status === 204) {
                        alert("Student Deleted Successfully!");
                        setStudents(students.filter((student) => student.id !== id));
                    } else {
                        alert("Failed To Delete Student!");
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    return (
        <div className="p-12 bg-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-7">Student Records</h2>
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
                        <tbody className="text-gray-700">
                            {students.length > 0 ? (
                                students.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-1 px-1">{index + 1}</td>
                                        <td className="py-1 px-1">{item.name}</td>
                                        <td className="py-1 px-1">{item.place}</td>
                                        <td className="py-1 px-1">{item.phone}</td>
                                        <td className="py-1 px-1">{item.email}</td>
                                        <td className="py-1 px-1">{item.created_at}</td>
                                        <td className="py-1 px-1">{item.update_at}</td>
                                        <td className="py-1 px-1 flex">
                                            <Link
                                                to={`student/edit/${item.id}`}
                                                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-300"
                                            >
                                                <i className="uil uil-edit"></i>
                                            </Link>
                                            <button
                                                onClick={() => deleteStudent(item.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 ml-2"
                                            >
                                                <i className="uil uil-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="py-10 text-center text-red-400">
                                        No Data Found!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentTables;