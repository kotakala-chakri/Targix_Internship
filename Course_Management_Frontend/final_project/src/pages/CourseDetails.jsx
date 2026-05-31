import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";
import Navbar from "../components/Navbar";

function CourseDetails() {

    const { id } = useParams();

    const [course, setCourse] = useState(null);



    const fetchCourse = async () => {

        try{

            const response = await API.get(
                `/courses/${id}`
            );

            setCourse(response.data);

        }catch(error){

            console.log(error);
        }
    };
    useEffect(() => {

        const loadCourse = async () => {

            await fetchCourse();
        };

        loadCourse();

    }, []);



    const enrollCourse = async () => {

        try{

            await API.post(
                `/student/enroll/${id}`
            );

            alert("Enrollment Successful");

            // eslint-disable-next-line no-unused-vars
        }catch(error){

            alert("Please Login First");
        }
    };

    if(!course){

        return <h1>Loading...</h1>;
    }

    return (

        <div>

            <Navbar />

            <div className="details-page">

                <img
                    src={course.imageUrl}
                    alt=""
                />

                <div className="details-content">

                    <h1>{course.title}</h1>

                    <p>{course.description}</p>

                    <h3>
                        Trainer:
                        {course.trainer}
                    </h3>

                    <h3>
                        Duration:
                        {course.duration}
                    </h3>

                    <h2>
                        ₹ {course.price}
                    </h2>

                    <button onClick={enrollCourse}>
                        Enroll Now
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CourseDetails;