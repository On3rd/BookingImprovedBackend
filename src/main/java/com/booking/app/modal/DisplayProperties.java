package com.booking.app.modal;




import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(name = "displayPropertyTable")

public class DisplayProperties {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long disp_Id;
	
	
	private String city;
	
	private String country;
	
	
	private String province;
	
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	
	
	
	
	
	
	public DisplayProperties(String city, String country, String province) {
		super();
		this.city = city;
		this.country = country;
		this.province = province;
		
	}
	public DisplayProperties() {
		}
	
	
}