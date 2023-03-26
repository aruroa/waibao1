package com.neusoft.course.service;

import com.neusoft.course.mapper.ActivityMapper;
import com.neusoft.course.mapper.dao.ActivityModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    private final ActivityMapper activityMapper;

    public ActivityService(ActivityMapper activityMapper) {
        this.activityMapper = activityMapper;
    }

    public int addActivityApply(ActivityModel activity){
        if (activity == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return activityMapper.insertActivityApply(activity);
    }

    public List<ActivityModel> getAllActivities(){
        return activityMapper.selectAllActivities();
    }

    public ActivityModel getActivity(Long activityId){
        return activityMapper.selectActivity(activityId);
    }
}
