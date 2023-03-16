import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
  Patch,
  Param,
  Body,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin, AdminDocument } from "./entities/admin.entity";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UpdateUserDto } from "../users/dto/update-user.dto";
import { AuthService } from "../auth/auth.service";
import { Tag, TagDocument } from "./entities/tag.entity";

import { responseGetObj, responseObj } from "../helper";
import { GetUserType } from "../users/types";
import { generatePassword, matchPassword } from "../utils/encryption";
import {
  Game_ALREADY_EXIST,
  PASSWORD_NOT_MATCH,
  SUCCESS,
  Tag_ALREADY_EXIST,
} from "../constant";
import { GetGameType, GetSettingType, GetTagType } from "./types";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { CreateGameDto } from "./dto/create-game.dto";
import { Game, GameDocument } from "./entities/game.entity";
import { UpdateGameDto } from "./dto/update-game.dto";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { Setting, SettingDocument } from "./entities/setting.entity";
import { UpdateSettingDto } from "./dto/update-setting.dto";
@Injectable()
export class AdminService {
  /**
   * constructor
   */
  public constructor(
    @InjectModel(Admin.name)
    @Inject(forwardRef(() => AuthService))
    private adminModel: Model<AdminDocument>,
    @InjectModel(Tag.name)
    private tagModel: Model<TagDocument>,
    @InjectModel(Game.name)
    private gameModel: Model<GameDocument>,
    @InjectModel(Setting.name)
    private settingModel: Model<SettingDocument>
  ) {}

