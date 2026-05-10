package com.chakri._th_asssignment_backend3.controller;
import com.chakri._th_asssignment_backend3.entity.Category;
import com.chakri._th_asssignment_backend3.service.CategoryService;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin("*")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
}