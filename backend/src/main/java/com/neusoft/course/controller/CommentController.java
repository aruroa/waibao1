package com.neusoft.course.controller;

import com.neusoft.course.mapper.dao.CommentModel;
import com.neusoft.course.service.DiscussPostService;
import com.neusoft.course.service.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {

    private final DiscussPostService discussPostService;
    private final CommentService commentService;



  public CommentController(DiscussPostService discussPostService,CommentService commentService) {
        this.discussPostService = discussPostService;
        this.commentService = commentService;
    }

    @PostMapping("/user/add-comment")
    public int addDiscussPost(@RequestBody CommentModel commentModel) {
         Long postId= commentModel.getPostId();
        discussPostService.addCommentCount(postId);
        return commentService.addComment(commentModel);
    }

  @GetMapping("/user/dashboard/comment/{id}")
    public List<CommentModel> getCommentByPostId(@PathVariable("id") Long postId) {
        return commentService.getCommentByPostId(postId);
    }
}
