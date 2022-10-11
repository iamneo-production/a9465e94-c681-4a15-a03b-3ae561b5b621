package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.demo.service.MyAdminDetailsService;
import com.example.demo.service.MyUserDetailsService;



@SuppressWarnings("deprecation")
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	MyUserDetailsService myUserDetailsService ;
	
	@Autowired
	MyAdminDetailsService myAdminDetailsService ;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		//auth.inMemoryAuthentication().withUser("").password(passwordEncoder.encode("@")).roles("admin") ;
	
//		auth.userDetailsService(myUserDetailsService);
		
		auth.authenticationProvider(userAuthProvider())
			.authenticationProvider(adminAuthProvider());
	
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.authorizeHttpRequests()
		.antMatchers("/**").permitAll()
//		.and()
//		.formLogin().loginPage("/login").permitAll()
		.antMatchers("/admin/signup").permitAll()
		.antMatchers("/admin/login").permitAll()
		.antMatchers("/user/signup").permitAll()
		.antMatchers("/user/login").permitAll()
		.and()
		.httpBasic()
		.and().logout();
		
		http.csrf().disable() ;
		http.cors() ;
		
	}
	
	@Bean
	public PasswordEncoder encoder() {
	    return new BCryptPasswordEncoder();
	}
	

	@Bean
	public DaoAuthenticationProvider userAuthProvider() {
	    DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
	    authProvider.setUserDetailsService(myUserDetailsService);
	    authProvider.setPasswordEncoder(encoder());
	    return authProvider;
	}
	
	@Bean
	public DaoAuthenticationProvider adminAuthProvider() {
	    DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
	    authProvider.setUserDetailsService(myAdminDetailsService);
	    authProvider.setPasswordEncoder(encoder());
	    return authProvider;
	}
	
}
