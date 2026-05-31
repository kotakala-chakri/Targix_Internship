import { useEffect, useState } from "react";

import API from "../services/api";
import Navbar from "../components/Navbar";

function AdminDashboard() {


    const [editId, setEditId] = useState(null);

    const [courses, setCourses] = useState([]);

    const [formData, setFormData] = useState({
        title:"",
        description:"",
        trainer:"",
        duration:"",
        price:"",
        imageUrl:""
    });



    const fetchCourses = async () => {

        try{

            const response = await API.get("/courses");

            setCourses(response.data);

        }catch(error){

            console.log(error);
        }
    };

    useEffect(() => {

        const loadCourses = async () => {

            await fetchCourses();
        };

        loadCourses();

    }, []);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addCourse = async (e) => {

        e.preventDefault();

        try{

            if(editId){

                await API.put(
                    `/admin/courses/${editId}`,
                    formData
                );

                alert("Course Updated");

            }else{

                await API.post(
                    "/admin/courses",
                    formData
                );

                alert("Course Added");
            }

            fetchCourses();

            setFormData({
                title:"",
                description:"",
                trainer:"",
                duration:"",
                price:"",
                imageUrl:""
            });

            setEditId(null);

            // eslint-disable-next-line no-unused-vars
        }catch(error){

            alert("Only Admin Can Add Courses");
        }
    };

    const deleteCourse = async (id) => {

        try{

            await API.delete(
                `/admin/courses/${id}`
            );

            fetchCourses();

        }catch(error){

            console.log(error);
        }
    };

    return (

        <div>

            <Navbar />

            <div className="dashboard">

                <h1>Admin Dashboard</h1>
                <h2>Total Courses: {courses.length}</h2>

                <form onSubmit={addCourse}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Course Title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="trainer"
                        placeholder="Trainer"
                        value={formData.trainer}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={formData.duration}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />

                    <button type="submit">

                        {editId
                            ? "Update Course"
                            : "Add Course"}

                    </button>

                </form>

                <div className="courses-container">

                    {courses.map((course) => (

                        <div
                            className="course-card"
                            key={course.id}
                        >

                            <img
                                src={course.imageUrl}
                                alt=""
                            />

                            <h2>{course.title}</h2>

                            <p>{course.trainer}</p>

                            <button
                                onClick={() => {

                                    setFormData(course);

                                    setEditId(course.id);
                                }}
                            >
                                Edit
                            </button>


                            <button
                                onClick={() =>
                                    deleteCourse(course.id)
                                }
                            >
                                Delete Course
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;