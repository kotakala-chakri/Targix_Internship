package com.chakri._0th_assignment_backend4.service;
import com.chakri._0th_assignment_backend4.entity.Item;
import com.chakri._0th_assignment_backend4.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    @Override
    public Item updateItem(Long id, Item item) {

        Item existingItem = itemRepository.findById(id).orElse(null);

        if(existingItem != null) {

            existingItem.setItemName(item.getItemName());
            existingItem.setDescription(item.getDescription());
            existingItem.setLocation(item.getLocation());
            existingItem.setType(item.getType());
            existingItem.setContact(item.getContact());

            return itemRepository.save(existingItem);
        }

        return null;
    }

    @Override
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}