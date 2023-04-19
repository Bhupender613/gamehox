import {
  ConsoleLogger,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Game, GameDocument } from "src/admin/entities/game.entity";
import { Setting, SettingDocument } from "src/admin/entities/setting.entity";
import { Tag, TagDocument } from "src/admin/entities/tag.entity";
import { Taghome, TaghomeDocument } from "src/admin/entities/taghome";
import { SUCCESS } from "src/constant";
import { responseGetObj, responseObj } from "src/helper";

import { Customer, CustomerDocument } from "./entities/customer.entity";
import { AllTagType, GameByTag, GetAllGameType } from "./types";

const { convertArrayToCSV } = require("convert-array-to-csv");

@Injectable()
export class CustomerService {
  public constructor(
    @InjectModel(Tag.name)
    private tagModel: Model<TagDocument>,
    @InjectModel(Game.name)
    private gameModel: Model<GameDocument>,
    @InjectModel(Setting.name)
    private settingModel: Model<SettingDocument>,
    @InjectModel(Taghome.name)
    private hometagModel: Model<TaghomeDocument>
  ) {}

  // Get games in admin
  async getGame(getGameType: GetAllGameType) {
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
        // .populate([{ path: "tag", strictPopulate: false }])
        // .populate([{ path: "primaryTag", strictPopulate: false }])
        // .populate([{ path: "SecondaryTag", strictPopulate: false }])
        .select("title primaryTag")
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

  // Get games by tag
  async getGameByTag(gameByTag: GameByTag) {
    try {
      const { skip, limit, id } = gameByTag;
      const allGames = await this.gameModel
        .find({ tag: { $in: [id] } })
        .select("title primaryTag")
        //.populate([{ path: "tag", strictPopulate: false }])
        // .populate([{ path: "primaryTag", strictPopulate: false }])
        //.populate([{ path: "SecondaryTag", strictPopulate: false }])
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      return responseGetObj(HttpStatus.OK, SUCCESS, allGames, 10);
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

  ////// get all the tags ///////
  async getTag(allTagType: AllTagType) {
    try {
      const { skip, limit, search } = allTagType;
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
        .select("title addToMenu")
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

  ///// get settings///
  async getSetting() {
    try {
      const allSettings = await this.settingModel
        .find()
        .sort({ createdAt: -1 });

      return responseGetObj(HttpStatus.OK, SUCCESS, allSettings, 1);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  ///// get home tags///
  async getHomeTags() {
    try {
      const allHometags = await this.hometagModel
        .find()
        .sort({ createdAt: -1 });

      return responseGetObj(HttpStatus.OK, SUCCESS, allHometags, 1);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
