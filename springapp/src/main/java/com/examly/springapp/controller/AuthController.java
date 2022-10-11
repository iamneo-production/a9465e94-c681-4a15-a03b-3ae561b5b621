package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.AdminModel;
import com.example.demo.model.LoginModel;
import com.example.demo.model.UserModel;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;

@RestController
@CrossOrigin("*")
public class AuthController {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	PasswordEncoder passwordEncoder ;

	@PostMapping("/user/login")
	public ResponseEntity<UserModel> isUserPresent(@RequestBody LoginModel data) {
		System.out.println(data.getEmail() + "," + data.getPassword());
		Optional<UserModel> optional = userRepository.findById(data.getEmail());
		if (optional.isEmpty())
			return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);

		if (passwordEncoder.matches(data.getPassword(), optional.get().getPassword()))
			return new ResponseEntity<>(optional.get(), HttpStatus.OK);

		return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);

	}

	@PostMapping("/admin/login")
	public ResponseEntity<AdminModel> isAdminPresent(@RequestBody LoginModel data) {
		System.out.println(data.getEmail() + "," + data.getPassword());
		Optional<AdminModel> optional = adminRepository.findById(data.getEmail());
		if (optional.isEmpty())
			return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);

		if (passwordEncoder.matches(data.getPassword(), optional.get().getPassword()))
			return new ResponseEntity<>(optional.get(), HttpStatus.OK);

		return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);

	}

	@PostMapping("/user/signup")
	public ResponseEntity<String> saveuser(@RequestBody UserModel user) {
		/**
		 * 
		 * To-do use Bcrypt password encoder before saving it
		 */
		if (!userRepository.findById(user.getEmail()).isEmpty())
			return new ResponseEntity<>("User email already exists", HttpStatus.NOT_ACCEPTABLE);

		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		return new ResponseEntity<>("User Account Successfully created", HttpStatus.OK);

	}

	@PostMapping("/admin/signup")
	public ResponseEntity<String> saveAdmin(@RequestBody AdminModel admin) {

		/**
		 * 
		 * To-do use Bcrypt password encoder before saving it
		 */
		if (!adminRepository.findById(admin.getEmail()).isEmpty())
			return new ResponseEntity<>("Admin email already exists", HttpStatus.NOT_ACCEPTABLE);

		admin.setPassword(passwordEncoder.encode(admin.getPassword()));

		adminRepository.save(admin);
		return new ResponseEntity<>("Admin Account Successfully created", HttpStatus.OK);
	}
}
