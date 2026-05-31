package com.chakri.course_management_backend.controller;

import com.chakri.course_management_backend.entity.Course;
import com.chakri.course_management_backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    // PUBLIC - GET ALL COURSES
    @GetMapping
    public List<Course> getAllCourses() {

        return courseRepository.findAll();
    }

    // PUBLIC - GET COURSE BY ID
    @GetMapping("/{id}")
    public Course getCourseById(
            @PathVariable Long id
    ) {

        return courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));
    }
}