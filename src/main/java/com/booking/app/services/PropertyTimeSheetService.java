package com.booking.app.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;


import com.booking.app.modal.PropertyTimeSheet;

import com.booking.app.repository.PropertyTimeSheetRepository;

@Service
@Transactional
public class PropertyTimeSheetService {

	
private final PropertyTimeSheetRepository propertyTimeSheetRepository;
	
	public PropertyTimeSheetService(PropertyTimeSheetRepository propertyTimeSheetRepository)
	{
		this.propertyTimeSheetRepository = propertyTimeSheetRepository;
	}
	
	public void saveMyPropertyTimeSheet(PropertyTimeSheet propertyTimeSheet)
	{
			propertyTimeSheetRepository.save(propertyTimeSheet);
	}
}
