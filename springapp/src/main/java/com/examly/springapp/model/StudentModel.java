package com.example.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StudentModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentId;
	private String studentName;
	private String motherName ;
	private String fatherName ;
	private String gender ;
	private Date studentDOB;
	private String address;
	private String mobile;
	private String alternateMobile ;
	
	private String email ;
	
	private int age;

	
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public StudentModel(int studentId, String studentName, String motherName, String fatherName, String gender,
			Date studentDOB, String address, String mobile, String alternateMobile, String email, int age) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.motherName = motherName;
		this.fatherName = fatherName;
		this.gender = gender;
		this.studentDOB = studentDOB;
		this.address = address;
		this.mobile = mobile;
		this.alternateMobile = alternateMobile;
		this.email = email;
		this.age = age;
	}

	public String getMotherName() {
		return motherName;
	}

	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAlternateMobile() {
		return alternateMobile;
	}

	public void setAlternateMobile(String alternateMobile) {
		this.alternateMobile = alternateMobile;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public Date getStudentDOB() {
		return studentDOB;
	}

	public void setStudentDOB(Date studentDOB) {
		this.studentDOB = studentDOB;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public StudentModel(int studentId, String studentName, Date studentDOB, String address, String mobile, int age) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentDOB = studentDOB;
		this.address = address;
		this.mobile = mobile;
		this.age = age;
	}
	
	

	public StudentModel(int studentId, String studentName, String motherName, String fatherName, String gender,
			Date studentDOB, String address, String mobile, String alternateMobile, int age) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.motherName = motherName;
		this.fatherName = fatherName;
		this.gender = gender;
		this.studentDOB = studentDOB;
		this.address = address;
		this.mobile = mobile;
		this.alternateMobile = alternateMobile;
		this.age = age;
	}

	public StudentModel() {
		super();
	}

}