  //////Admin Signup service ////
  async signUp(createAdminDto: CreateAdminDto) {
    try {
      const { password } = createAdminDto;
      const hashPassword = await generatePassword(password);
      const adminData = { ...createAdminDto, password: hashPassword };
      const adminSignup = await new this.adminModel(adminData).save();
      return responseObj(HttpStatus.OK, SUCCESS, adminSignup);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  //////Get single admin data ////
  async findone(id: ObjectId) {
    try {
      const singleAdminDetails = await this.adminModel.findOne({ _id: id });
      return responseObj(HttpStatus.OK, SUCCESS, singleAdminDetails);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // update particular Admin user
  async update(id: ObjectId, updateAdminDto: UpdateAdminDto) {
    try {
      const updateAdminData = await this.adminModel.findByIdAndUpdate(
        { _id: id },
        updateAdminDto,
        { new: true }
      );
      return responseObj(HttpStatus.OK, SUCCESS, updateAdminData);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // update Admin Password
  async updatePassword(id: ObjectId, updatePasswordDto: UpdatePasswordDto) {
    try {
      const { password, oldPassword } = updatePasswordDto;
      const singleAdmin = await this.adminModel.findOne({ _id: id });
      const isMatch = await matchPassword(oldPassword, singleAdmin?.password);
      if (isMatch) {
        const hashPassword = await generatePassword(password);
        const updateAdminPassword = await this.adminModel.findByIdAndUpdate(
          { _id: id },
          { password: hashPassword },
          { new: true }
        );
        return responseObj(HttpStatus.OK, SUCCESS, updateAdminPassword);
      } else {
        throw new NotFoundException({
          status: HttpStatus.BAD_REQUEST,
          message: PASSWORD_NOT_MATCH,
        });
      }
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // Add Tag in admin
  async addTag(createTagDto: CreateTagDto) {
    try {
      const { title } = createTagDto;
      const duplicateTag = await this.tagModel
        .find({
          title,
          isDeleted: false,
        })
        .exec();
      if (duplicateTag?.length) {
        throw new NotFoundException({
          status: HttpStatus.BAD_REQUEST,
          message: Tag_ALREADY_EXIST,
        });
      } else {
        const addTag = await new this.tagModel(createTagDto).save();
        return responseObj(HttpStatus.OK, SUCCESS, addTag);
      }
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // Get Tags in admin
  async getTag(getTagType: GetTagType) {
    try {
      const { skip, limit, search } = getTagType;
      const allTagLength = await this.tagModel
        .find({
          isDeleted: false,
        })
        .select("_id");
      let options = {};
      if (search) {
        options = {
          $or: [{ title: new RegExp(search.toString(), "i") }],
          isDeleted: false,
        };
      } else {
        options = { isDeleted: false };
      }
      const allTags = await this.tagModel
        .find(options)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      return responseGetObj(
        HttpStatus.OK,
        SUCCESS,
        allTags,
        allTagLength.length
      );
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  //////Get single Tags data ////
  async getSingleTag(id: ObjectId) {
    try {
      const singleTagDetails = await this.tagModel.findOne({ _id: id });
      return responseObj(HttpStatus.OK, SUCCESS, singleTagDetails);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // Update Tags in the Admin
  async tagUpdate(id: ObjectId, updateTagDto: UpdateTagDto) {
    try {
      const { title } = updateTagDto;
      const duplicateTag = await this.tagModel
        .find({
          title,
          isDeleted: false,
        })
        .exec();

      if (duplicateTag?.length) {
        throw new NotFoundException({
          status: HttpStatus.BAD_REQUEST,
          message: Tag_ALREADY_EXIST,
        });
      } else {
        const updateTagData = await this.tagModel.findByIdAndUpdate(
          { _id: id },
          updateTagDto,
          { new: true }
        );
        return responseObj(HttpStatus.OK, SUCCESS, updateTagData);
      }
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  //Delete Tag in admin
  async deleteTag(id: ObjectId, isDeleted: boolean) {
    try {
      const deleteTagData = await this.tagModel.findByIdAndUpdate(
        { _id: id },
        { isDeleted },
        { new: true }
      );
      return responseObj(HttpStatus.OK, SUCCESS, deleteTagData);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  ///////////////////////////////////////// Games services //////////////////////////////

  // Add Tag in admin
  async addGame(createGameDto: CreateGameDto) {
    try {
      const { title } = createGameDto;
      const duplicateGame = await this.gameModel
        .find({
          title,
          isDeleted: false,
        })
        .exec();
      if (duplicateGame?.length) {
        throw new NotFoundException({
          status: HttpStatus.BAD_REQUEST,
          message: Game_ALREADY_EXIST,
        });
      } else {
        const addGame = await new this.gameModel(createGameDto).save();
        return responseObj(HttpStatus.OK, SUCCESS, addGame);
      }
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // Get Tags in admin
  async getGame(getGameType: GetGameType) {
    try {
      const { skip, limit, search } = getGameType;
      const allGameLength = await this.gameModel
        .find({
          isDeleted: false,
        })
        .select("_id");
      let options = {};
      if (search) {
        options = {
          $or: [{ title: new RegExp(search.toString(), "i") }],
          isDeleted: false,
        };
      } else {
        options = { isDeleted: false };
      }
      const allGames = await this.gameModel
        .find(options)
        .populate([{ path: "tag", strictPopulate: false }])
        .populate([{ path: "primaryTag", strictPopulate: false }])
        .populate([{ path: "SecondaryTag", strictPopulate: false }])
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      return responseGetObj(
        HttpStatus.OK,
        SUCCESS,
        allGames,
        allGameLength.length
      );
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  //////Get single Tags data ////
  async getSingleGame(id: ObjectId) {
    try {
      const singleGameDetails = await this.gameModel.findOne({ _id: id });
      return responseObj(HttpStatus.OK, SUCCESS, singleGameDetails);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // Update Tags in the Admin
  async gameUpdate(id: ObjectId, updateGameDto: UpdateGameDto) {
    try {
      const { title } = updateGameDto;
      const duplicateGame = await this.gameModel
        .find({
          title,
          isDeleted: false,
        })
        .exec();

      if (duplicateGame?.length) {
        throw new NotFoundException({
          status: HttpStatus.BAD_REQUEST,
          message: Game_ALREADY_EXIST,
        });
      } else {
        const updateGameData = await this.gameModel.findByIdAndUpdate(
          { _id: id },
          updateGameDto,
          { new: true }
        );
        return responseObj(HttpStatus.OK, SUCCESS, updateGameData);
      }
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  //Delete Tag in admin
  async deleteGame(id: ObjectId, isDeleted: boolean) {
    try {
      const deleteGameData = await this.gameModel.findByIdAndUpdate(
        { _id: id },
        { isDeleted },
        { new: true }
      );
      return responseObj(HttpStatus.OK, SUCCESS, deleteGameData);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  ///////////////////////////////////////// Theme setting services //////////////////////////////

  // Add Tag in admin
  async addSetting(createSettingDto: CreateSettingDto) {
    try {
      const addSetting = await new this.settingModel(createSettingDto).save();
      return responseObj(HttpStatus.OK, SUCCESS, addSetting);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // Update Setting in the Admin
  async settingUpdate(id: ObjectId, updateSettingDto: UpdateSettingDto) {
    try {
      const updateSettingData = await this.settingModel.findByIdAndUpdate(
        { _id: id },
        updateSettingDto,
        { new: true }
      );
      return responseObj(HttpStatus.OK, SUCCESS, updateSettingData);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // Get Settings in admin
  async getSetting(getSettingType: GetSettingType) {
    try {
      const { skip, limit } = getSettingType;
      const allSettingLength = await this.settingModel
        .find({
          isDeleted: false,
        })
        .select("_id");
      const allSettings = await this.settingModel
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      return responseGetObj(
        HttpStatus.OK,
        SUCCESS,
        allSettings,
        allSettingLength.length
      );
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
