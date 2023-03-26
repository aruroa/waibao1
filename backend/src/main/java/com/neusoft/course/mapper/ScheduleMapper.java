package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.ScheduleModel;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "scheduleMapper")
public interface ScheduleMapper {
    List<ScheduleModel> getSchedules();

    void SignIn(@Param("date") String date, @Param("userId") String userId);
}
