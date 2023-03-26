package com.neusoft.course.service;

import com.neusoft.course.mapper.PunchMapper;
import com.neusoft.course.mapper.dao.PunchModel;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class PunchService {

    private final PunchMapper punchMapper;

    public PunchService(PunchMapper punchMapper) {
        this.punchMapper = punchMapper;
    }


  public Integer countPunch(Date tDT, Long userId) {return punchMapper.countPunch(tDT,userId);
  }

  public Integer addPunch(Date tDT, Long userId) {return punchMapper.insertPunch(tDT,userId);

  }

  public Integer punchUp(Date tDT, Long userId, String building) {
    return punchMapper.updatePunchUp(tDT,userId,building);
  }

  public PunchModel getPunch(Date tDT, Long userId) {return punchMapper.getPunch(tDT,userId);
  }

}
