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

import com.booking.app.modal.UserPaymentMethod;
import com.booking.app.repository.UserPaymentMethodRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class UserPaymentMethodController {

	@Autowired
	private UserPaymentMethodRepository userPaymentMethodRepository;
	
	@GetMapping("/userPaymentMethod")
	public List<UserPaymentMethod> getUserPaymentMethod()
	{
		return userPaymentMethodRepository.findAll();
	}
	
	@GetMapping("/userPaymentMethod/{UserPaymentMethodId}")
	public Optional<UserPaymentMethod> getUserPaymentMethod(@PathVariable Long UserPaymentMethodId)
	{
		return userPaymentMethodRepository.findById(UserPaymentMethodId);
	}
	
	@DeleteMapping("/userPaymentMethod/{UserPaymentMethodId}")
	public boolean deleteUserPaymentMethod(@PathVariable Long UserPaymentMethodId)
	{
		userPaymentMethodRepository.deleteById(UserPaymentMethodId);
		return true;
	}

	@PostMapping("/userPaymentMethod")
	public UserPaymentMethod createUserPaymentMethod(@RequestBody UserPaymentMethod userPaymentMethod)
	{
		
		return userPaymentMethodRepository.save(userPaymentMethod);
	}

	@PutMapping("/userPaymentMethod")
	public UserPaymentMethod updateUserPaymentMethod(@RequestBody UserPaymentMethod userPaymentMethod)
	{
		return userPaymentMethodRepository.save(userPaymentMethod);
	}
	
	 
}
