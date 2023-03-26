package com.neusoft.course.mapper;

import com.neusoft.course.mapper.dao.DiscussPostModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "postMapper")
public interface PostMapper {
    int insertDiscussPost(DiscussPostModel post);

    List<DiscussPostModel> selectAllDiscussPost();

    DiscussPostModel selectDiscussPost(Long postId);

    void updateCommentCount(Long postId);
}
