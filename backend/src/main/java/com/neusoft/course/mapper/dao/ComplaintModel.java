package com.neusoft.course.mapper.dao;
import java.sql.Date;
import java.sql.Timestamp;
import java.io.Serializable;
public class ComplaintModel {
  private Long id;
  private Long userId;
  private Long acceptId;
  private String content;
  private Long state;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public Long getAcceptId() {
    return acceptId;
  }

  public void setAcceptId(Long acceptId) {
    this.acceptId = acceptId;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Long getState() {
    return state;
  }

  public void setState(Long state) {
    this.state = state;
  }
}
