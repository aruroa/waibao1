package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.ComplaintModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "complaintMapper")
public interface ComplaintMapper {
  int insertComplaint(ComplaintModel complaint);

  Integer count(Long state, Long userId);

  List<ComplaintModel> selectComplaint(Long state, Long userId);

  Integer countUser( Long userId);

  int updateStateAccept(Long id, Long userId);

  int updateStateDone(Long id);

  int updateStateConfirm(Long id);

  int updateStateReadd(Long id);

  ComplaintModel selectComplaintDetail(Long userId);

  int getState(Long userId);
}
