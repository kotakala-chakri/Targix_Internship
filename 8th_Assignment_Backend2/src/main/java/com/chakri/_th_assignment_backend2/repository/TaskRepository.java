package com.chakri._th_assignment_backend2.repository;

import com.chakri._th_assignment_backend2.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}