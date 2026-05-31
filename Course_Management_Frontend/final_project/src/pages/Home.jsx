import { useEffect, useState } from "react";

import API from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {

    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");



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

    const enrollCourse = async (courseId) => {

        try{

            const response = await API.post(
                `/student/enroll/${courseId}`
            );

            alert(response.data);

            // eslint-disable-next-line no-unused-vars
        }catch(error){

            alert("Please Login First");
            navigate("/login");
        }
    };

    return (

        <div>

            <Navbar />

            <div className="hero">

                <h1>Grow your skills</h1>

                <p>
                    Learn premium skills online
                </p>

            </div>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search courses..."
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>


            <div className="courses-container">

                {courses
                    .filter((course) =>
                        course.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((course) => (

                    <Link
                        to={`/course/${course.id}`}
                        className="course-card"
                        key={course.id}
                    >

                        <img
                            src={course.imageUrl}
                            alt=""
                        />

                        <h2>{course.title}</h2>

                        <p>{course.trainer}</p>

                        <p>₹ {course.price}</p>

                        <button
                            onClick={() => enrollCourse(course.id)}
                        >
                            Enroll Now
                        </button>
                    </Link>
                ))}

            </div>

        </div>
    );
}

export default Home;