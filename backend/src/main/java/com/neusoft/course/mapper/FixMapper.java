package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.FixModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "fixMapper")
public interface FixMapper {
  int insertFix(FixModel fix);

  Integer count(Long state, Long userId);

  Integer countUser( Long userId);

  List<FixModel> selectFix(Long state, Long userId);

  int updateStateAccept(FixModel fix);

  int updateStateDone(Long id);

  int updateStateConfirm(Long id);

  int updateStateReport(FixModel fix);

  int updateStateEnd(Long id);

  int updateStateReadd(Long id);

  FixModel selectFixDetail(Long userId);

  int getState(Long userId);
}
