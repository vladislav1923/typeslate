import { Injectable } from '@nestjs/common';
import { DocumentInterface } from '../../interfaces/document.interface';

@Injectable()
export class DocumentsService {

    public getDocuments(): DocumentInterface[] {
        return [];
    }

    public createDocument(): DocumentInterface {
        return {} as DocumentInterface;
    }

    public updateDocument(): DocumentInterface {
        return {} as DocumentInterface;
    }

    public deleteDocument(): DocumentInterface {
        return {} as DocumentInterface;
    }

}
