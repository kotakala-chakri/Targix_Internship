package com.chakri._th_assignment_backend1.service;




import com.chakri._th_assignment_backend1.model.Task;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TaskService {

    private final List<Task> tasks = new ArrayList<>();

    public List<Task> getAllTasks() {
        return tasks;
    }

    public Task getTaskById(Long id) {
        return tasks.stream()
                .filter(t -> t.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public Task addTask(Task task) {
        tasks.add(task);
        return task;
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task task = getTaskById(id);
        if (task != null) {
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());
            task.setCompleted(updatedTask.isCompleted());
        }
        return task;
    }

    public void deleteTask(Long id) {
        tasks.removeIf(t -> t.getId().equals(id));
    }
}
