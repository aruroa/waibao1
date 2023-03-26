package com.neusoft.course.service;

import com.neusoft.course.mapper.CommentMapper;
import com.neusoft.course.mapper.dao.CommentModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentMapper commentMapper;

    public CommentService(CommentMapper commentMapper) {
        this.commentMapper = commentMapper;
    }

    public int addComment(CommentModel comment){
        if (comment == null){
            throw new IllegalArgumentException("参数不能为空");
        }
        return commentMapper.insertComment(comment);
    }

    public List<CommentModel> getCommentByPostId(Long postId){
        return commentMapper.selectCommentByPostId(postId);
    }


}
