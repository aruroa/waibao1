package com.neusoft.course.service;

import com.neusoft.course.mapper.FixMapper;
import com.neusoft.course.mapper.dao.FixModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FixService {

    private final FixMapper fixMapper;

    public FixService(FixMapper fixMapper) {
        this.fixMapper = fixMapper;
    }

    public int addFix(FixModel fix){
        if (fix == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return fixMapper.insertFix(fix);
    }

  public Integer countFix(Long state,Long userId) {
    return fixMapper.count(state,userId);
  }
  public Integer countUser(Long userId) {
    return fixMapper.countUser(userId);
  }

  public List<FixModel> getFix(Long state,Long userId){
        return fixMapper.selectFix(state,userId);
    }

  public int changeAccept(FixModel fix) {
      return fixMapper.updateStateAccept(fix);
  }
  public int changeDone(Long id) {
    return fixMapper.updateStateDone(id);
  }
  public int changeConfirm(Long id) {
    return fixMapper.updateStateConfirm(id);
  }
  public int changeReport(FixModel fix) {
    return fixMapper.updateStateReport(fix);
  }
  public int changeEnd(Long id) {
    return fixMapper.updateStateEnd(id);
  }
  public int changeReadd(Long id) {
    return fixMapper.updateStateReadd(id);
  }
  public FixModel getFixDetail(Long UserId){
    return fixMapper.selectFixDetail(UserId);
  }

  public int getState(Long userId) {
    return this.fixMapper.getState(userId);
  }
}
