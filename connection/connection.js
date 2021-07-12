import pkg from 'pg'
import dotenv from 'dotenv'
import { query } from 'express'
dotenv.config()
const {Client}=pkg
const client=new Client({
    host:"localhost",
    database:'postgres',
    user:process.env.USER,
    password:process.env.PASSWORD,
    port:5432,
})


client.connect().then((err,res)=>{
    if(err){
        console.log(err)
    }
    
    
}).catch((e)=>console.log(e))
/*
const query1=`CREATE TABLE online_test_schema.administrator
(
    admin_id serial NOT NULL ,
    a_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    a_address character varying(150) COLLATE pg_catalog."default",
    a_email character varying(320) COLLATE pg_catalog."default",
    a_password  text COLLATE pg_catalog."default",
    CONSTRAINT administrator_pkey PRIMARY KEY (admin_id)
);`
try{
    await client.query(query1)
    console.log("Table Created for administrator")
}catch(e){
    console.log(e)
}
const query2=`CREATE TABLE online_test_schema.administrator_phno
(
    admin_id integer NOT NULL,
    a_phoneno varchar(12) NOT NULL,
    CONSTRAINT administrator_phno_pkey PRIMARY KEY (a_phoneno, admin_id),
    CONSTRAINT administrator_phno_admin_id_fkey FOREIGN KEY (admin_id)
        REFERENCES online_test_schema.administrator (admin_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);`
try{
    await client.query(query2)
    console.log('Table Created for administrator_phno')
}catch(e){
    console.log(e)
}

const query3=`CREATE TABLE online_test_schema.student
(
    student_id serial NOT NULL,
    s_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    s_address character varying(150) COLLATE pg_catalog."default",
    s_email character varying(320) COLLATE pg_catalog."default" NOT NULL,
    s_password  text COLLATE pg_catalog."default" NOT NULL,
    s_dept character varying(40) COLLATE pg_catalog."default",
    s_reg_year integer NOT NULL,
    s_sex character varying(9) COLLATE pg_catalog."default",
    s_birthdate date,
    admin_id integer NOT NULL,
    CONSTRAINT student_pkey PRIMARY KEY (student_id),
    CONSTRAINT student_admin_id_fkey FOREIGN KEY (admin_id)
        REFERENCES online_test_schema.administrator (admin_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
`
try{
    await client.query(query3)
    console.log('Table Created for student')
}catch(e){
    console.log(e)
}
const query4=`CREATE TABLE online_test_schema.student_phno
(
    student_id integer NOT NULL,
    s_phoneno varchar(12) NOT NULL,
    CONSTRAINT student_phno_pkey PRIMARY KEY (student_id, s_phoneno),
    CONSTRAINT student_phno_student_id_fkey FOREIGN KEY (student_id)
        REFERENCES online_test_schema.student (student_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);`
try{
    await client.query(query4)
    console.log("Table Created for student_phno")
}catch(e){
    console.log(e)
}
const query5=`CREATE TABLE online_test_schema.teacher
(
    teacher_id serial NOT NULL ,
    t_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    t_address character varying(150) COLLATE pg_catalog."default",
    t_email character varying(320) COLLATE pg_catalog."default" NOT NULL,
    t_password  text COLLATE pg_catalog."default" NOT NULL,
    t_dept character varying(40) COLLATE pg_catalog."default",
    t_reg_year integer NOT NULL,
    t_sex character varying(9) COLLATE pg_catalog."default",
    t_birthdate date,
    admin_id integer NOT NULL,
    CONSTRAINT teacher_pkey PRIMARY KEY (teacher_id),
    CONSTRAINT teacher_admin_id_fkey FOREIGN KEY (admin_id)
        REFERENCES online_test_schema.administrator (admin_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
`
try{
    await client.query(query5)
    console.log("Table Created for Teacher")
}catch(e){
    console.log(e)
}
const query6=`CREATE TABLE online_test_schema.teacher_phno
(
    teacher_id integer NOT NULL,
    t_phoneno varchar(12) NOT NULL,
    CONSTRAINT teacher_phno_pkey PRIMARY KEY (teacher_id, t_phoneno),
    CONSTRAINT teacher_phno_teacher_id_fkey FOREIGN KEY (teacher_id)
        REFERENCES online_test_schema.teacher (teacher_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);`
try{
    await client.query(query6)
    console.log(' Table Created for teacher_phno')
}catch(e){
    console.log(e)
}
const query7=`CREATE TABLE online_test_schema.module
(
    module_no serial NOT NULL,
    mod_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    mod_type character varying(50) COLLATE pg_catalog."default",
    mod_credit integer NOT NULL,
    mod_dept character varying(50) COLLATE pg_catalog."default",
    admin_id integer NOT NULL,
    CONSTRAINT module_pkey PRIMARY KEY (module_no),
    CONSTRAINT module_admin_id_fkey FOREIGN KEY (admin_id)
        REFERENCES online_test_schema.administrator (admin_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);`
try{
    await client.query(query7)
    console.log('Table Created for module')
}catch(e){
    console.log(e)
}
const query8=`CREATE TABLE online_test_schema.module_pre_requisite
(
    module_no integer NOT NULL,
    pre_requisite character varying(100) NOT NULL COLLATE pg_catalog."default",
    CONSTRAINT module_pre_requisite_pkey PRIMARY KEY (module_no,pre_requisite),
    CONSTRAINT module_pre_requisite_module_no_fkey FOREIGN KEY (module_no)
        REFERENCES online_test_schema.module (module_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);`
try{
    await client.query(query8)
    console.log(' Table created for module_pre_requisite')
}catch(e){
    console.log(e)
}
const query9=`  CREATE TABLE online_test_schema.exam
(
    exam_id serial NOT NULL,
    time_ time without time zone NOT NULL,
    exam_type character varying(50) COLLATE pg_catalog."default",
    no_of_question integer NOT NULL,
    CONSTRAINT exam_pkey PRIMARY KEY (exam_id)
);`
try{
    await client.query(query9)
    console.log('Table created for exam')
}catch(e){
    console.log(e)
}
const query10=`CREATE TABLE online_test_schema.question
(
    question_id serial NOT NULL ,
    question character varying(200) COLLATE pg_catalog."default",
    ans_a character varying(200) COLLATE pg_catalog."default",
    ans_b character varying(200) COLLATE pg_catalog."default",
    ans_c character varying(200) COLLATE pg_catalog."default",
    ans_d character varying(200) COLLATE pg_catalog."default",
    ans_correct character varying(200) COLLATE pg_catalog."default",
    exam_id integer NOT NULL,
    CONSTRAINT question_pkey PRIMARY KEY (question_id),
    CONSTRAINT question_exam_id_fkey FOREIGN KEY (exam_id)
        REFERENCES online_test_schema.exam (exam_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);`
try{
    await client.query(query10)
    console.log('Table created for question')
}catch(e){
    console.log(e)
}
const query11=`CREATE TABLE online_test_schema.result
(
    student_id integer NOT NULL,
    grade character varying(3) COLLATE pg_catalog."default",
    exam_id integer NOT NULL,
    total_marks numeric DEFAULT 0.0,
    CONSTRAINT result_pkey PRIMARY KEY (student_id, exam_id),
    CONSTRAINT result_exam_id_fkey FOREIGN KEY (exam_id)
        REFERENCES online_test_schema.exam (exam_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT result_student_id_fkey FOREIGN KEY (student_id)
        REFERENCES online_test_schema.student (student_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);`
try{
    await client.query(query11)
    console.log('Table created for result')
}catch(e){
    console.log(e)
}
const query12=`CREATE TABLE online_test_schema.ans_sheet
(
    exam_id integer NOT NULL,
    student_id integer NOT NULL,
    ques_id integer NOT NULL,
    student_ans character varying COLLATE pg_catalog."default" NOT NULL,
    ans_cw character varying COLLATE pg_catalog."default" NOT NULL,
    mark_q integer NOT NULL,
    CONSTRAINT ans_sheet_pkey PRIMARY KEY (exam_id, student_id, ques_id),
    CONSTRAINT ans_sheet_exam_id_fkey FOREIGN KEY (exam_id)
        REFERENCES online_test_schema.exam (exam_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT ans_sheet_ques_id_fkey FOREIGN KEY (ques_id)
        REFERENCES online_test_schema.question (question_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT ans_sheet_student_id_fkey FOREIGN KEY (student_id)
        REFERENCES online_test_schema.student (student_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);`
try{
    await client.query(query12)
    console.log('Table created for ans_sheet')
}catch(e){
    console.log(e)
}
const query13=`CREATE TABLE online_test_schema.r_student_module
(
    module_no integer NOT NULL,
    student_id integer NOT NULL,
    CONSTRAINT r_student_module_pkey PRIMARY KEY (module_no, student_id),
    CONSTRAINT r_student_module_module_no_fkey FOREIGN KEY (module_no)
        REFERENCES online_test_schema.module (module_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT r_student_module_student_id_fkey FOREIGN KEY (student_id)
        REFERENCES online_test_schema.student (student_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);`
try{
    await client.query(query13)
    console.log(' Table created for r_student_module')
}catch(e){
    console.log(e)
}
const query14=`CREATE TABLE online_test_schema.r_teacher_module
(
    module_no integer NOT NULL,
    teacher_id integer NOT NULL,
    PRIMARY KEY (module_no, teacher_id),
    FOREIGN KEY (module_no)
        REFERENCES online_test_schema.module (module_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    FOREIGN KEY (teacher_id)
        REFERENCES online_test_schema.teacher (teacher_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
`
try{
    await client.query(query14)
    console.log(' Table Created for r_teacher_module')
}catch(e){
    console.log(e)
}
const query15=`CREATE TABLE online_test_schema.r_exam_module
(
    module_no integer NOT NULL,
    exam_id integer NOT NULL,
    PRIMARY KEY (module_no, exam_id),
    FOREIGN KEY (module_no)
        REFERENCES online_test_schema.module (module_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    FOREIGN KEY (exam_id)
        REFERENCES online_test_schema.exam (exam_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
`
try{
    await client.query(query15)
    console.log(' Table created for r_exam_module')
}catch(e){
    console.log(e)
   
}

const query16=`insert into online_test_schema.administrator values(1,'sam','sion ','b@gmail.com',crypt('raftaar', gen_salt('md5')))`
try{
    await client.query(query16)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query17='insert into  online_test_schema.administrator_phno values(1,9999999999)'
try{
    await client.query(query17)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}

const query18=`insert into online_test_schema.student values(1,'raj','malad','aj@gmail.com',crypt('123',gen_salt('md5')), 'cs' , 2018 , 'male', '02-10-2000',1)`
try{
    await client.query(query18)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query19=`insert into online_test_schema.student_phno values(1,9394995967)`
try{
    await client.query(query19)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query20=`insert into online_test_schema.teacher values(1,'sakshi','malad','sk@gmail.com',crypt('1465',gen_salt('md5')), 'cs' , 2000 , 'girl', '02-1-1980',1)`
try{
    await client.query(query20)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query21=`insert into online_test_schema.teacher_phno values(1,9394955967)`
try{
    await client.query(query21)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query22=`insert into online_test_schema.exam values (1,'07:00:00','mid-term',10)`
try{
    await client.query(query22)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query23=`insert into online_test_schema.module values(1,'surface tension','a',10,'cs',1)`
try{
    await client.query(query23)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query24=`insert into online_test_schema.module_pre_requisite values(1,'knowlege of force')`
try{
    await client.query(query24)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query25=`insert into online_test_schema.question values(1,'a','10','20','30','40','10',1)`
try{
    await client.query(query25)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query26=`insert into online_test_schema.result values(1,'c',1,90)`
try{
    await client.query(query26)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query27=`insert into online_test_schema.ans_sheet values(1,1,1,'20','10',1)`
try{
    await client.query(query27)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query28=`insert into online_test_schema.r_exam_module values(1,1)`
try{
    await client.query(query28)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)
   
}
const query29=`insert into online_test_schema.r_student_module values(1,1)`
try{
    await client.query(query29)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)  
}
const query30=`insert into online_test_schema.r_teacher_module values(1,1)`
try{
    await client.query(query30)
    console.log('Insertion has been done')
}catch(e){
    console.log(e)  
}

const query31=`VACUUM (VERBOSE, ANALYZE)`
try{
    await client.query(query31)
    console.log('Vacuum has been done')
}catch(e){
    console.log(e)  
}
const query32=`REINDEX DATABASE postgres`
try{
    await client.query(query32)
    console.log('Reindexing has been done')
}catch(e){
    console.log(e) 
    client.end()
     
*/

export default client