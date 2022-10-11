package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AdminModel {

	@Id
	private String email;
	private String password;
	private String userName;

	private String mobileNumber;
	private String userRole;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public AdminModel(String email, String password, String mobileNumber, String userRole) {
		super();
		this.email = email;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.userRole = userRole;
	}

	public AdminModel() {
		super();
	}

	public AdminModel(String email, String password, String userName, String mobileNumber, String userRole) {
		super();
		this.email = email;
		this.password = password;
		this.userName = userName;
		this.mobileNumber = mobileNumber;
		this.userRole = userRole;
	}

}
