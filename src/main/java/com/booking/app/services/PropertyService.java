package com.booking.app.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.booking.app.modal.Property;
import com.booking.app.repository.PropertyRepository;

@Service
@Transactional
public class PropertyService {

	
private final PropertyRepository propertyRepository;
	
	public PropertyService(PropertyRepository propertyRepository)
	{
		this.propertyRepository = propertyRepository;
	}
		public void saveMyProperty(Property property)
		{
			propertyRepository.save(property);
		}
}
