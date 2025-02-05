import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CreateStudent = () => {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentData = {
            name: name,
            place: place,
            phone: phone,
            email: email,
        };

        try {
            const response = await fetch(
                "https://crud-operation-backends.onrender.com/Crud_Opt/plans-post/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(studentData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Student Created Successfully!");
                navigate("/");
            } else {
                console.error("Error Response:", data);
                alert("Error: " + JSON.stringify(data));
            }
        } catch (err) {
            console.log("Error creating student:", err);
            alert("There was an error. Please try again later.");
        }
    };

    return (
        <div className="bg-gray-200 p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Student</h2>
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Your Name (Max 100 Characters)"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Place Field */}
                    <div>
                        <label htmlFor="place" className="block text-sm font-medium text-gray-700">
                            Place
                        </label>
                        <input
                            type="text"
                            name="place"
                            id="place"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            placeholder="Enter Your Place (Max 100 Characters)"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Your Phone Number (Max 16 Digits) Example: +8801XXXXXXXXX"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Your Valid Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Valid Email Example: demon45@gmail.com"
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

export default CreateStudent;