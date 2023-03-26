package com.neusoft.course.controller;

import com.neusoft.course.mapper.dao.ScheduleModel;
import com.neusoft.course.service.ScheduleService;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ScheduleController {
    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping("/user/schedule")
    public List<ScheduleModel> getSchedules() {
        return scheduleService.getSchedulesById();
    }

    @PostMapping("/user/sign")
    public void SignIn(@Param("date") String date, @Param("userId") String userId) {
        scheduleService.SignIn(date, userId);
    }
}
