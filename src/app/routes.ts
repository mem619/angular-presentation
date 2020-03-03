import { Routes } from '@angular/router';
import { InitAppComponent } from './Components/pages/common/init-app/init-app.component';
import { ScheduleComponent } from './Components/pages/basics/schedule/schedule.component';
import { TopicPageComponent } from './Components/pages/basics/topic-page/topic-page.component';
import { SpaComponent } from './Components/pages/basics/spa/spa.component';
import { SpaModelsComponent } from './Components/pages/basics/spa-models/spa-models.component';
import { TypescriptComponent } from './Components/pages/basics/typescript/typescript.component';
import { DataTypesComponent } from './Components/pages/basics/data-types/data-types.component';
import { DataTypesExampleAComponent } from './Components/pages/basics/data-types-example-a/data-types-example-a.component';
import { DataTypesExampleBComponent } from './Components/pages/basics/data-types-example-b/data-types-example-b.component';
import { DeclarationsComponent } from './Components/pages/basics/declarations/declarations.component';
import { ArrowfuncComponent } from './Components/pages/basics/arrowfunc/arrowfunc.component';
import { ClassComponent } from './Components/pages/basics/class/class.component';
import { LevelaccessComponent } from './Components/pages/basics/levelaccess/levelaccess.component';
import { LiteralsComponent } from './Components/pages/basics/literals/literals.component';

export default [
  {
    path: '',
    component: InitAppComponent
  },
  {
    path: '0',
    component: InitAppComponent
  },
  {
    path: '1',
    component: ScheduleComponent
  },
  {
    path: '2',
    component: TopicPageComponent
  },
  {
    path: '3',
    component: SpaComponent
  },
  {
    path: '4',
    component: SpaModelsComponent
  },
  {
    path: '5',
    component: TypescriptComponent
  },
  {
    path: '6',
    component: DataTypesComponent
  },
  {
    path: '7',
    component: DataTypesExampleAComponent
  },
  {
    path: '8',
    component: DataTypesExampleBComponent
  },
  {
    path: '9',
    component: DeclarationsComponent
  },
  {
    path: '10',
    component: ArrowfuncComponent
  },
  {
    path: '11',
    component: ClassComponent
  },
  {
    path: '12',
    component: LevelaccessComponent
  },
  {
    path: '13',
    component: LiteralsComponent
  }
] as Routes;
