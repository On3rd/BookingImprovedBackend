package com.booking.app.services;

import com.booking.app.modal.RoleNames;
import com.booking.app.repository.RoleNamesRepository;

public class RoleNamesService {

	
private final RoleNamesRepository roleNamesRepository;
	
	public RoleNamesService(RoleNamesRepository roleNamesRepository)
	{
		this.roleNamesRepository = roleNamesRepository;
	}
		public void saveMyRoleNames(RoleNames roleNames)
		{
			roleNamesRepository.save(roleNames);
		}
}
