package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.AppointmentModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "appointmentMapper")
public interface AppointmentMapper {
    int insertAppointment(AppointmentModel post);

    List<AppointmentModel> selectAllAppointment();
    Integer count();
}
