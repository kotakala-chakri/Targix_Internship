package com.chakri._th_assignment_backend2.service;

import com.chakri._th_assignment_backend2.model.Task;
import com.chakri._th_assignment_backend2.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task addTask(Task task) {
        return repo.save(task);
    }
}