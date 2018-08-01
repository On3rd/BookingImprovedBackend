package com.booking.app.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.booking.app.modal.UserPaymentMethod;
import com.booking.app.repository.UserPaymentMethodRepository;

@Service
@Transactional
public class UserPaymentMethodService {
	
private final UserPaymentMethodRepository userPaymentMethodRepository;
	
	public UserPaymentMethodService(UserPaymentMethodRepository userPaymentMethodRepository)
	{
		this.userPaymentMethodRepository = userPaymentMethodRepository;
	}
	
	public void saveMyUserPaymentMethod(UserPaymentMethod userPaymentMethod)
	{
		userPaymentMethodRepository.save(userPaymentMethod);
	}
}
