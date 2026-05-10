package com.chakri._th_asssignment_backend3.repository;
import com.chakri._th_asssignment_backend3.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}