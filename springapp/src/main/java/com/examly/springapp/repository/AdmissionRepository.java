package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.AdmissionModel;

@Repository
public interface AdmissionRepository extends JpaRepository<AdmissionModel, Integer> {

	public List<AdmissionModel> findAllByStudentId(String studentId) ;

	public Optional<AdmissionModel> findByStudentIdAndCourseId(String studentId, int courseId);
}
