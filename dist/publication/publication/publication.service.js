"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const publication_entity_1 = require("../publication.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PublicationService = class PublicationService {
    constructor(publicationRepository) {
        this.publicationRepository = publicationRepository;
    }
    findAll() {
        return this.publicationRepository.find();
    }
    save(publication) {
        return this.publicationRepository.save(publication);
    }
    findById(id) {
        return this.publicationRepository.findOne(id);
    }
    async delete(id) {
        const objeto = await this.publicationRepository.findOne(id);
        return this.publicationRepository.remove(objeto);
    }
};
PublicationService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(publication_entity_1.PublicationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PublicationService);
exports.PublicationService = PublicationService;
//# sourceMappingURL=publication.service.js.map