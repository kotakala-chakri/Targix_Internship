package com.chakri.course_management_backend.controller;
import com.chakri.course_management_backend.dto.AuthRequest;
import com.chakri.course_management_backend.dto.AuthResponse;
import com.chakri.course_management_backend.dto.RegisterRequest;
import com.chakri.course_management_backend.entity.User;
import com.chakri.course_management_backend.repository.UserRepository;
import com.chakri.course_management_backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
        import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequest request
    ) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {

            return "Email already exists";
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(
                        passwordEncoder.encode(request.getPassword())
                )
                .role("STUDENT")
                .build();

        userRepository.save(user);

        return "Student registered successfully";
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody AuthRequest request
    ) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        String token =
                jwtUtil.generateToken(request.getEmail());

        return new AuthResponse(token);
    }
}