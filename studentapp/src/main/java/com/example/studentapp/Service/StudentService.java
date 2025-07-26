package com.example.studentapp.Service;

import com.example.studentapp.Model.Student;
import com.example.studentapp.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService{
    @Autowired
    private  StudentRepo studentRepo;
    public List<Student> getAllStudent(){
        return studentRepo.findAll();

    }

    public  void addStudent(Student student){
        studentRepo.save(student);

    }

    public void getStudent(int rollNo){
        studentRepo.findById(rollNo);
    }

    public  void   deletStudent(int rollNo){
        studentRepo.deleteById(rollNo);
    }

    public void updateStudent(int rollNo,Student updateStudent){
        Optional<Student> exist=studentRepo.findById(rollNo);
        if(exist.isPresent()){
            Student student=exist.get();
            student.setName(updateStudent.getName());
            student.setAddress(updateStudent.getAddress());
            student.setStd(updateStudent.getStd());
        }
    }
}
