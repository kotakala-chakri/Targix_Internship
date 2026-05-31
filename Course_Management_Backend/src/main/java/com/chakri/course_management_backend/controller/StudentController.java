package com.chakri.course_management_backend.controller;
        import com.chakri.course_management_backend.entity.Course;
        import com.chakri.course_management_backend.entity.Enrollment;
        import com.chakri.course_management_backend.entity.User;
        import com.chakri.course_management_backend.repository.CourseRepository;
        import com.chakri.course_management_backend.repository.EnrollmentRepository;
        import com.chakri.course_management_backend.repository.UserRepository;
        import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

        import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    // ENROLL COURSE
    @PostMapping("/enroll/{courseId}")
    public String enrollCourse(
            @PathVariable Long courseId,
            Authentication authentication
    ) {

        String email = authentication.getName();

        User student = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        if (enrollmentRepository
                .findByStudentAndCourse(student, course)
                .isPresent()) {

            return "Already enrolled";
        }

        List<Enrollment> studentCourses =
                enrollmentRepository.findByStudent(student);

        if(studentCourses.size() >= 3){

            return "Maximum 3 courses allowed";
        }


        Enrollment enrollment = Enrollment.builder()
                .student(student)
                .course(course)
                .enrolledAt(LocalDateTime.now())
                .build();

        enrollmentRepository.save(enrollment);

        return "Enrollment successful";
    }

    // VIEW MY COURSES
    @GetMapping("/my-courses")
    public List<Enrollment> myCourses(
            Authentication authentication
    ) {

        String email = authentication.getName();

        User student = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        return enrollmentRepository.findByStudent(student);
    }

    // CANCEL ENROLLMENT
    @DeleteMapping("/cancel/{courseId}")
    public String cancelEnrollment(
            @PathVariable Long courseId,
            Authentication authentication
    ) {
        System.out.println("Cancel API Hit");

        String email = authentication.getName();

        User student = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        Enrollment enrollment =
                enrollmentRepository
                        .findByStudentAndCourse(student, course)
                        .orElseThrow(() ->
                                new RuntimeException("Enrollment not found"));

        enrollmentRepository.delete(enrollment);

        return "Enrollment cancelled";
    }

    // PROFILE
    @GetMapping("/profile")
    public User profile(
            Authentication authentication
    ) {

        String email = authentication.getName();

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));
    }
}