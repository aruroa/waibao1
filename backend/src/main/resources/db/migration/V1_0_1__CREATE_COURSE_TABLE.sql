create table user_access.user
(
  id           bigserial    not null,
  username         varchar(20)  ,
  password     varchar(100) not null,
  name         text         not null,
  gender       int          not null default 0,
  is_admin     int  not null,
  birthday     timestamp(3),
  phone_num    varchar(15),
  home_address text,
  constraint user_pk PRIMARY KEY (id),
  constraint username_unique unique (username)
);

create table user_access.post
(
  id           bigserial    not null,
  user_id      bigserial    not null,
  title      text    not null,
  content      text         not null,
  type        int  not null default 0,
  create_time  timestamp not null ,
  comment_count int  not null default 0,
  constraint post_pk PRIMARY KEY (id)
);

create table user_access.schedule
(
  id                bigserial    not null,
  schedule_date     date         not null,
  server_morning    bigserial    not null,
  sign_morning      int          not null default 0,
  server_noon       bigserial    not null,
  sign_noon         int          not null default 0,
  server_afternoon  bigserial    not null,
  sign_afternoon    int          not null default 0,
  fix               bigserial    not null,
  sign_fix          int          not null default 0,
  clean1            bigserial    not null,
  sign_clean1       int          not null default 0,
  clean2            bigserial    not null,
  sign_clean2       int          not null default 0,
  clean3            bigserial    not null,
  sign_clean3       int          not null default 0,
  constraint schedule_pk PRIMARY KEY (id)
);

create table user_access.comment
(
  id           bigserial    not null,
  post_id      bigserial    not null,
  user_id      bigserial    not null,
  content      text         not null,
  comment_time timestamp    not null ,
  constraint comment_pk PRIMARY KEY (id)
);

create table user_access.chat
(
  id           bigserial    not null,
  user_id      bigserial    not null,
  from_id      bigserial    not null,
  to_id        bigserial    not null,
  content      text         not null,
  chat_time  timestamp not null ,
  constraint chat_pk PRIMARY KEY (id)
);

create table user_access.inform
(
  id           bigserial    not null,
  title        text         not null,
  content      text         not null,
  from_time    timestamp    not null,
  to_time      timestamp    not null,
  constraint inform_pk PRIMARY KEY (id)
);

create table user_access.complaint
(
  id           bigserial    not null,
  user_id      bigserial    not null,
  accept_id    bigserial    not null,
  content      text         not null,
  state        int          not null default 0,
  constraint complaint_pk PRIMARY KEY (id)
);

create table user_access.satify
(
  id           bigserial    not null,
  user_id      bigserial    not null,
  room         varchar(20)  not null,
  phone_num    varchar(15),
  question1    int          not null default 0,
  question2    int          not null default 0,
  question3    int          not null default 0,
  question4    int          not null default 0,
  question5    int          not null default 0,
  term         int          not null,
  constraint satify_pk PRIMARY KEY (id)
);

create table user_access.fix
(
  id           bigserial    not null,
  user_id      bigserial    not null,
  accept_id    bigserial,
  order_time timestamp    not null ,
  room         varchar(20)  not null,
  content      text         not null,
  state        int          not null default 0,
  report       text         ,
  constraint fix_pk PRIMARY KEY (id)
);

create table user_access.activity
(
  id           bigserial    not null,
  title      text    not null,
  content      text         not null,
  photo       text         not null,
  from_time timestamp    not null ,
  to_time timestamp    not null ,
  constraint activity_pk PRIMARY KEY (id)
);

create table user_access.appointment
(
  id           bigserial    not null,
  activity_id  bigserial    not null,
  user_id      bigserial    not null,
  room         varchar(20)  not null,
  phone_num    varchar(15),
  constraint appointment_pk PRIMARY KEY (id)
);

create table user_access.punch
(
  id           bigserial    not null,
  user_id      bigserial    not null,
  date         date         not null,
  building1    int         not null default 0,
  building2    int         not null default 0,
  building3    int         not null default 0,
  building4    int         not null default 0,
  building5    int         not null default 0,
  lobby        int         not null default 0,
  constraint punch_pk PRIMARY KEY (id)
);
