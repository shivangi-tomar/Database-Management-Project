

const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Assuming you have a Student model defined
const studentController = require('../controllers/studentController');

// POST /students – Create a New Student
router.post('/', async (req, res) => {
    const { name, age, email } = req.body;
    const student = new Student({ name, age, email });
    try {
        const savedStudent = await student.save();
        res.status(201).json({ student_id: savedStudent._id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET /students – Get All Students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /students/:id – Get a Student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT /students/:id – Update Student Information
router.put('/:id', async (req, res) => {
    const { name, age, email } = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { name, age, email }, { new: true });
        if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /students/:id – Delete a Student
router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;