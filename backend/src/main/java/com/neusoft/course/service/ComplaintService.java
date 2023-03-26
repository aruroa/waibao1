package com.neusoft.course.service;

import com.neusoft.course.mapper.ComplaintMapper;
import com.neusoft.course.mapper.dao.ComplaintModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {

    private final ComplaintMapper complaintMapper;

    public ComplaintService(ComplaintMapper complaintMapper) {
        this.complaintMapper = complaintMapper;
    }

    public int addComplaint(ComplaintModel complaint){
        if (complaint == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return complaintMapper.insertComplaint(complaint);
    }
  public Integer countUser(Long userId) {
    return complaintMapper.countUser(userId);
  }

  public Integer countComplaint(Long state,Long userId) {
    return complaintMapper.count(state,userId);
  }

  public List<ComplaintModel> getComplaint(Long state,Long userId){
        return complaintMapper.selectComplaint(state,userId);
    }

  public int changeAccept(Long id, Long userId) {
      return complaintMapper.updateStateAccept(id,userId);
  }
  public int changeDone(Long id) {
    return complaintMapper.updateStateDone(id);
  }
  public int changeConfirm(Long id) {
    return complaintMapper.updateStateConfirm(id);
  }
  public int changeReadd(Long id) {
    return complaintMapper.updateStateReadd(id);
  }
  public ComplaintModel getComplaintDetail(Long UserId){
    return complaintMapper.selectComplaintDetail(UserId);
  }

  public int getState(Long userId) {
    return this.complaintMapper.getState(userId);
  }
}
