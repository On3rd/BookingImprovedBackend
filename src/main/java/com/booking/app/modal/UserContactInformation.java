package com.booking.app.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userContactInformationTable")

public class UserContactInformation {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userContactInfo_Id;
	private String city;
	private String streetAddress;
	private String addressline2;
	private String province;
	private String country;
	private Long postalCode;
	private Long user_Id;
	
	public Long getUserContactInfo_Id() {
		return userContactInfo_Id;
	}
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getStreetAddress() {
		return streetAddress;
	}
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}
	public String getAddressline2() {
		return addressline2;
	}
	public void setAddressline2(String addressline2) {
		this.addressline2 = addressline2;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Long getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(Long postalCode) {
		this.postalCode = postalCode;
	}
	public Long getUser_Id() {
		return user_Id;
	}
	public void setUser_Id(Long user_Id) {
		this.user_Id = user_Id;
	}
	public UserContactInformation(String city, String streetAddress, String addressline2,
			String province, String country, Long postalCode, Long user_Id) {
		
		this.city = city;
		this.streetAddress = streetAddress;
		this.addressline2 = addressline2;
		this.province = province;
		this.country = country;
		this.postalCode = postalCode;
		this.user_Id = user_Id;
	}
	public UserContactInformation() {
		
	}
	
	
	

	
	
	
	
	
}
