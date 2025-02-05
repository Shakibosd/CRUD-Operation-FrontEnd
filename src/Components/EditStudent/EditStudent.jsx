import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
    const [editname, setName] = useState('');
    const [editplace, setPlace] = useState('');
    const [editphone, setPhone] = useState('');
    const [editemail, setEmail] = useState('');

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
                console.log('Error fetching student data : ', err);
            })
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData = { name:editname, place:editplace, phone:editphone, email:editemail };

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
                alert("Student Data Update Successfully!");
                navigate('/');
            })
            .catch((err) => {
                console.log('Error updating student data : ', err);
            })
    }
    return (
        <div>
            <h2 className="text-center text-light mt-3">Edit Student Data</h2>
            <div className="p-3 mt-3">
                <div className="card p-5 bg-dark text-light">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="editname" className="form-label">Your Name</label>
                            <input type="text" name="editname" value={editname} onChange={(e) => setName(e.target.value)} className="form-control" id="editname" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="editplace" className="form-label">Place</label>
                            <input type="text" name="editplace" value={editplace} onChange={(e) => setPlace(e.target.value)} className="form-control" id="editplace" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="editphone" className="form-label">Phone Number</label>
                            <input type="text" name="editphone" value={editphone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="editphone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="editemail" className="form-label">Your Valid Email</label>
                            <input type="email" name="editemail" value={editemail} onChange={(e) => setEmail(e.target.value)} className="form-control" id="editemail" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>&nbsp;&nbsp;
                        <Link to={'/'} className="btn btn-warning">Back</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditStudent;