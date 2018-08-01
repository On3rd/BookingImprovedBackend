package com.booking.app.services;


import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.booking.app.modal.DisplayProperties;
import com.booking.app.repository.DisplayPropertiesRepository;

@Service
@Transactional
public class DisplayPropertiesService {


	
private final DisplayPropertiesRepository displayPropertiesRepository;
	
	public DisplayPropertiesService(DisplayPropertiesRepository displayPropertiesRepository)
	{
		this.displayPropertiesRepository = displayPropertiesRepository;
	}
		public void saveMyDisplayProperty(DisplayProperties displayProperties)
		{
			displayPropertiesRepository.save(displayProperties);
		}
}