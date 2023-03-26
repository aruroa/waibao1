package com.neusoft.course.controller;
import com.neusoft.course.mapper.dao.FixModel;
import com.neusoft.course.service.FixService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FixController {

    private final FixService fixService;

    public FixController(FixService fixService) {
        this.fixService = fixService;
    }

    @PostMapping("/user/fix/apply")
    public int addFix(@RequestBody FixModel fixModel) {
        return fixService.addFix(fixModel);
    }

    @GetMapping("/user/fix/{state}/{userId}")
    public List<FixModel> getFix(@PathVariable("state") Long state,@PathVariable("userId") Long userId) {
        return fixService.getFix(state,userId);
    }

  @GetMapping("/users/fixCount/{state}/{userId}")
  public Integer countFix(@PathVariable("state") Long state,@PathVariable("userId") Long userId) {
    Integer fixCount = fixService.countFix(state,userId);
    return fixCount;
  }

  @GetMapping("/users/fix/countUser/{userId}")
  public Integer countUser(@PathVariable("userId") Long userId) {
    Integer fixCount = fixService.countUser(userId);
    return fixCount;
  }

  @PostMapping("/user/fix/accept")
  public ResponseEntity changeAccept(@RequestBody FixModel fixModel) {
    if (fixService.changeAccept(fixModel) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/fix/done/{id}")
  public ResponseEntity changeDone(@PathVariable("id") Long id) {
    if (fixService.changeDone(id) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @GetMapping("/user/fix/confirm/{id}")
  public ResponseEntity changeConfirm(@PathVariable("id") Long id) {
    System.out.println("confirm");
    System.out.println(id);
    if (fixService.changeConfirm(id) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @PostMapping("/user/fix/report/")
  public ResponseEntity changeReport(@RequestBody FixModel fixModel) {
    if (fixService.changeReport(fixModel) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/fix/end/{id}")
  public ResponseEntity changeEnd(@PathVariable("id") Long id) {
    if (fixService.changeEnd(id) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/fix/readd/{id}")
  public ResponseEntity changeReadd(@PathVariable("id") Long id) {
    if (fixService.changeReadd(id) == 1) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  @GetMapping("/user/fix/getState/{userId}")
  public int getState(@PathVariable("userId") Long userId) {
    return fixService.getState(userId);
  }

  @GetMapping("/user/fix/detail/{userId}")
  public FixModel getActivity(@PathVariable("userId") Long userId) {
    return fixService.getFixDetail(userId);

  }
}
