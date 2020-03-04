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
import { ModulesComponent } from './Components/pages/basics/modules/modules.component';
import { ModulesModelComponent } from './Components/pages/basics/modules-model/modules-model.component';
import { LazyComponent } from './Components/pages/basics/lazy/lazy.component';
import { ComponentsComponent } from './Components/pages/basics/components/components.component';
import { DirectivesComponent } from './Components/pages/basics/directives/directives.component';
import { PipesComponent } from './Components/pages/basics/pipes/pipes.component';
import { ModelsComponent } from './Components/pages/basics/models/models.component';
import { SharedModuleComponent } from './Components/pages/basics/shared-module/shared-module.component';
import { ClicommandsComponent } from './Components/pages/basics/clicommands/clicommands.component';
import { ClicommandsrunComponent } from './Components/pages/basics/clicommandsrun/clicommandsrun.component';
import { ClicommandsscaffoldingComponent } from './Components/pages/basics/clicommandsscaffolding/clicommandsscaffolding.component';
import { ClicommandsbuildComponent } from './Components/pages/basics/clicommandsbuild/clicommandsbuild.component';
import { AngularComponent } from './Components/pages/basics/angular/angular.component';
import { StructurePageTopicComponent } from './Components/pages/structure/structure-page-topic/structure-page-topic.component';
import { GeneralFolderComponent } from './Components/pages/structure/general-folder/general-folder.component';
import { SrcFolderComponent } from './Components/pages/structure/src-folder/src-folder.component';
import { AppFolderComponent } from './Components/pages/structure/app-folder/app-folder.component';

export default [
  {
    path: '',
    redirectTo: '0',
    pathMatch: 'full'
  },
  {
    path: '0',
    component: InitAppComponent,
    data: {animation: 'InitAppComponent'}
  },
  {
    path: '1',
    component: ScheduleComponent,
    data: {animation: 'ScheduleComponent'}
  },
  {
    path: '2',
    component: TopicPageComponent,
    data: {animation: 'TopicPageComponent'}
  },
  {
    path: '3',
    component: AngularComponent,
    data: {animation: 'AngularComponent'}
  },
  {
    path: '4',
    component: SpaComponent,
    data: {animation: 'SpaComponent'}
  },
  {
    path: '5',
    component: SpaModelsComponent,
    data: {animation: 'SpaModelsComponent'}
  },
  {
    path: '6',
    component: TypescriptComponent,
    data: {animation: 'TypescriptComponent'}
  },
  {
    path: '7',
    component: DataTypesComponent,
    data: {animation: 'DataTypesComponent'}
  },
  {
    path: '8',
    component: DataTypesExampleAComponent,
    data: {animation: 'DataTypesExampleAComponent'}
  },
  {
    path: '9',
    component: DataTypesExampleBComponent,
    data: {animation: 'DataTypesExampleBComponent'}
  },
  {
    path: '10',
    component: DeclarationsComponent,
    data: {animation: 'DeclarationsComponent'}
  },
  {
    path: '11',
    component: ArrowfuncComponent,
    data: {animation: 'ArrowfuncComponent'}
  },
  {
    path: '12',
    component: ClassComponent,
    data: {animation: 'ClassComponent'}
  },
  {
    path: '13',
    component: LevelaccessComponent,
    data: {animation: 'LevelaccessComponent'}
  },
  {
    path: '14',
    component: LiteralsComponent,
    data: {animation: 'LiteralsComponent'}
  },
  {
    path: '15',
    component: ModulesComponent,
    data: {animation: 'ModulesComponent'}
  },
  {
    path: '16',
    component: ModulesModelComponent,
    data: {animation: 'ModulesModelComponent'}
  },
  {
    path: '17',
    component: LazyComponent,
    data: {animation: 'LazyComponentePage'}
  },
  {
    path: '18',
    component: ComponentsComponent,
    data: {animation: 'ComponentsComponent'}
  },
  {
    path: '19',
    component: DirectivesComponent,
    data: {animation: 'DirectivesComponent'}
  },
  {
    path: '20',
    component: PipesComponent,
    data: {animation: 'PipesComponentPage'}
  },
  {
    path: '21',
    component: ModelsComponent,
    data: {animation: 'ModelsComponentage'}
  },
  {
    path: '22',
    component: SharedModuleComponent,
    data: {animation: 'SharedModuleComponent'}
  },
  {
    path: '23',
    component: ClicommandsComponent,
    data: {animation: 'ClicommandsComponent'}
  },
  {
    path: '24',
    component: ClicommandsrunComponent,
    data: {animation: 'ClicommandsrunComponent'}
  },
  {
    path: '25',
    component: ClicommandsscaffoldingComponent,
    data: {animation: 'ClicommandsscaffoldingComponent'}
  },
  {
    path: '26',
    component: ClicommandsbuildComponent,
    data: {animation: 'ClicommandsbuildComponent'}
  },
  {
    path: '27',
    component: StructurePageTopicComponent,
    data: {animation: 'ClicommandsbuildComponent'}
  },
  {
    path: '28',
    component: GeneralFolderComponent,
    data: {animation: 'ClicommandsbuildComponent'}
  },
  {
    path: '29',
    component: SrcFolderComponent,
    data: {animation: 'ClicommandsbuildComponent'}
  },
  {
    path: '30',
    component: AppFolderComponent,
    data: {animation: 'ClicommandsbuildComponent'}
  }
] as Routes;
