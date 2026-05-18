package com.chakri._0th_assignment_backend4.controller;
import com.chakri._0th_assignment_backend4.entity.Item;
import com.chakri._0th_assignment_backend4.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")

@CrossOrigin("*")

public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return itemService.addItem(item);
    }

    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable Long id) {
        return itemService.getItemById(id);
    }

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable Long id,
                           @RequestBody Item item) {

        return itemService.updateItem(id, item);
    }

    @DeleteMapping("/{id}")
    public String deleteItem(@PathVariable Long id) {

        itemService.deleteItem(id);

        return "item delete successfully";
    }
}