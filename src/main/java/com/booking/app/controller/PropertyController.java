package com.booking.app.controller;

import java.text.DecimalFormat;
import java.util.ArrayList;
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

import com.booking.app.modal.AccBooking;
import com.booking.app.modal.Property;
import com.booking.app.repository.AccBookingRepository;
import com.booking.app.repository.PropertyRepository;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200",allowedHeaders = "*")

public class PropertyController {

	@Autowired
	private PropertyRepository propertyRepository;
	
	@Autowired
	private AccBookingRepository accBookingRepository;
	
	DecimalFormat df = new DecimalFormat("0.00"); 
	
	@GetMapping("/property")
	public List<Property> getProperties()
	{
		return propertyRepository.findAll();
	}
	
	@GetMapping("/property/{prob_Id}")
	public Optional<Property> getProperty(@PathVariable Long prob_Id)
	{
		return propertyRepository.findById(prob_Id);
	}
	
	@DeleteMapping("/property/{prob_Id}")
	public boolean deleteProperty(@PathVariable int prob_Id)
	{
		propertyRepository.deleteById((long) prob_Id);
		return true;
	}

	@PostMapping("/property")
	public Property createProperty(@RequestBody Property property)
	{
		
		return propertyRepository.save(property);
	}

	@PutMapping("/property")
	public Property updateProperty(@RequestBody Property property)
	{
		return propertyRepository.save(property);
	}
	
	
	@GetMapping("/ownedProperties/{user_Id}")
	public List<Property> ownedProperties(@PathVariable int user_Id)
	{
		List<Property> properties = new ArrayList<>();
		
		for(int index = 0;index <propertyRepository.findAll().size();index++ )
		{
			if(propertyRepository.findAll().get(index).getUser().getUser_Id() == user_Id )
			{
				properties.add(propertyRepository.findAll().get(index));
			}
		}
		return properties;
	}
	
	@GetMapping("/checkOwnership/{user_Id}")
	public boolean checkOwnership(@PathVariable int user_Id)
	{
		for(int index = 0;index <propertyRepository.findAll().size();index++ )
		{
			if(propertyRepository.findAll().get(index).getUser().getUser_Id() == user_Id )
			{
				return true;
			}
		}
		return false;
	}
	
	
	
	@GetMapping("/searchProperty/{title}/{rooms}/{visitors}")
	public List<Property> searchProperty(@PathVariable String title,@PathVariable int rooms,@PathVariable int visitors)
	{
		
		
		List<Property> properties = new ArrayList<>();
		
		if(propertyRepository.findAll().isEmpty() != true )
		{
		for(int index = 0; index < propertyRepository.findAll().size() ;index++)
		{
		
			if(propertyRepository.findAll().get(index).getCity().equals(title) || propertyRepository.findAll().get(index).getProp_name().equals(title)||propertyRepository.findAll().get(index).getCountry().equals(title) ||propertyRepository.findAll().get(index).getProvince().equals(title)||propertyRepository.findAll().get(index).getProp_type().equals(title) )
			{
				if(rooms < 1 && visitors < 1)
				{
					
					properties.add(propertyRepository.findAll().get(index));
					
				}
				else if(rooms <= propertyRepository.findAll().get(index).getNumberRoom() && visitors <= 						propertyRepository.findAll().get(index).getNumberRoom())
					{	
						properties.add(propertyRepository.findAll().get(index));
						
					}
					
				
				
			}
			
		}
		}else
		{
			return null;
		}
		
		return properties;
		
	
	}
	
	@GetMapping("/displayProperty/{title}")
	public List<Property> displayProperty(@PathVariable String title)
	{
		List<Property> properties = new ArrayList<>();
		
		for (int index=0;index <propertyRepository.findAll().size();index++) {
		
			if(propertyRepository.findAll().get(index).getProp_name().equalsIgnoreCase(title)||propertyRepository.findAll().get(index).getCity().equalsIgnoreCase(title)||propertyRepository.findAll().get(index).getCountry().equalsIgnoreCase(title)||propertyRepository.findAll().get(index).getProvince().equalsIgnoreCase(title))
			{
				properties.add(propertyRepository.findAll().get(index));
			}
			
		}
		
		return properties;
	}
	
	
	
