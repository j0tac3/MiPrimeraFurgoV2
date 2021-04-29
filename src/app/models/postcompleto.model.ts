import { PostModel } from './post.model';
import { EtiquetaModel } from './etiqueta.model';
import { SeccionModel } from './seccion.model';

export class PostComplete{
    public postDetalle: PostModel;
    public etiquetas: EtiquetaModel[];
    public secciones: SeccionModel[];

    public constructor(){}
}