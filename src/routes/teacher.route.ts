import { Router } from "express";
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
} from "../controllers/teacher.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teacher management
 */

/**
 * @swagger
 * /api/teachers:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: List of teachers
 */
router.get("/", getAllTeachers);

/**
 * @swagger
 * /api/teachers/{id}:
 *   get:
 *     summary: Get a teacher by ID
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Teacher ID
 *     responses:
 *       200:
 *         description: Teacher object
 *       404:
 *         description: Teacher not found
 */
router.get("/:id", getTeacherById);

/**
 * @swagger
 * /api/teachers:
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               middleName:
 *                 type: string
 *               degree:
 *                 type: string
 *               position:
 *                 type: string
 *               experience:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Teacher created
 */
router.post("/", createTeacher);

/**
 * @swagger
 * /api/teachers/{id}:
 *   put:
 *     summary: Update a teacher by ID
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Teacher ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               middleName:
 *                 type: string
 *               degree:
 *                 type: string
 *               position:
 *                 type: string
 *               experience:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Teacher updated
 *       404:
 *         description: Teacher not found
 */
router.put("/:id", updateTeacher);

/**
 * @swagger
 * /api/teachers/{id}:
 *   delete:
 *     summary: Delete a teacher by ID
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Teacher ID
 *     responses:
 *       200:
 *         description: Teacher deleted
 *       404:
 *         description: Teacher not found
 */
router.delete("/:id", deleteTeacher);

export default router;