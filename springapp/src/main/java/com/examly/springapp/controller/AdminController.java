package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CourseModel;
import com.example.demo.model.InstituteModel;
import com.example.demo.model.StudentModel;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.InstituteRepository;
import com.example.demo.repository.StudentRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private StudentRepository studentRepository ;
	
	@Autowired
	private CourseRepository courseRepository ;
	
	@Autowired
	private InstituteRepository instituteRepository ;
	
	
	
	@PostMapping("/addStudent")
	public void addStudent(@RequestBody StudentModel student) {
		studentRepository.save(student) ;
	}
	
	@GetMapping("/getStudent/{studentId}")
	public StudentModel viewStudent(@PathVariable int studentId) {
		Optional<StudentModel> optional = studentRepository.findById(studentId) ;
		
		return optional.isEmpty() ? null : optional.get() ;
	}
	
	@PutMapping("/editStudent")
	public void editStudent(@PathVariable int studentId , @RequestBody StudentModel student) {
		/** studentRepository.save(null); **/
	}
	
	@DeleteMapping("/deleteStudent/{studentId}")
	public void deleteStudent(@PathVariable int studentId) {
		studentRepository.deleteById(studentId);
	}
	
	@PostMapping("/addCourse")
	public void addCourse(@RequestBody CourseModel course) {
		courseRepository.save(course) ;
	}
	
	@PutMapping("/editCourse")
	public void editCourse(int courseId) {
		/** courseRepository.save(null); **/
	}
	
	@DeleteMapping("/deleteCourse/{courseId}")
	public void deleteCurse(@PathVariable int courseId) {
		courseRepository.deleteById(courseId);
	}
	
	@GetMapping("/viewCourse/{courseId}")
	public CourseModel viewCourse(@PathVariable int courseId) {
		Optional<CourseModel> optional = courseRepository.findById(courseId) ;
		return optional.isPresent() ? optional.get() : null ;
	}
	
	@PostMapping("/addInstitute")
	public void addInstitute(@RequestBody InstituteModel institute) {
		instituteRepository.save(institute) ;
	}
	
	@PutMapping("/editInstitute/{instituteId}")
	public InstituteModel editInstitute(@PathVariable int instituteId) {
		/** instituteRepository.save(instituteModel) ***/
		
		return instituteRepository.findById(instituteId).get() ;
	}
	
	@DeleteMapping("/deleteInstitute/{instituteId}")
	public void deleteInstitute(@PathVariable int instituteId) {
		instituteRepository.deleteById(instituteId);
	}
	
	@GetMapping("/getInstitute")
	public InstituteModel viewInstitute(int instituteId) {
		Optional<InstituteModel> optional = instituteRepository.findById(instituteId) ;
		return optional.isEmpty() ? null : optional.get() ;
	}
	
	@GetMapping("/getAllInstitutes")
	public List<InstituteModel> getAllInstitutes(){
		return instituteRepository.findAll();
	}
	
	@GetMapping("/getAllCourses")
	public List<CourseModel> getAllCourses(){
		return courseRepository.findAll();
	}
	
	@GetMapping("/getAllStudents")
	public List<StudentModel> getAllStudents(){
		return studentRepository.findAll();
	}
}
