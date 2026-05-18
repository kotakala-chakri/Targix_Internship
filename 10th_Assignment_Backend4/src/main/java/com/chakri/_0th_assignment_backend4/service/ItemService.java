package com.chakri._0th_assignment_backend4.service;

import com.chakri._0th_assignment_backend4.entity.Item;

import java.util.List;

public interface ItemService {

    Item addItem(Item item);

    List<Item> getAllItems();

    Item getItemById(Long id);

    Item updateItem(Long id, Item item);

    void deleteItem(Long id);
}