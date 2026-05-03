package com.chakri._th_assignment_backend2.service;
import com.chakri._th_assignment_backend2.model.User;
import com.chakri._th_assignment_backend2.repository.UserRepository;
import com.chakri._th_assignment_backend2.jwt.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository repo;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository repo, JwtUtil jwtUtil) {
        this.repo = repo;
        this.jwtUtil = jwtUtil;
    }

    public String login(String username, String password) {
        User user = repo.findByUsername(username);

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Wrong password");
        }

        return jwtUtil.generateToken(username);
    }

    public User register(User user) {
        return repo.save(user);
    }
}