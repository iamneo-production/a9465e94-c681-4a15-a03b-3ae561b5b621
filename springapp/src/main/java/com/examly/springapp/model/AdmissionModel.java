package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdmissionModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int admissionId ;
	
	private String studentId ;
	private int courseId ;
	private int instituteid ;
	
	private String status ;

	public int getAdmissionId() {
		return admissionId;
	}

	public void setAdmissionId(int admissionId) {
		this.admissionId = admissionId;
	}

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public int getInstituteid() {
		return instituteid;
	}

	public void setInstituteid(int instituteid) {
		this.instituteid = instituteid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public AdmissionModel(int admissionId, String studentId, int courseId, int instituteid, String status) {
		super();
		this.admissionId = admissionId;
		this.studentId = studentId;
		this.courseId = courseId;
		this.instituteid = instituteid;
		this.status = status;
	}

	public AdmissionModel() {
		super();
	}
	
	
	
	
}
