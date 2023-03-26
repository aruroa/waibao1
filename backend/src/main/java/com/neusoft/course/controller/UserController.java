package com.neusoft.course.controller;

import com.neusoft.course.mapper.dao.UserModel;
import com.neusoft.course.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public UserModel addUser(@RequestBody UserModel userModel) {
        return userService.addUser(userModel);
    }

    @PostMapping("/users/upusers")
    public ResponseEntity updateUserUser(@RequestBody UserModel userModel) {
        if (userService.updateUser(userModel) == 1) {
            // 204
            return ResponseEntity.noContent().build();
        } else {
            // 404
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/users/count")
    public Map<String, Integer> countUser() {
        Integer userCount = userService.countUser();
        return Map.of("count", userCount);
    }

    @GetMapping("/users")
    public List<UserModel> getAllUser() {
        return userService.getAllUser();
    }

    @GetMapping("/users/search/{name}")
    public List<UserModel> getUserByName(@PathVariable("name") String name) {
        return userService.getUserByName(name);
    }

    @GetMapping("/users/getId/{username}")
    public int getUserByUsername(@PathVariable("username") String username) {
      return userService.getUserByUsername(username);
    }

  @GetMapping("/users/getType/{userId}")
  public int getType(@PathVariable("userId") Long userId) {
    return userService.getType(userId);
  }

    @GetMapping("/users/{id}")
    public UserModel getUserById(@PathVariable("id") Long userId) {
        return userService.getUserById(userId);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity deleteUser(@PathVariable("id") Long userId) {
        if (userService.deleteUser(userId) == 1) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
