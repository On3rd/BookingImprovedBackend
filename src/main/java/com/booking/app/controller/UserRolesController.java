package com.booking.app.controller;

import java.util.List;

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

import com.booking.app.modal.User_Roles;
import com.booking.app.repository.UserRolesRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class UserRolesController {

	@Autowired
	private UserRolesRepository userRoleRepository;
	
	
	
	@GetMapping("/user_Roles")
	public List<User_Roles> getUser_Roles()
	{
		return userRoleRepository.findAll();
	}
	
	@DeleteMapping("/user_Roles/{user_Roles_Id}")
	public boolean deleteUser_Roles(@PathVariable Long user_Roles_Id)
	{
		userRoleRepository.deleteById(user_Roles_Id);
		return true;
	}

	@PostMapping("/user_Roles")
	public User_Roles createUser_Roles(@RequestBody User_Roles user_Roles)
	{
		return userRoleRepository.save(user_Roles);
	}

	@PutMapping("/user_Roles")
	public User_Roles updateUser_Roles(@RequestBody User_Roles user_Roles)
	{
		return userRoleRepository.save(user_Roles);
	}
	
	
}
