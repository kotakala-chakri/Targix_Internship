package com.chakri._th_assignment_backend2.jwt;


import jakarta.servlet.*;
        import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;
import java.io.IOException;

@Component
public class JwtFilter implements Filter {

    private final JwtUtil jwtUtil;

    public JwtFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;

        String path = req.getRequestURI();

        if (path.contains("/auth")) {
            chain.doFilter(request, response);
            return;
        }

        String header = req.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            throw new RuntimeException("Token Missing");
        }

        String token = header.substring(7);

        try {
            jwtUtil.extractUsername(token); // validate
        } catch (Exception e) {
            throw new RuntimeException("Invalid Token");
        }

        chain.doFilter(request, response);
    }
}