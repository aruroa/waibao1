package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.SatifyModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "satify")
public interface SatifyMapper {
    int insertSatify(SatifyModel satify);
     Integer count(Long term);

    List<SatifyModel> selectAllSatify(Long term);

}
