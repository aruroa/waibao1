package com.neusoft.course.controller;

import com.neusoft.course.mapper.dao.AppointmentModel;
import com.neusoft.course.service.AppointmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/user/appointment/apply")
    public int addAppointment(@RequestBody AppointmentModel appointmentModel) {

        return appointmentService.addAppointment(appointmentModel);
    }
    @GetMapping("/users/appointmentCount")
  public Map<String, Integer> countAppointment() {
    Integer appointmentCount = appointmentService.countAppointment();
    return Map.of("count", appointmentCount);
  }


  @GetMapping("/user/appointment")
    public List<AppointmentModel> getAllAppointment() {
        return appointmentService.getAllAppointment();
    }

}
