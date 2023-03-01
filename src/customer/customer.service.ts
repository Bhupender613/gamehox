import {
  ConsoleLogger,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";

import { Customer, CustomerDocument } from "./entities/customer.entity";

const { convertArrayToCSV } = require("convert-array-to-csv");

@Injectable()
export class CustomerService {
  public constructor(
    @InjectModel(Customer.name)
    private customerModel: Model<CustomerDocument>
  ) {}

}
