package com.neusoft.course.controller;

import com.neusoft.course.mapper.dao.SatifyModel;
import com.neusoft.course.service.SatifyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class SatifyController {

    private final SatifyService satifyService;

    public SatifyController(SatifyService satifyService) {
        this.satifyService = satifyService;
    }

    @PostMapping("/user/satify/fill")
    public int addSatify(@RequestBody SatifyModel satifyModel) {
      System.out.println(satifyModel);
        return satifyService.addSatify(satifyModel);
    }

    @GetMapping("/user/satify/{term}")
    public List<SatifyModel> getAllSatify(@PathVariable("term") Long term) {
        return satifyService.getAllSatify(term);
    }

  @GetMapping("/users/satifyCount/{term}")
  public Map<String, Integer> countSatify(@PathVariable("term") Long term) {
    Integer satifyCount = satifyService.countSatify(term);
    return Map.of("count", satifyCount);
  }
}
