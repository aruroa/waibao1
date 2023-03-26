package com.neusoft.course.controller;
import com.neusoft.course.mapper.dao.ComplaintModel;
import com.neusoft.course.service.ComplaintService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @PostMapping("/user/complain/apply")
    public int addComplaint(@RequestBody ComplaintModel complaintModel) {
      System.out.println(complaintModel);
        return complaintService.addComplaint(complaintModel);
    }

    @GetMapping("/user/complain/{state}/{userId}")
    public List<ComplaintModel> getComplaint(@PathVariable("state") Long state,@PathVariable("userId") Long userId) {
        return complaintService.getComplaint(state,userId);
    }

  @GetMapping("/users/complainCount/{state}/{userId}")
  public Integer countComplaint(@PathVariable("state") Long state,@PathVariable("userId") Long userId) {
    Integer complaintCount = complaintService.countComplaint(state,userId);
    System.out.println("controller,state:"+state+complaintCount);
    return complaintCount;
  }
  @GetMapping("/user/complain/countUser/{userId}")
  public Integer countUser(@PathVariable("userId") Long userId) {
    Integer complaintCount = complaintService.countUser(userId);
    return complaintCount;
  }

  @GetMapping("/user/complain/accept/{id}/{userId}")
  public ResponseEntity changeAccept(@PathVariable("id") Long id,@PathVariable("userId") Long userId) {
    if (complaintService.changeAccept(id,userId) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/complain/done/{id}")
  public ResponseEntity changeDone(@PathVariable("id") Long id) {
    if (complaintService.changeDone(id) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/complain/confirm/{id}")
  public ResponseEntity changeConfirm(@PathVariable("id") Long id) {
    if (complaintService.changeConfirm(id) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/complain/readd/{id}")
  public ResponseEntity changeReadd(@PathVariable("id") Long id) {
    if (complaintService.changeReadd(id) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/complain/getState/{userId}")
  public int getState(@PathVariable("userId") Long userId) {
    return complaintService.getState(userId);
  }

  @GetMapping("/user/complain/detail/{userId}")
  public ComplaintModel getComplaint(@PathVariable("userId") Long userId) {
    return complaintService.getComplaintDetail(userId);
  }
}
