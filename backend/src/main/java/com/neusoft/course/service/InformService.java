package com.neusoft.course.service;

import com.neusoft.course.mapper.InformMapper;
import com.neusoft.course.mapper.dao.InformModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformService {

    private final InformMapper informMapper;

    public InformService(InformMapper informMapper) {
        this.informMapper = informMapper;
    }

    public int addInform(InformModel inform){
        if (inform == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return informMapper.insertInform(inform);
    }

    public List<InformModel> getInform(){
        return informMapper.selectInform();
    }
}
