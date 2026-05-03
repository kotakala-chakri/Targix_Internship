package com.chakri._th_assignment_backend2.controller;

import com.chakri._th_assignment_backend2.model.Task;
import com.chakri._th_assignment_backend2.service.TaskService;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> getTasks() {
        return service.getAllTasks();
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return service.addTask(task);
    }
}