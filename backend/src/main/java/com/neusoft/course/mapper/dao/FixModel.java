package com.neusoft.course.mapper.dao;
import java.sql.Date;
import java.sql.Timestamp;
import java.io.Serializable;
public class FixModel {
  private Long id;

  private Long userId;

  private Long acceptId;

  private  Timestamp orderTime;

  private String room;

  private String content;

  private Long state;

  private String report;

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

  public  Timestamp  getOrderTime() {
    return orderTime;
  }

  public void setOrderTime( Timestamp orderTime) {
    this.orderTime = orderTime;
  }

  public String getRoom() {
    return room;
  }

  public void setRoom(String room) {
    this.room = room;
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

  public String getReport() {
    return report;
  }

  public void setReport(String report) {
    this.report = report;
  }

}
