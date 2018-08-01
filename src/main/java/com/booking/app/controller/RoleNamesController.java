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

import com.booking.app.modal.RoleNames;
import com.booking.app.repository.RoleNamesRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class RoleNamesController {

	@Autowired
	private RoleNamesRepository roleNamesRepository;
	
	@GetMapping("/roleNames")
	public List<RoleNames> getRoleNames()
	{
		return roleNamesRepository.findAll();
	}
	
	@DeleteMapping("/roleNames/{roleNames_Id}")
	public boolean deleteRoleNames(@PathVariable Long roleNames_Id)
	{
		roleNamesRepository.deleteById(roleNames_Id);
		return true;
	}

	@PostMapping("/roleNames")
	public RoleNames createRoleNames(@RequestBody RoleNames roleNames)
	{
		return roleNamesRepository.save(roleNames);
	}

	@PutMapping("/roleNames")
	public RoleNames updateRoleNames(@RequestBody RoleNames roleNames)
	{
		return roleNamesRepository.save(roleNames);
	}
	
	
}
