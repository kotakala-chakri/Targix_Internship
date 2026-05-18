package com.chakri._0th_assignment_backend4.entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "items")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

     private String itemName;

     private String description;

     private String location;

     private String type;

     private String contact;
}