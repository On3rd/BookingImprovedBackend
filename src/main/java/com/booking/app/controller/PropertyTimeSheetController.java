package com.booking.app.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.booking.app.modal.PropertyTimeSheet;
import com.booking.app.repository.PropertyTimeSheetRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class PropertyTimeSheetController {

	@Autowired
	 
	private PropertyTimeSheetRepository propertyTimeSheetRepository;
	
	@GetMapping("/propertyTimeSheet")
	public List<PropertyTimeSheet> getPropertyTimeSheet()
	{
		return propertyTimeSheetRepository.findAll();
	}
	
	@GetMapping("/propertyTimeSheet/{PropTimeSheetId}")
	public Optional<PropertyTimeSheet> getPropertyTimeSheet(@PathVariable Long PropTimeSheetId)
	{
		return propertyTimeSheetRepository.findById(PropTimeSheetId);
	}
	
	@DeleteMapping("/propertyTimeSheet/{PropTimeSheetId}")
	public boolean deletePropertyTimeSheet(@PathVariable Long PropTimeSheetId)
	{
		propertyTimeSheetRepository.deleteById(PropTimeSheetId);
		return true;
	}

	@PostMapping("/propertyTimeSheet")
	public PropertyTimeSheet createPropertyTimeSheet(@RequestBody PropertyTimeSheet propertyTimeSheet)
	{
		
		return propertyTimeSheetRepository.save(propertyTimeSheet);
	}

	@PutMapping("/propertyTimeSheet")
	public PropertyTimeSheet updatePropertyTimeSheet(@RequestBody PropertyTimeSheet propertyTimeSheet)
	{
		return propertyTimeSheetRepository.save(propertyTimeSheet);
	}
	
	
	@GetMapping("/viewAvailability/{prod_id}")
	public List<PropertyTimeSheet> getAvailability(@PathVariable Long prod_id)
	{
		List<PropertyTimeSheet> propertyTimeSheet = new ArrayList<>();
		

		if(propertyTimeSheetRepository.findAll().isEmpty())
		{
			propertyTimeSheet = null;;
		}else
		{
			for(int index = 0 ; index < propertyTimeSheetRepository.findAll().size();index++ ) {
				
				if(propertyTimeSheetRepository.findAll().get(index).getProp_Id() == prod_id)
				{
					propertyTimeSheet.add(propertyTimeSheetRepository.findAll().get(index));
				}
				else
				{
					propertyTimeSheet =null;
				}
				
			}
		}
		
		return propertyTimeSheet;
	}
	
	
	
	 

	
	
}
