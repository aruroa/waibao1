package com.neusoft.course.mapper.dao;

import java.sql.Date;
import java.sql.Timestamp;
import java.io.Serializable;

public class ScheduleModel {
  private Long id;

  private Date date;

  private Long serverMorning;

  private Long signMorning ;

  private Long serverNoon;

  private Long signNoon;

  private Long serverAfternoon;

  private Long signAfternoon ;

  private Long fix;

  private Long signFix;

  private Long clean1;

  private Long signClean1;

  private Long clean2;

  private Long signClean2;

  private Long clean3;

  private Long signClean3;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public Long getServerMorning() {
    return serverMorning;
  }

  public void setServerMorning(Long serverMorning) {
    this.serverMorning = serverMorning;
  }

  public Long getSignMorning() {
    return signMorning;
  }

  public void setSignMorning(Long signMorning) {
    this.signMorning = signMorning;
  }

  public Long getServerNoon() {
    return serverNoon;
  }

  public void setServerNoon(Long serverNoon) {
    this.serverNoon = serverNoon;
  }

  public Long getSignNoon() {
    return signNoon;
  }

  public void setSignNoon(Long signNoon) {
    this.signNoon = signNoon;
  }

  public Long getServerAfternoon() {
    return serverAfternoon;
  }

  public void setServerAfternoon(Long serverAfternoon) {
    this.serverAfternoon = serverAfternoon;
  }

  public Long getSignAfternoon() {
    return signAfternoon;
  }

  public void setSignAfternoon(Long signAfternoon) {
    this.signAfternoon = signAfternoon;
  }

  public Long getFix() {
    return fix;
  }

  public void setFix(Long fix) {
    this.fix = fix;
  }

  public Long getSignFix() {
    return signFix;
  }

  public void setSignFix(Long signFix) {
    this.signFix = signFix;
  }

  public Long getClean1() {
    return clean1;
  }

  public void setClean1(Long clean1) {
    this.clean1 = clean1;
  }

  public Long getSignClean1() {
    return signClean1;
  }

  public void setSignClean1(Long signClean1) {
    this.signClean1 = signClean1;
  }

  public Long getClean2() {
    return clean2;
  }

  public void setClean2(Long clean2) {
    this.clean2 = clean2;
  }

  public Long getSignClean2() {
    return signClean2;
  }

  public void setSignClean2(Long signClean2) {
    this.signClean2 = signClean2;
  }

  public Long getClean3() {
    return clean3;
  }

  public void setClean3(Long clean3) {
    this.clean3 = clean3;
  }

  public Long getSignClean3() {
    return signClean3;
  }

  public void setSignClean3(Long signClean3) {
    this.signClean3 = signClean3;
  }


}
