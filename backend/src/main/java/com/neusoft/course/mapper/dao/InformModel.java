package com.neusoft.course.mapper.dao;
import java.sql.Date;
import java.sql.Timestamp;
import java.io.Serializable;
public class InformModel {
  private Long id;

  private String title;

  private String content;

  private Timestamp fromTime;

  private Timestamp toTime;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Timestamp getFromTime() {
    return fromTime;
  }

  public void setFromTime(Timestamp fromTime) {
    this.fromTime = fromTime;
  }

  public Timestamp getToTime() {
    return toTime;
  }

  public void setToTime(Timestamp toTime) {
    this.toTime = toTime;
  }

}
