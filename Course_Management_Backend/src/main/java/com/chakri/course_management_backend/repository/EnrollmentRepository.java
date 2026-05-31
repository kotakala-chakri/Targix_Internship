package com.chakri.course_management_backend.repository;
import com.chakri.course_management_backend.entity.Course;
import com.chakri.course_management_backend.entity.Enrollment;
import com.chakri.course_management_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {

    List<Enrollment> findByStudent(User student);

    List<Enrollment> findByCourse(Course course);

    Optional<Enrollment> findByStudentAndCourse(User student, Course course);
}