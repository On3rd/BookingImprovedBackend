package com.booking.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.booking.app.modal.User_Roles;

public interface UserRolesRepository  extends JpaRepository<User_Roles, Long> {

}
