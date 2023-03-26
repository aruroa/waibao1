package com.neusoft.course.service;

import com.neusoft.course.mapper.AppointmentMapper;
import com.neusoft.course.mapper.dao.AppointmentModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentMapper appointmentMapper;

    public AppointmentService(AppointmentMapper appointmentMapper) {
        this.appointmentMapper = appointmentMapper;
    }

    public int addAppointment(AppointmentModel appointment){
        if (appointment == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return appointmentMapper.insertAppointment(appointment);
    }

     public Integer countAppointment() {
    return appointmentMapper.count();
      }

    public List<AppointmentModel> getAllAppointment(){
        return appointmentMapper.selectAllAppointment();
    }
}
