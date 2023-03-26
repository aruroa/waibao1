package com.neusoft.course.service;

import com.neusoft.course.config.PasswordEncoderConfig;
import com.neusoft.course.mapper.UserMapper;
import com.neusoft.course.mapper.dao.UserModel;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserMapper userMapper;

    private final PasswordEncoder passwordEncoder;

    public UserService(UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public UserModel addUser(UserModel userModel) {
        userModel.setPassword(this.passwordEncoder.encode(userModel.getPassword()));
        userMapper.insert(userModel);
        return userModel;
    }

    public int updateUser(UserModel record){
        System.out.println(record.getPhoneNum());
        return userMapper.updateUser(record);
    }

    public Integer countUser() {
        return userMapper.count();
    }

    public UserModel getUserById(Long userId) { return userMapper.selectByPrimaryKey(userId);
    }

    public List<UserModel> getUserByName(String name) {
        return this.userMapper.getUserByName(name);
    }

    public int getUserByUsername(String username) {
    return this.userMapper.getUserByUsername(username);
    }

    public List<UserModel> getAllUser() {
        return this.userMapper.query();
    }

    public int deleteUser(Long userId) {
        return this.userMapper.deleteByPrimaryKey(userId);
    }

    public int getType(Long userId) {
      return this.userMapper.getType(userId);
    }
}
