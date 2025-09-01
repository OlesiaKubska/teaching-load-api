import { Router } from "express";
import {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject
} from "../controllers/subject.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { subjectValidationSchema } from "../validations/subject.validation.js";


const router = Router();

/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: Subjects management
 */

/**
 * @swagger
 * /api/subjects:
 *   get:
 *     summary: Get all subjects
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: List of subjects
 */
router.get("/", getAllSubjects);

/**
 * @swagger
 * /api/subjects/{id}:
 *   get:
 *     summary: Get a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Subject ID
 *     responses:
 *       200:
 *         description: Subject object
 *       404:
 *         description: Subject not found
 */
router.get("/:id", getSubjectById);

/**
 * @swagger
 * /api/subjects:
 *   post:
 *     summary: Create a new subject
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - hours
 *             properties:
 *               name:
 *                 type: string
 *               hours:
 *                 type: number
 *     responses:
 *       201:
 *         description: Subject created
 */
router.post("/", validateRequest(subjectValidationSchema), createSubject);

/**
 * @swagger
 * /api/subjects/{id}:
 *   put:
 *     summary: Update a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Subject ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               hours:
 *                 type: number
 *     responses:
 *       200:
 *         description: Subject updated
 *       404:
 *         description: Subject not found
 */
router.put("/:id", validateRequest(subjectValidationSchema), updateSubject);

/**
 * @swagger
 * /api/subjects/{id}:
 *   delete:
 *     summary: Delete a subject by ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Subject ID
 *     responses:
 *       200:
 *         description: Subject deleted
 *       404:
 *         description: Subject not found
 */
router.delete("/:id", deleteSubject);

export default router;