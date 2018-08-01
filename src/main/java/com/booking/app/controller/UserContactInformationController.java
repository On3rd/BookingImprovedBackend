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

import com.booking.app.modal.UserContactInformation;
import com.booking.app.repository.UserContactInformationRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class UserContactInformationController {

	@Autowired
	private UserContactInformationRepository userContactInformationRepository;
	
	@GetMapping("/userContactInformation")
	public List<UserContactInformation> getUserContactInformation()
	{
		return userContactInformationRepository.findAll();
	}
	
	@GetMapping("/userContactInformation/{UserContactInformationId}")
	public Optional<UserContactInformation> getUserContactInformation(@PathVariable Long UserContactInformationId)
	{
		return userContactInformationRepository.findById(UserContactInformationId);
	}
	
	@DeleteMapping("/userContactInformation/{UserContactInformationId}")
	public boolean deleteUserContactInformation(@PathVariable Long UserContactInformationId)
	{
		userContactInformationRepository.deleteById(UserContactInformationId);
		return true;
	}

	@PostMapping("/userContactInformation")
	public UserContactInformation createUserContactInformation(@RequestBody UserContactInformation userContactInformation)
	{
		
		return userContactInformationRepository.save(userContactInformation);
	}

	@PutMapping("/userContactInformation")
	public UserContactInformation updateUserContactInformation(@RequestBody UserContactInformation userContactInformation)
	{
		return userContactInformationRepository.save(userContactInformation);
	}
	
	 
	
	
}
