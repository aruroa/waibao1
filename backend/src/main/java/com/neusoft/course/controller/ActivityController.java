package com.neusoft.course.controller;

import com.neusoft.course.mapper.dao.ActivityModel;
import com.neusoft.course.service.ActivityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ActivityController {
  /**
   * java11安装包在哪
   *
   */
    private final ActivityService activityService;

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @PostMapping("/user/activity/apply")
    public int addActivityApply(@RequestBody ActivityModel activityModel) {
        System.out.println(activityModel.getTitle());
        return activityService.addActivityApply(activityModel);
    }

    @GetMapping("/user/activityquery")
    public List<ActivityModel> getAllActivities() {
        return activityService.getAllActivities();
    }

    @GetMapping("/user/activity/detail/{activityId}")
    public ActivityModel getActivity(@PathVariable("activityId") Long activityId) {
        return activityService.getActivity(activityId);
    }
}
