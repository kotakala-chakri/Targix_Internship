package com.chakri._th_assignment_backend2.repository;

import com.chakri._th_assignment_backend2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}