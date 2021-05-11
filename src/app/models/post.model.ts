import { EtiquetaModel } from "./etiqueta.model";

export class PostModel {
    id: number;
    titulo: string;
    subtitulo?: string;
    image_url?: string;
    user_id: number;
    created_at?: Date;
    updated_at?: Date;
    timeFrom?: string;
    etiquetas: EtiquetaModel[];
    headerImage?: File;
    comentarios?: [];
    nComents?: number;
    views?: number;

    constructor() {
        this.titulo = "";
    }
}