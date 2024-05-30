import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: 'First Name is required' })
    .max(20, { message: 'Name cannot be more than 20 characters' })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: 'First name must be capitalized',
      },
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .nonempty({ message: 'Last Name is required' })
    .max(20, { message: 'Name cannot be more than 20 characters' }),
});

// Define the Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty({ message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .nonempty({ message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .nonempty({ message: 'Father Contact No is required' }),
  motherName: z.string().nonempty({ message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .nonempty({ message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .nonempty({ message: 'Mother Contact No is required' }),
});

// Define the Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty({ message: 'Local guardian Name is required' }),
  occupation: z
    .string()
    .nonempty({ message: 'Local guardian occupation is required' }),
  contactNo: z
    .string()
    .nonempty({ message: 'Local guardian Contact no is required' }),
  address: z
    .string()
    .nonempty({ message: 'Local guardian Address is required' }),
});

// Define the Zod schema for Student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .nonempty({ message: 'Password is required' })
      .max(20, { message: 'Password cannot be more than 20 characters' }),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other'], {
        message: 'Gender is not valid',
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .nonempty({ message: 'Email is required' })
        .email({ message: 'Invalid email address' }),
      contactNo: z.string().nonempty({ message: 'Contact number is required' }),
      emergencyContactNo: z
        .string()
        .nonempty({ message: 'Emergency contact number is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .nonempty({ message: 'Present address is required' }),
      permanentAddress: z
        .string()
        .nonempty({ message: 'Permanent address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
      admissionSemester: z.string(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
