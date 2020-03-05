import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {MatTreeModule} from '@angular/material/tree';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './Components/templates/start/start.component';
import { ContentComponent } from './Components/templates/content/content.component';
import { ThemeComponent } from './Components/templates/theme/theme.component';
import { InitAppComponent } from './Components/pages/common/init-app/init-app.component';
import { ControlsComponent } from './Components/templates/controls/controls.component';
import { ScheduleComponent } from './Components/pages/basics/schedule/schedule.component';
import { TopicPageComponent } from './Components/pages/basics/topic-page/topic-page.component';
import { SpaComponent } from './Components/pages/basics/spa/spa.component';
import { SpaModelsComponent } from './Components/pages/basics/spa-models/spa-models.component';
import { TypescriptComponent } from './Components/pages/basics/typescript/typescript.component';
import { DataTypesComponent } from './Components/pages/basics/data-types/data-types.component';
import { DeclarationsComponent } from './Components/pages/basics/declarations/declarations.component';
import { ArrowfuncComponent } from './Components/pages/basics/arrowfunc/arrowfunc.component';
import { ClassComponent } from './Components/pages/basics/class/class.component';
import { LevelaccessComponent } from './Components/pages/basics/levelaccess/levelaccess.component';
import { LiteralsComponent } from './Components/pages/basics/literals/literals.component';
import { DataTypesExampleAComponent } from './Components/pages/basics/data-types-example-a/data-types-example-a.component';
import { DataTypesExampleBComponent } from './Components/pages/basics/data-types-example-b/data-types-example-b.component';
import { ModalComponent } from './Components/templates/modal/modal.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap';
import { AngularComponent } from './Components/pages/basics/angular/angular.component';
import { StructurePageTopicComponent } from './Components/pages/structure/structure-page-topic/structure-page-topic.component';
import { GeneralFolderComponent } from './Components/pages/structure/general-folder/general-folder.component';
import { SrcFolderComponent } from './Components/pages/structure/src-folder/src-folder.component';
import { AppFolderComponent } from './Components/pages/structure/app-folder/app-folder.component';
import { SettingsPageTopicComponent } from './Components/pages/settings/settings-page-topic/settings-page-topic.component';
import { DepedencyPageTopicComponent } from './Components/pages/dependency/depedency-page-topic/depedency-page-topic.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    bash: () => import('highlight.js/lib/languages/bash'),
    javascript: () => import('highlight.js/lib/languages/javascript'),
    powershell: () => import('highlight.js/lib/languages/powershell')
  };
}

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ContentComponent,
    ThemeComponent,
    InitAppComponent,
    ControlsComponent,
    ScheduleComponent,
    TopicPageComponent,
    SpaComponent,
    SpaModelsComponent,
    TypescriptComponent,
    DataTypesComponent,
    DeclarationsComponent,
    ArrowfuncComponent,
    ClassComponent,
    LevelaccessComponent,
    LiteralsComponent,
    DataTypesExampleAComponent,
    DataTypesExampleBComponent,
    ModalComponent,
    ModulesComponent,
    ModulesModelComponent,
    LazyComponent,
    ComponentsComponent,
    DirectivesComponent,
    PipesComponent,
    ModelsComponent,
    SharedModuleComponent,
    ClicommandsComponent,
    ClicommandsrunComponent,
    ClicommandsscaffoldingComponent,
    ClicommandsbuildComponent,
    AngularComponent,
    StructurePageTopicComponent,
    GeneralFolderComponent,
    SrcFolderComponent,
    AppFolderComponent,
    SettingsPageTopicComponent,
    DepedencyPageTopicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    MatTreeModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
