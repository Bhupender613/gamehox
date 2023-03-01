import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { isPublicRoute } from '../auth/roles/roles.decorator';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { diskStorage } from 'multer';
import { extname, parse } from 'path';
import { readFileSync } from 'fs';
import { ObjectId } from 'mongoose';
import * as Papa from 'papaparse';
import { fileURLToPath } from 'url';
import { CsvFieldType, GetCustomerType } from './types';
import { CUSTOMER_CSV } from '../constant';
import { randomNumnberForCsv } from '../utils/common';


@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    ) {}

 // @isPublicRoute()

}
