package com.booking.app.controller;




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

import com.booking.app.modal.DisplayProperties;
import com.booking.app.repository.DisplayPropertiesRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class displayPropertiesController {


	@Autowired
	 
	private DisplayPropertiesRepository displayPropertiesRepository;
	
	@GetMapping("/displayProperties")
	public List<DisplayProperties> getDisplayProperties()
	{
		return displayPropertiesRepository.findAll();
	}
	
	@GetMapping("/displayProperties/{disp_Id}")
	public Optional<DisplayProperties> getDisplayProperty(@PathVariable Long disp_Id)
	{
		return displayPropertiesRepository.findById(disp_Id);
	}
	
	@DeleteMapping("/displayProperties/{disp_Id}")
	public boolean deleteDisplayProperties(@PathVariable Long disp_Id)
	{
		displayPropertiesRepository.deleteById(disp_Id);
		return true;
	}

	@PostMapping("/displayProperties")
	public DisplayProperties createDisplayProperties(@RequestBody DisplayProperties displayProperties)
	{
		return displayPropertiesRepository.save(displayProperties);
	}

	@PutMapping("/displayProperties")
	public DisplayProperties updateDisplayProperties(@RequestBody DisplayProperties displayProperties)
	{
		return displayPropertiesRepository.save(displayProperties);
	}
	
	 

	
	
}
