import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
@Controller("image")
export class UploadController {
    @Post("upload")
    @UseInterceptors(FileInterceptor("photo", { dest: "./uploads" }))
    uploadSingle(@UploadedFile() file): void {
        console.log(file);
    }
}