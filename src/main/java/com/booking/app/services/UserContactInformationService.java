package com.booking.app.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.booking.app.modal.UserContactInformation;
import com.booking.app.repository.UserContactInformationRepository;

@Service
@Transactional
public class UserContactInformationService {


private final UserContactInformationRepository userContactInformationRepository;
	
	public UserContactInformationService(UserContactInformationRepository userContactInformationRepository)
	{
		this.userContactInformationRepository = userContactInformationRepository;
	}
	
	public void saveMyUserContactInformation(UserContactInformation userContactInformation)
	{
		userContactInformationRepository.save(userContactInformation);
	}
		
}
