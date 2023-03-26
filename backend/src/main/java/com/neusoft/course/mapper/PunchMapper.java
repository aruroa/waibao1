package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.ActivityModel;
import com.neusoft.course.mapper.dao.PunchModel;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component(value = "punchMapper")
public interface PunchMapper {


  Integer countPunch(Date tDT, Long userId);

  Integer insertPunch(Date tDT, Long userId);

  Integer updatePunchUp(Date tDT, Long userId, String building);

  PunchModel getPunch(Date tDT, Long userId);
}
