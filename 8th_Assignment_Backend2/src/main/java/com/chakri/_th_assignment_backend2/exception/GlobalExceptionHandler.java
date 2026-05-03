

package com.chakri._th_assignment_backend2.exception;

import org.springframework.web.bind.annotation.*;
        import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public Map<String, Object> handleError(RuntimeException ex) {

        Map<String, Object> error = new HashMap<>();
        error.put("time", LocalDateTime.now());
        error.put("message", ex.getMessage());

        return error;
    }
}