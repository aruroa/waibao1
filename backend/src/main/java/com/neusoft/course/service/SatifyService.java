package com.neusoft.course.service;

import com.neusoft.course.mapper.SatifyMapper;
import com.neusoft.course.mapper.dao.SatifyModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SatifyService {

    private final SatifyMapper satifyMapper;

    public SatifyService(SatifyMapper satifyMapper) {
        this.satifyMapper = satifyMapper;
    }

    public int addSatify(SatifyModel satify){
        if (satify == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return satifyMapper.insertSatify(satify);
    }

  public Integer countSatify(Long term) {
    return satifyMapper.count(term);
  }

  public List<SatifyModel> getAllSatify(Long term){
        return satifyMapper.selectAllSatify(term);
    }
}
