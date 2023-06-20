import {UniteAdministrativeCriteria} from './UniteAdministrativeCriteria.model';
import {TypePrestationCriteria} from './TypePrestationCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PrestationCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;
     public dureeEnMiniute: number;
     public dureeEnMiniuteMin: number;
     public dureeEnMiniuteMax: number;
  public typePrestation: TypePrestationCriteria ;
  public typePrestations: Array<TypePrestationCriteria> ;
  public uniteAdministrative: UniteAdministrativeCriteria ;
  public uniteAdministratives: Array<UniteAdministrativeCriteria> ;

}
