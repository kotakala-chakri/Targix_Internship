package com.chakri.course_management_backend.entity;
import jakarta.persistence.*;
        import lombok.*;

@Entity
@Table(name = "courses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    private String trainer;

    private String duration;

    private Double price;

    private String imageUrl;
}