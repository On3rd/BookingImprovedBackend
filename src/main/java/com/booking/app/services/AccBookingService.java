package com.booking.app.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.booking.app.modal.AccBooking;
import com.booking.app.repository.AccBookingRepository;


@Service
@Transactional
public class AccBookingService {

	private final AccBookingRepository accBookingRepository;

	public AccBookingService(AccBookingRepository accBookingRepository)
	{
		this.accBookingRepository = accBookingRepository;
	}
		public void saveMyAccBooking(AccBooking accBooking)
		{
			accBookingRepository.save(accBooking);
		}
}
