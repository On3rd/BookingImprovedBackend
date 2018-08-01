package com.booking.app.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_role_tabel")

public class User_Roles {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userRoleName_Id;
	
	
	@OneToOne
	private RoleNames roleNames;
	

	
	public RoleNames getRoleNames() {
		return roleNames;
	}
	
	public void setRoleNames(RoleNames roleNames) {
		this.roleNames = roleNames;
	}
	
	public Long getUserRoleName_Id() {
		return userRoleName_Id;
	}

	public User_Roles( RoleNames roleNames) {
		super();
		
		this.roleNames = roleNames;
	}

	public User_Roles() {
		
	}
	
	
	
}
