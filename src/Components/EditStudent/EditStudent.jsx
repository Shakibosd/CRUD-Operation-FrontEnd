import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
    const [editname, setName] = useState("");
    const [editplace, setPlace] = useState("");
    const [editphone, setPhone] = useState("");
    const [editemail, setEmail] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://crud-operation-backends.onrender.com/Crud_Opt/plans-put/${id}/`)
            .then((res) => res.json())
            .then((data) => {
                setName(data.name);
                setPlace(data.place);
                setPhone(data.phone);
                setEmail(data.email);
            })
            .catch((err) => {
                console.log("Error fetching student data : ", err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData = { name: editname, place: editplace, phone: editphone, email: editemail };

        fetch(`https://crud-operation-backends.onrender.com/Crud_Opt/plans-put/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Student Data Updated Successfully!");
                navigate("/");
            })
            .catch((err) => {
                console.log("Error updating student data : ", err);
            });
    };

    return (
        <div className="bg-gray-200 p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Edit Student Data</h2>
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="editname" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="editname"
                            id="editname"
                            value={editname}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Place Field */}
                    <div>
                        <label htmlFor="editplace" className="block text-sm font-medium text-gray-700">
                            Place
                        </label>
                        <input
                            type="text"
                            name="editplace"
                            id="editplace"
                            value={editplace}
                            onChange={(e) => setPlace(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="editphone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="editphone"
                            id="editphone"
                            value={editphone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="editemail" className="block text-sm font-medium text-gray-700">
                            Your Valid Email
                        </label>
                        <input
                            type="email"
                            name="editemail"
                            id="editemail"
                            value={editemail}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Buttons */}
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

export default EditStudent;