package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AdmissionModel;
import com.example.demo.model.CourseModel;
import com.example.demo.model.StudentModel;
import com.example.demo.repository.AdmissionRepository;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.StudentRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private AdmissionRepository admissionRepository;

	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	private CourseRepository courseRepository ;

	@PostMapping("/addAdmission/")
	public void addAdmission(StudentModel student, int courseId, int instituteId) {
		AdmissionModel admission = new AdmissionModel();
		admission.setCourseId(courseId);
		admission.setInstituteid(instituteId);
		admission.setStatus("pending");

		admissionRepository.save(admission);

	}
	
	@PostMapping("/enrollCourse")
	public void enrollCourse(@RequestBody AdmissionModel admissionModel) {
		if(admissionRepository.findByStudentIdAndCourseId(admissionModel.getStudentId() , admissionModel.getCourseId()).isEmpty())
			admissionRepository.save(admissionModel) ;
	}

	@PostMapping("/update/editAdmission/{admissionId}")
	public void editAdmission(int admissionId) {

		/* admissionRepository.save(null); */
		return;
	}

	@GetMapping("/viewAdmission")
	public StudentModel viewAdmission(int admissionId) {
		Optional<AdmissionModel> optional = admissionRepository.findById(admissionId);
		if (optional.isEmpty())
			return null;

		Integer studentId = Integer.parseInt(optional.get().getStudentId());

		Optional<StudentModel> student = studentRepository.findById(studentId);

		return student.isEmpty() ? null : student.get();
	}

	@DeleteMapping("/deleteAdmission/{admissionId}")
	public void deleteAdmission(@PathVariable int admissionId) {

		admissionRepository.deleteById(admissionId);
	}

	@GetMapping("/viewStatus")
	public String viewStatus(int admissionId) {

		Optional<AdmissionModel> admission = admissionRepository.findById(admissionId);

		return admission.isEmpty() ? null : admission.get().getStatus();
	}
	
	@GetMapping("/getEnrolledCourses/{studentId}")
	public List<CourseModel> getEnrolledCourses(@PathVariable String studentId){
		
		List<AdmissionModel> admissions = admissionRepository.findAllByStudentId(studentId);
		
		List<CourseModel> courses = new ArrayList<>();
		for(AdmissionModel admission : admissions) {
			int courseId = admission.getCourseId() ;
			courses.add(courseRepository.findById(courseId).get()) ;
		}
		
		return courses ;
	}
	
	
	
	
}
