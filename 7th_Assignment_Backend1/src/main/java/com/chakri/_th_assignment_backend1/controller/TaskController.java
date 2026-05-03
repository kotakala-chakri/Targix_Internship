package com.chakri._th_assignment_backend1.controller;

import com.chakri._th_assignment_backend1.model.Task;
import com.chakri._th_assignment_backend1.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping
    public List<Task> getAllTasks() {
        return service.getAllTasks();
    }

    @GetMapping("/{id}")
    public Task getTask(@PathVariable Long id) {
        return service.getTaskById(id);
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return service.addTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        return service.updateTask(id, task);
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
        return "Task deleted";
    }
}
