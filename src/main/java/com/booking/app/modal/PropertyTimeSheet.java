package com.booking.app.modal;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "PropertyTimeSheet")
public class PropertyTimeSheet {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY	)
	@Column(name= "propTimeSheetId")
	private Long PropTimeSheetId;
	
	private Date AvailableDates;
	
	/*@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "prop_Id",referencedColumnName= "prop_Id")*/
	
	
	private Long prop_Id;
	
	
	

	public Long getProp_Id() {
		return prop_Id;
	}

	public void setProp_Id(Long prop_Id) {
		this.prop_Id = prop_Id;
	}

	public Date getAvailableDates() {
		return AvailableDates;
	}

	public void setAvailableDates(Date availableDates) {
		AvailableDates = availableDates;
	}

	public Long getPropTimeSheetId() {
		return PropTimeSheetId;
	}

	public PropertyTimeSheet( Date availableDates, Long prop_Id) {
		
		AvailableDates = availableDates;
		this.prop_Id = prop_Id;
	}

	public PropertyTimeSheet() {
		
	}
	
	
	
}
