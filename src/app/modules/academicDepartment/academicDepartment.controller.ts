import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async(req, res) => {
    const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic department created successfully',
        data: result
    })
})

const getAllAcademicDepartments = catchAsync(async(req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All academic departments are retrieved successfully',
        data: result
    })
})

const getSingleAcademicDepartment = catchAsync(async(req, res) => {
    const {departmentId} = req.params
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(departmentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Single academic department retrieve successfully',
        data: result
    })
})

const updateAcademicDepartment = catchAsync(async(req, res) => {
    const {departmentId} = req.params
    const result = await AcademicDepartmentServices.updateAcademicDepartment(departmentId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Updating academic department done successfully',
        data: result
    })
})

export const AcademicDepartmentControllers = {
    createAcademicDepartment,
    getAllAcademicDepartments,
    getSingleAcademicDepartment,
    updateAcademicDepartment,
}

