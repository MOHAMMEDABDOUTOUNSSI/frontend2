import {CentreHospitalierUniversitaireCriteria} from './CentreHospitalierUniversitaireCriteria.model';
import {UniteAdministrativeCriteria} from './UniteAdministrativeCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class HopitalCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;
    public description: string;
    public descriptionLike: string;
  public centreHospitalierUniversitaire: CentreHospitalierUniversitaireCriteria ;
  public centreHospitalierUniversitaires: Array<CentreHospitalierUniversitaireCriteria> ;
      public uniteAdministratives: Array<UniteAdministrativeCriteria>;

}
