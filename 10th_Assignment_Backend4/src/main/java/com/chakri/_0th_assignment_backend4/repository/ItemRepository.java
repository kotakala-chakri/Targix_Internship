package com.chakri._0th_assignment_backend4.repository;

import com.chakri._0th_assignment_backend4.entity.Item;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {

}