	 @GetMapping("/displayAvarage/{title}")
	 public double getAvarage(@PathVariable String title)
	 {
		 double total = 0;
		 int sum = 0;
		 if(propertyRepository.findAll().isEmpty() != true) {
		 for (int index=0;index <propertyRepository.findAll().size();index++) {
			 if(propertyRepository.findAll().get(index).getProp_name().equals(title)||propertyRepository.findAll().get(index).getCity().equals(title)||propertyRepository.findAll().get(index).getCountry().equals(title))
			 {
				 total = total + propertyRepository.findAll().get(index).getPrice();
				 sum++;
				}
			 
		 }
		 }else
		 {
			 return 0;
		 }
		return Double.parseDouble(df.format(total / sum)); 
	 }
	 
	 @GetMapping("/viewReservations/{property_Id}/{user_Id}")
	 public List<AccBooking> viewReservations(@PathVariable int property_Id,@PathVariable int user_Id)
	 {
		 List<AccBooking> accBooking = new ArrayList<>();
			
		 for(int index = 0; index < accBookingRepository.findAll().size();index++)
		 {
			 if(accBookingRepository.findAll().get(index).getProperty().getProp_Id()== property_Id &&
					 accBookingRepository.findAll().get(index).getProperty().getUser().getUser_Id() == user_Id	 )
			 {
				 accBooking.add(accBookingRepository.findAll().get(index));
			 }
		 }
		 
		 return accBooking;
	 }
	 
	 @GetMapping("/countProperties/{title}")
	 public int countProperties(@PathVariable String title)
	 {
		 int total = 0;
		 if(propertyRepository.findAll().isEmpty() != true) {
		 for (int index=0;index <propertyRepository.findAll().size();index++) {
			 if(propertyRepository.findAll().get(index).getProp_name().equals(title)||propertyRepository.findAll().get(index).getCity().equals(title)||propertyRepository.findAll().get(index).getCountry().equals(title)||propertyRepository.findAll().get(index).getProvince().equals(title))
				{
				 
				 total++;
				 
				}
			 
		 }
		 }else
		 {
			 return 0;
		 }
		return total;
	 }
	 
	 @GetMapping("/possibleEntry/{title}")
	 public List<String> getPossibleEntry(@PathVariable String title)
		{
			
			List<String> Country = new ArrayList<>();
			List<String> City = new ArrayList<>();
			List<String> Province = new ArrayList<>();
			List<String> Results = new ArrayList<>();
			List<String> Place = new ArrayList<>();
			String country = null;
			String city = null;
			String province = null;
			String place = null;
			if(propertyRepository.findAll().isEmpty())
			{
				return null;
			}else
			{
				for(int x = 0 ; x < propertyRepository.findAll().size(); x++)
				{
					for(int z = 0 ; z<title.length();z++)
					{
						if(propertyRepository.findAll().get(x).getCountry().startsWith(title)&&propertyRepository.findAll().get(x).getCountry().charAt(z) == title.charAt(z))
							{
								if(!Country.contains(propertyRepository.findAll().get(x).getCountry()))
								{
									country = propertyRepository.findAll().get(x).getCountry();
								}
									
							}
						
						if(propertyRepository.findAll().get(x).getCity().startsWith(title)&&propertyRepository.findAll().get(x).getCity().charAt(z) == title.charAt(z))
						{
							if(!City.contains(propertyRepository.findAll().get(x).getCity()))
							{
							city = propertyRepository.findAll().get(x).getCity();
							}
						}
						
						
						
						if(propertyRepository.findAll().get(x).getProvince().startsWith(title)&&propertyRepository.findAll().get(x).getProvince().charAt(z) == title.charAt(z))
						{
							if(!Province.contains(propertyRepository.findAll().get(x).getProvince()))
							{
							province = propertyRepository.findAll().get(x).getProvince();
							}
						}
						
						if(propertyRepository.findAll().get(x).getProp_name().startsWith(title)&&propertyRepository.findAll().get(x).getProp_name().charAt(z) == title.charAt(z))
						{
							if(!Place.contains(propertyRepository.findAll().get(x).getProp_name()))
							{
							place = propertyRepository.findAll().get(x).getProp_name();
							}	
						}
							
					}
					
						
				}
				Country.add(country);
				City.add(city);
				Province.add(province);
				Place.add(place);
			}
			Results.addAll(Country);
			Results.addAll(City);
			Results.addAll(Province);
			Results.addAll(Place);
			
			return Results;
		}
	 
	 
	
}
