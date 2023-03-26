-- fix
INSERT INTO user_access."fix" (id, user_id, accept_id, order_time , room, content, state, report)
VALUES (1, 1001, 3001, '2001-05-23 10:00:00.000','A001','水管开裂', 3,'维修完成，问题是天冷水管冻裂，保温棉老化');
INSERT INTO user_access."fix" (id, user_id, accept_id, order_time , room, content, state)
VALUES (2, 1001, 3001, '2001-05-23 10:00:00.000','A001','烟雾报警器坏',2);
INSERT INTO user_access."fix" (id, user_id, accept_id, order_time , room, content, state)
VALUES (3, 1001, 3001, '2001-05-23 10:00:00.000','A001','水管堵塞', 1);
INSERT INTO user_access."fix" (id, user_id, accept_id, order_time , room, content, state)
VALUES (4, 1001, 3001, '2001-05-23 10:00:00.000','A001','电力不稳', 0);
