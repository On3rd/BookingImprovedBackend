package com.booking.app.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.booking.app.modal.User_Roles;
import com.booking.app.repository.UserRolesRepository;

@Service
@Transactional
public class UserRoleService {
	
private final UserRolesRepository userRolesRepository;
	
	public UserRoleService(UserRolesRepository userRolesRepository)
	{
		this.userRolesRepository = userRolesRepository;
	}
		public void saveMyUserRoles(User_Roles userRoles)
		{
			userRolesRepository.save(userRoles);
		}
}
