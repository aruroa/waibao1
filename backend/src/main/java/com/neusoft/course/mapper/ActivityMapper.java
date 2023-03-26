package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.ActivityModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "activityMapper")
public interface ActivityMapper {
    int insertActivityApply(ActivityModel activity);

    List<ActivityModel> selectAllActivities();

  ActivityModel selectActivity(Long activityId);
}
