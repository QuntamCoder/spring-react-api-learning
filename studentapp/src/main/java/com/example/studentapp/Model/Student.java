package com.example.studentapp.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int rollNo;
    @JsonProperty("name")
    String name;
    @JsonProperty("std")
    String std;
   @JsonProperty("address")
    String address;

    public Student() {
    }

    public Student(int rollNo, String name, String std, String address) {
        this.rollNo = rollNo;
        this.name = name;
        this.std = std;
        this.address = address;
    }

    public int getRollNo() {
        return rollNo;
    }

    public Student setRollNo(int rollNo) {
        this.rollNo = rollNo;
        return this;
    }

    public String getName() {
        return name;
    }

    public Student setName(String name) {
        this.name = name;
        return this;
    }

    public String getStd() {
        return std;
    }

    public Student setStd(String std) {
        this.std = std;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public Student setAddress(String address) {
        this.address = address;
        return this;
    }
}
