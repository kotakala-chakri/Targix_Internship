package com.chakri.course_management_backend.repository;
import com.chakri.course_management_backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}