import { PublicationEntity } from '../publication.entity';
import { PublicationService } from './publication.service';
export declare class PublicationController {
    private readonly publicationService;
    constructor(publicationService: PublicationService);
    findAll(): Promise<PublicationEntity[]>;
    create(publication: PublicationEntity): Promise<PublicationEntity>;
    findOne(id: number): Promise<PublicationEntity>;
    update(id: number, user: PublicationEntity): Promise<PublicationEntity>;
    remove(id: number): Promise<PublicationEntity>;
}
