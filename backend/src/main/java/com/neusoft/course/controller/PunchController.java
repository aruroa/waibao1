package com.neusoft.course.controller;
import com.neusoft.course.mapper.dao.PunchModel;
import com.neusoft.course.service.PunchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
public class PunchController {

    private final PunchService punchService;

    public PunchController(PunchService punchService) {
        this.punchService = punchService;
    }

    @PostMapping("/user/punch/apply/{userId}")
    public Integer addPunch(@PathVariable("userId") Long userId) {
      long toDayTime=System.currentTimeMillis();
      Date tDT=new Date(toDayTime);
      SimpleDateFormat date=new SimpleDateFormat();
        return punchService.addPunch(tDT,userId);
    }


  @GetMapping("/user/punchCount/{userId}")
  public Integer countPunch(@PathVariable("userId") Long userId) {
    long toDayTime=System.currentTimeMillis();
    Date tDT=new Date(toDayTime);
    SimpleDateFormat date=new SimpleDateFormat();
    Integer punchCount = punchService.countPunch(tDT,userId);
    return punchCount;
  }


  @GetMapping("/user/punch/punchUp/{userId}/{building}")
  public ResponseEntity punchUp(@PathVariable("userId") Long userId,@PathVariable("building") String buliding) {
    long toDayTime=System.currentTimeMillis();
    Date tDT=new Date(toDayTime);
    SimpleDateFormat date=new SimpleDateFormat();
      if (punchService.punchUp(tDT,userId,buliding) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }


  @GetMapping("/user/punch/{userId}")
  public PunchModel getPunch(@PathVariable("userId") Long userId) {
    long toDayTime=System.currentTimeMillis();
    Date tDT=new Date(toDayTime);
    SimpleDateFormat date=new SimpleDateFormat();
      return punchService.getPunch(tDT,userId);
  }
}
