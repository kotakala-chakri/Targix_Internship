package com.chakri.course_management_backend.controller;

import com.chakri.course_management_backend.entity.Course;
import com.chakri.course_management_backend.entity.Enrollment;
import com.chakri.course_management_backend.entity.User;
import com.chakri.course_management_backend.repository.CourseRepository;
import com.chakri.course_management_backend.repository.EnrollmentRepository;
import com.chakri.course_management_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

        import java.util.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    // ADD COURSE
    @PostMapping("/courses")
    public Course addCourse(
            @RequestBody Course course
    ) {

        return courseRepository.save(course);
    }


    //image edit---

   
    @PutMapping("/courses/{id}")
    public Course updateCourse(
            @PathVariable Long id,
            @RequestBody Course updatedCourse
    ) {

        Course course = courseRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        course.setTitle(updatedCourse.getTitle());

        course.setDescription(updatedCourse.getDescription());

        course.setTrainer(updatedCourse.getTrainer());

        course.setDuration(updatedCourse.getDuration());

        course.setPrice(updatedCourse.getPrice());

        course.setImageUrl(updatedCourse.getImageUrl());

        return courseRepository.save(course);
    }

    // DELETE COURSE
    @DeleteMapping("/courses/{id}")
    public String deleteCourse(
            @PathVariable Long id
    ) {

        courseRepository.deleteById(id);

        return "Course deleted successfully";
    }

    // VIEW ALL STUDENTS
    @GetMapping("/students")
    public List<User> getAllStudents() {

        return userRepository.findAll()
                .stream()
                .filter(user ->
                        user.getRole().equals("STUDENT"))
                .toList();
    }

    // DELETE STUDENT
    @DeleteMapping("/students/{id}")
    public String deleteStudent(
            @PathVariable Long id
    ) {

        userRepository.deleteById(id);

        return "Student deleted successfully";
    }

    // COURSE ENROLLMENT COUNT
    @GetMapping("/course-count/{courseId}")
    public Map<String, Object> getCourseEnrollmentCount(
            @PathVariable Long courseId
    ) {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        List<Enrollment> enrollments =
                enrollmentRepository.findByCourse(course);

        Map<String, Object> response = new HashMap<>();

        response.put("course", course.getTitle());
        response.put("studentsCount", enrollments.size());

        return response;
    }
}