import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { SemesterRegistrationService } from "./semesterRegistration.service";

const createSemesterRegistration = catchAsync(async(req: Request, res: Response) => {
    const result = await SemesterRegistrationService.createSemesterRegistrationIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Semester Registration is created successfully",
        data: result
    })
})

const getAllSemesterRegistration = catchAsync(async(req: Request, res: Response) => {
    const result = await SemesterRegistrationService.getAllSemesterRegistrationFromDB(req.query)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All semester registrations are retrieved successfully",
        data: result
    })
})

const getSingleSemesterRegistration = catchAsync(async(req: Request, res: Response) => {
    const {id} = req.params
    const result = await SemesterRegistrationService.getSingleSemesterRegistrationFromDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single semester registrations are retrieved successfully",
        data: result
    })
})

const updateSemesterRegistration = catchAsync(async(req: Request, res: Response) => {
    const {id} = req.params
    const result = await SemesterRegistrationService.updateSemesterRegistrationIntoDB(id, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Semester registrations updated successfully",
        data: result
    })
})

export const SemesterRegistrationController = {
    createSemesterRegistration,
    getAllSemesterRegistration,
    getSingleSemesterRegistration,
    updateSemesterRegistration
}