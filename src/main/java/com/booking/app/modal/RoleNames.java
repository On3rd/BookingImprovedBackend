package com.booking.app.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "role_names_tabel")

public class RoleNames {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private Long roleName_Id;
	
		
	private String role_name;
	
	
	public String getRole() {
		return role_name;
	}
	
	public void setRole(String role_name) {
		this.role_name = role_name;
	}
	
	public Long getRoleName_Id() {
		return roleName_Id;
	}
	
	public RoleNames(String role_name) {
		
		this.role_name = role_name;
	}
	
	public RoleNames() {
		
	}
	
	
}
