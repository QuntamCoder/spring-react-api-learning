package com.example.studentapp.Contoller;

import com.example.studentapp.Model.Student;
import com.example.studentapp.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:5173")
public class StudentController {
    @Autowired
    private StudentService studentService;
    @GetMapping("/getAllStudents")
    List<Student>  getAllStudent(){
        return  studentService.getAllStudent();

    }
    
    @GetMapping("/getStudent/{rollNo}")
    public  void getStudent(@PathVariable int rollNo){
        studentService.getStudent(rollNo);
    }

    @PostMapping("/addStudent")
    void addStudent(@RequestBody Student student){
        studentService.addStudent(student);
    }

    @DeleteMapping("/deleteStudent/{RollNo}")
    void deleteStudent(@PathVariable int RollNo){
        studentService.deletStudent(RollNo);
    }
    @PutMapping("updateStudent/{rollNo}")
    void  updateStudent(@PathVariable int rollNo, @RequestBody Student student){
        studentService.updateStudent(rollNo,student);

    }
}
