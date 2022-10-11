package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.AdminModel;
import com.example.demo.model.MyUserDetails;
import com.example.demo.repository.AdminRepository;

@Service
public class MyAdminDetailsService implements UserDetailsService{

	@Autowired
	private AdminRepository adminRepository ;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<AdminModel> applicationUser = adminRepository.findById(username);
		if(applicationUser.isEmpty()) {
			throw new UsernameNotFoundException("User not found "+ username);
		}
		return new MyUserDetails(applicationUser.get().getEmail() ,applicationUser.get().getPassword() );
	}

	
}

