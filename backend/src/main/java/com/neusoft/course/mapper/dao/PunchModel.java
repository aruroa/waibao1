package com.neusoft.course.mapper.dao;
import java.io.Serializable;
import java.util.Date;

public class PunchModel {
  private Long id;

  private Long userId;

  private Date date;

  private Long building1;

  private Long building2;

  private Long building3;

  private Long building4;

  private Long building5;

  private Long lobby;

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

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public Long getBuilding1() {
    return building1;
  }

  public void setBuilding1(Long building1) {
    this.building1 = building1;
  }

  public Long getBuilding2() {
    return building2;
  }

  public void setBuilding2(Long building2) {
    this.building2 = building2;
  }

  public Long getBuilding3() {
    return building3;
  }

  public void setBuilding3(Long building3) {
    this.building3 = building3;
  }

  public Long getBuilding4() {
    return building4;
  }

  public void setBuilding4(Long building4) {
    this.building4 = building4;
  }

  public Long getBuilding5() {
    return building5;
  }

  public void setBuilding5(Long building5) {
    this.building5 = building5;
  }

  public Long getLobby() {
    return lobby;
  }

  public void setLobby(Long lobby) {
    this.lobby = lobby;
  }


}
