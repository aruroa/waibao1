package com.neusoft.course.mapper.dao;
import java.sql.Date;
import java.sql.Timestamp;
import java.io.Serializable;
public class ChatModel {
  private Long id;

  private Long userId;

  private Long fromId;

  private Long toId;

  private String content;

  private Timestamp chatTime;

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

  public Long getFromId() {
    return fromId;
  }

  public void setFromId(Long fromId) {
    this.fromId = fromId;
  }

  public Long getToId() {
    return toId;
  }

  public void setToId(Long toId) {
    this.toId = toId;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Timestamp getChatTime() {
    return chatTime;
  }

  public void setChatTime(Timestamp chatTime) {
    this.chatTime = chatTime;
  }

}
