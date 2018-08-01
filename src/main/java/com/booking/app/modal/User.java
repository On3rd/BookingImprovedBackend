package com.booking.app.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "usertable")

public class User {
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long user_Id;
	private String name;
	private String surname;
	private String email;
	private String phonenumber;
	private String password;
	
	
	@OneToOne
	private User_Roles userRoles;
	
	@OneToOne
	private UserPaymentMethod userPaymentMethod;
	
	@OneToOne 
	private UserContactInformation userContactInformation;
	

	public UserPaymentMethod getUserPaymentMethod() {
		return userPaymentMethod;
	}

	public UserContactInformation getUserContactInformation() {
		return userContactInformation;
	}


	public User_Roles getUserRoles() {
		return userRoles;
	}
	
	public String getName() {
		return name;
	}
	public Long getUser_Id() {
		return user_Id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return phonenumber;
	}
	public void setPhoneNo(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	                       

	

	public User(String name, String surname, String email, String phonenumber, String password, User_Roles userRoles,
			UserPaymentMethod userPaymentMethod, UserContactInformation userContactInformation) {
		super();
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.password = password;
		this.userRoles = userRoles;
		this.userPaymentMethod = userPaymentMethod;
		this.userContactInformation = userContactInformation;
	}

	public User()
	{
		
	}
	
	@Override
	public String toString() {
		return "User [name=" + name + ", surname=" + surname + ", email=" + email + ", phonenumber="
				+ phonenumber + ", password=" + password + "]";
	}
	
	
	
}
