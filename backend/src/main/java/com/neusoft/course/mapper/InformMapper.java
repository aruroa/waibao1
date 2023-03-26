package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.InformModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "informMapper")
public interface InformMapper {
    int insertInform(InformModel inform);

    List<InformModel> selectInform();
}
