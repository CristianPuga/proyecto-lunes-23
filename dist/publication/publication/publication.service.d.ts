import { PublicationEntity } from '../publication.entity';
import { Repository } from 'typeorm';
export declare class PublicationService {
    private readonly publicationRepository;
    constructor(publicationRepository: Repository<PublicationEntity>);
    findAll(): Promise<PublicationEntity[]>;
    save(publication: PublicationEntity): Promise<PublicationEntity>;
    findById(id: number): Promise<PublicationEntity>;
    delete(id: number): Promise<PublicationEntity>;
}
