import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CreateStudent = () => {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentData = {
            name: name,
            place: place,
            phone: phone,
            email: email
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/Crud_Opt/plans-post/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData),
            });

            const data = await response.json(); 

            if (response.ok) {
                alert("Student Created Successfully!");
                navigate("/");
            } else {
                console.error("Error Response:", data);  
                alert("Error: " + JSON.stringify(data));  
            }
        }
        catch (err) {
            console.log("Error creating student:", err);
            alert('There was an error. Please try again later.');
        }
    };


    return (
        <div>
            <h2 className="text-center text-light mt-3">Creating Student</h2>
            <div className="p-3">
                <div className="card p-5 bg-dark text-light">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name (Max 100 Characters)" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="place" className="form-label">Place</label>
                            <input type="text" name="place" className="form-control" id="place" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter Your Place (Max 100 Characters)" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="text" name="phone" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone Number (Max 16 Digits) Example: +8801XXXXXXXXX" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Valid Email</label>
                            <input type="email" name="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Valid Email Example: demon45@gmail.com" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>&nbsp;&nbsp;
                        <Link to={'/'} className="btn btn-warning">Back</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateStudent;
