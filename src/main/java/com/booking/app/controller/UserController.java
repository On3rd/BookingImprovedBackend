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

import com.booking.app.modal.User;
import com.booking.app.repository.UserRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class UserController {

	
	@Autowired
	 
	private UserRepository userRepository;
	
	private User user;
	
	
	@GetMapping("/users")
	public List<User> getUsers()
	{
		return userRepository.findAll();
	}
	
	@GetMapping("/users/{user_Id}")
	public Optional<User> getUser(@PathVariable Long user_Id)
	{
		return userRepository.findById(user_Id);
	}
	
	@DeleteMapping("/users/{user_Id}")
	public boolean deleteUser(@PathVariable Long user_Id)
	{
		userRepository.deleteById(user_Id);
		return true;
	}

	@PostMapping("/users")
	public User createUser(@RequestBody User user)
	{
		return userRepository.save(user);
	}

	@PutMapping("/users")
	public User updateUser(@RequestBody User user)
	{
		return userRepository.save(user);
	}
	
	
	@GetMapping("/userlogin/{email}/{password}")
	
	public boolean login( @PathVariable String email , @PathVariable String password)
	{

		
		for (int x = 0; x < userRepository.findAll().size(); x++) {
			if (userRepository.findAll().get(x).getEmail().equals(email)
					&& userRepository.findAll().get(x).getPassword().equals(password)) {
				
				this.setLoggedUser(userRepository.findAll().get(x));
				return true;
				
			}
			
		}

		return false;
	
	}
	
	public void setLoggedUser(User user)
	{
		this.user = user;
	}
	
	@GetMapping("/loggedUser")
	public User getLoggedUser()
	{
		return this.user;
	}
	
	@GetMapping("/searchUser/{user_id}")
	public User searchUser(@PathVariable long user_id)
	{
		for(int index = 0; index < userRepository.findAll().size();index++)
		{
			if(userRepository.findAll().get(index).getUser_Id().equals(user_id))
			{
				return userRepository.findAll().get(index);
			}
		}
		return null;
	}
	
	 

	
	
}
