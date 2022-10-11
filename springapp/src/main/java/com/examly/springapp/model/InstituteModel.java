package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class InstituteModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int instituteId;
	private String instituteName;
	private String instituteDescription;
	private String instituteAddress;
	private String mobile;
	private String email;
	
	private String logo ;

	
	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public int getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(int instituteId) {
		this.instituteId = instituteId;
	}

	public String getInstituteName() {
		return instituteName;
	}

	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}

	public String getInstituteDescription() {
		return instituteDescription;
	}

	public void setInstituteDescription(String instituteDescription) {
		this.instituteDescription = instituteDescription;
	}

	public String getInstituteAddress() {
		return instituteAddress;
	}

	public void setInstituteAddress(String instituteAddress) {
		this.instituteAddress = instituteAddress;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public InstituteModel(int instituteId, String instituteName, String instituteDescription, String instituteAddress,
			String mobile, String email) {
		super();
		this.instituteId = instituteId;
		this.instituteName = instituteName;
		this.instituteDescription = instituteDescription;
		this.instituteAddress = instituteAddress;
		this.mobile = mobile;
		this.email = email;
	}
	

	public InstituteModel(int instituteId, String instituteName, String instituteDescription, String instituteAddress,
			String mobile, String email, String logo) {
		super();
		this.instituteId = instituteId;
		this.instituteName = instituteName;
		this.instituteDescription = instituteDescription;
		this.instituteAddress = instituteAddress;
		this.mobile = mobile;
		this.email = email;
		this.logo = logo;
	}

	public InstituteModel() {
		super();
	}

}
