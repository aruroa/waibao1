package com.neusoft.course.service;

import com.neusoft.course.mapper.ScheduleMapper;
import com.neusoft.course.mapper.dao.ScheduleModel;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduleService {
    private final ScheduleMapper scheduleMapper;

    public ScheduleService(ScheduleMapper scheduleMapper) {
        this.scheduleMapper = scheduleMapper;
    }

    public List<ScheduleModel> getSchedulesById() {
        return scheduleMapper.getSchedules();
    }
    public void SignIn(@Param("date") String date, @Param("userId") String userId) {
        scheduleMapper.SignIn(date, userId);
    }
}
