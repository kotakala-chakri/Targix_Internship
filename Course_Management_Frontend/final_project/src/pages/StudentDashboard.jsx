import { useEffect, useState } from "react";

import API from "../services/api";
import Navbar from "../components/Navbar";

function StudentDashboard() {

    const [profile, setProfile] = useState(null);

    const [courses, setCourses] = useState([]);



    const fetchProfile = async () => {

        try{

            const response = await API.get(
                "/student/profile"
            );

            setProfile(response.data);

        }catch(error){

            console.log(error);
        }
    };

    const fetchMyCourses = async () => {

        try{

            const response = await API.get(
                "/student/my-courses"
            );

            setCourses(response.data);

        }catch(error){

            console.log(error);
        }
    };

    const cancelEnrollment = async (courseId) => {

        try{

            await API.delete(
                `/student/cancel/${courseId}`
            );

            alert("Enrollment Cancelled");

            fetchMyCourses();

        }catch(error){

            console.log(error);
        }
    };

    useEffect(() => {

        const loadData = async () => {

            await fetchProfile();

            await fetchMyCourses();
        };

        loadData();

    }, []);

    return (

        <div>

            <Navbar />

            <div className="dashboard">

                <h1>Student Dashboard</h1>

                {profile && (

                    <div className="profile-card">

                        <h2>{profile.name}</h2>

                        <p>{profile.email}</p>

                    </div>
                )}

                <h2 className="my-course-title">
                    My Courses
                </h2>

                <div className="courses-container">

                    {courses.map((item) => (

                        <div
                            className="course-card"
                            key={item.id}
                        >

                            <img
                                src={item.course.imageUrl}
                                alt=""
                            />

                            <h2>
                                {item.course.title}
                            </h2>

                            <p>
                                {item.course.trainer}
                            </p>

                            <button
                                onClick={() =>
                                    cancelEnrollment(
                                        item.course.id
                                    )
                                }
                            >
                                Cancel Enrollment
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default StudentDashboard;