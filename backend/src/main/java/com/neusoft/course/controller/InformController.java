package com.neusoft.course.controller;

import com.neusoft.course.mapper.dao.InformModel;
import com.neusoft.course.service.InformService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InformController {

    private final InformService informService;

    public InformController(InformService informService) {
        this.informService = informService;
    }

    @GetMapping("/user/inform")
    public List<InformModel> getAllInform() {
        return informService.getInform();
    }

     @PostMapping("/user/addInform")
    public int addInform(@RequestBody InformModel informModel) {
    System.out.println(informModel.getTitle());
    return informService.addInform(informModel);
  }
}
