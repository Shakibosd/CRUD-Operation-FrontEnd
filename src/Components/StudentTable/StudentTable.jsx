import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StudentTables = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch(`https://crud-operation-backends.onrender.com/Crud_Opt/plans-get/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
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
                        alert("Student Delete Successfully!");
                        setStudents(students.filter(student => student.id !== id));
                    }
                    else {
                        alert("Failed To Delete Student!");
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    return (
        <div>
            <h2 className="text-center text-light mt-3">Student Records</h2>
            <div className="p-3 text-light">
                <Link to={'/student/create'} className="btn btn-primary p-2">Add New Student</Link>
                <table className="table mt-3">
                    <thead>
                        <tr className="table-danger">
                            <th scope="col">SL.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Place</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Create At</th>
                            <th scope="col">Update At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.length > 0 ? (
                                students.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.place}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.update_at}</td>
                                        <td>
                                            <Link to={`student/edit/${item.id}`} className="btn btn-warning"><i className="uil uil-edit fs-5"></i></Link>&nbsp;
                                            <button className="btn btn-danger" onClick={() => deleteStudent(item.id)}><i className="uil uil-trash fs-5"></i></button>&nbsp;
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="text-center fs-5 text-danger">No Data Found!!!</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default StudentTables;
