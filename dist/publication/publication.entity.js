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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let PublicationEntity = class PublicationEntity {
    constructor() { }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PublicationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], PublicationEntity.prototype, "titulo", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], PublicationEntity.prototype, "main", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "tipo", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "url", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], PublicationEntity.prototype, "publicado", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], PublicationEntity.prototype, "publico", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "autor", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "ultimo_editor", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "entradilla", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "imagen_portada", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "texto_completo", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PublicationEntity.prototype, "version", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], PublicationEntity.prototype, "fecha_creacion", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], PublicationEntity.prototype, "ultima_fecha_modificacion", void 0);
PublicationEntity = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], PublicationEntity);
exports.PublicationEntity = PublicationEntity;
//# sourceMappingURL=publication.entity.js.map