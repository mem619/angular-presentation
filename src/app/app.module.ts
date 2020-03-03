import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ClicommandsbuildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
