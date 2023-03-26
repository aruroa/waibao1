package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.CommentModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "commentMapper")
public interface CommentMapper {
    int insertComment(CommentModel comment);

    List<CommentModel> selectCommentByPostId(Long postId);

}
