create table student (
    student_id INT NOT NULL AUTO_INCREMENT,
    student_number VARCHAR(6) UNIQUE COMMENT '학번 (예: 241001)',
    name VARCHAR(100) NOT NULL COMMENT '이름',
    birth_date DATE COMMENT '생년월일',
    gender ENUM('M', 'F') COMMENT '성별',
    email VARCHAR(255) COMMENT '이메일',
    address VARCHAR(255) COMMENT '주소',
    department_id INT COMMENT '학과번호',
    PRIMARY KEY (student_id),
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);
INSERT INTO student (student_number, name, birth_date, gender, email, address, department_id)
VALUES ('071001', '김현석', '1987-04-21', 'M', 'kim1@gmail.com', '서울시 마포구', 1);



CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (department_id)
) ENGINE=InnoDB;


insert into department (department_name)
values ('컴퓨터 공학');


commit;

select * from student;