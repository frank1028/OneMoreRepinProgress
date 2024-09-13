import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'altcurl',
    loadChildren: () => import('./pages/altcurl/altcurl.module').then( m => m.AltcurlPageModule)
  },
  {
    path: 'altcurlhist',
    loadChildren: () => import('./pages/altcurl/altcurlhist/altcurlhist.module').then( m => m.AltcurlhistPageModule)
  },
  { path: 'exerciselist',
    loadChildren: () => import( './pages/exerciselist/exerciselist.module').then( m => m.ExerciselistPageModule)

    },

 { path: 'backlist',
    loadChildren: () => import('./pages/exerciselist/backlist/backlist.module').then( m => m.BacklistPageModule)
  },
  { path: 'bicepslist',
    loadChildren: () => import('./pages/exerciselist/bicepslist/bicepslist.module').then( m => m.BicepslistPageModule)
  },
  { path: 'calflist',
    loadChildren: () => import('./pages/exerciselist/calflist/calflist.module').then( m => m.CalflistPageModule)
  },
  { path: 'chestlist',
    loadChildren: () => import('./pages/exerciselist/chestlist/chestlist.module').then( m => m.ChestlistPageModule)
  },
  { path: 'corelist',
    loadChildren: () => import('./pages/exerciselist/corelist/corelist.module').then( m => m.CorelistPageModule)
  },
  { path: 'forearmlist',
    loadChildren: () => import('./pages/exerciselist/forearmlist/forearmlist.module').then( m => m.ForearmlistPageModule)
  },
  { path: 'pyramidlist',
    loadChildren: () => import('./pages/exerciselist/pyramidlist/pyramidlist.module').then( m => m.PyramidlistPageModule)
  },
  { path: 'shoulderlist',
    loadChildren: () => import('./pages/exerciselist/shoulderlist/shoulderlist.module').then( m => m.ShoulderlistPageModule)
  },
  { path: 'thighlist',
    loadChildren: () => import('./pages/exerciselist/thighlist/thighlist.module').then( m => m.ThighlistPageModule)
  },
  { path: 'tricepslist',
    loadChildren: () => import('./pages/exerciselist/tricepslist/tricepslist.module').then( m => m.TricepslistPageModule)
  },
  {
    path: 'altfrontraise',
    loadChildren: () => import('./pages/altfrontraise/altfrontraise.module').then( m => m.AltfrontraisePageModule)
  },
  {
    path: 'altfrontraisehist',
    loadChildren: () => import('./pages/altfrontraise/altfrontraisehist/altfrontraisehist.module').then( m => m.AltfrontraisehistPageModule)
  },
  {
    path: 'althammercurl',
    loadChildren: () => import('./pages/althammercurl/althammercurl.module').then( m => m.AlthammercurlPageModule)
  },
  {
    path: 'althammercurlhist',
    loadChildren: () => import('./pages/althammercurl/althammercurlhist/althammercurlhist.module').then( m => m.AlthammercurlhistPageModule)
  },
  {
    path: 'bbcurl',
    loadChildren: () => import('./pages/bbcurl/bbcurl.module').then( m => m.BbcurlPageModule)
  },

  {
    path: 'benchpress',
    loadChildren: () => import('./pages/benchpress/benchpress.module').then( m => m.BenchpressPageModule)
  },


  {
    path: 'bentarmpullover',
    loadChildren: () => import('./pages/bentarmpullover/bentarmpullover.module').then( m => m.BentarmpulloverPageModule)
  },

  {
    path: 'bentoverrow',
    loadChildren: () => import('./pages/bentoverrow/bentoverrow.module').then( m => m.BentoverrowPageModule)
  },

  {
    path: 'bolatraise',
    loadChildren: () => import('./pages/bolatraise/bolatraise.module').then( m => m.BolatraisePageModule)
  },

  {
    path: 'closebbcurl',
    loadChildren: () => import('./pages/closebbcurl/closebbcurl.module').then( m => m.ClosebbcurlPageModule)
  },

  {
    path: 'closegripbp',
    loadChildren: () => import('./pages/closegripbp/closegripbp.module').then( m => m.ClosegripbpPageModule)
  },


  {
    path: 'dbbench',
    loadChildren: () => import('./pages/dbbench/dbbench.module').then( m => m.DbbenchPageModule)
  },

  {
    path: 'dbtricepsext',
    loadChildren: () => import('./pages/dbtricepsext/dbtricepsext.module').then( m => m.DbtricepsextPageModule)
  },

  {
    path: 'dbuprightrow',
    loadChildren: () => import('./pages/dbuprightrow/dbuprightrow.module').then( m => m.DbuprightrowPageModule)
  },

  {
    path: 'declinepress',
    loadChildren: () => import('./pages/declinepress/declinepress.module').then( m => m.DeclinepressPageModule)
  },


  {
    path: 'fly',
    loadChildren: () => import('./pages/fly/fly.module').then( m => m.FlyPageModule)
  },

  {
    path: 'inclinebench',
    loadChildren: () => import('./pages/inclinebench/inclinebench.module').then( m => m.InclinebenchPageModule)
  },

  {
    path: 'inclinecurl',
    loadChildren: () => import('./pages/inclinecurl/inclinecurl.module').then( m => m.InclinecurlPageModule)
  },

  {
    path: 'inclinedbpress',
    loadChildren: () => import('./pages/inclinedbpress/inclinedbpress.module').then( m => m.InclinedbpressPageModule)
  },

  {
    path: 'inclinefly',
    loadChildren: () => import('./pages/inclinefly/inclinefly.module').then( m => m.InclineflyPageModule)
  },
  {
    path: 'kctricepsext',
    loadChildren: () => import('./pages/kctricepsext/kctricepsext.module').then( m => m.KctricepsextPageModule)
  },

  {
    path: 'latraise',
    loadChildren: () => import('./pages/latraise/latraise.module').then( m => m.LatraisePageModule)
  },
  {
    path: 'legcurl',
    loadChildren: () => import('./pages/legcurl/legcurl.module').then( m => m.LegcurlPageModule)
  },
  {
    path: 'legext',
    loadChildren: () => import('./pages/legext/legext.module').then( m => m.LegextPageModule)
  },
  {
    path: 'legpress',
    loadChildren: () => import('./pages/legpress/legpress.module').then( m => m.LegpressPageModule)
  },
  {
    path: 'legpresscalf',
    loadChildren: () => import('./pages/legpresscalf/legpresscalf.module').then( m => m.LegpresscalfPageModule)
  },
  {
    path: 'machinepullover',
    loadChildren: () => import('./pages/machinepullover/machinepullover.module').then( m => m.MachinepulloverPageModule)
  },
  {
    path: 'ohpress',
    loadChildren: () => import('./pages/ohpress/ohpress.module').then( m => m.OhpressPageModule)
  },
  {
    path: 'ohwristcurl',
    loadChildren: () => import('./pages/ohwristcurl/ohwristcurl.module').then( m => m.OhwristcurlPageModule)
  },
  {
    path: 'onearmohext',
    loadChildren: () => import('./pages/onearmohext/onearmohext.module').then( m => m.OnearmohextPageModule)
  },
  {
    path: 'onearmrow',
    loadChildren: () => import('./pages/onearmrow/onearmrow.module').then( m => m.OnearmrowPageModule)
  },
  {
    path: 'overheadext',
    loadChildren: () => import('./pages/overheadext/overheadext.module').then( m => m.OverheadextPageModule)
  },
  {
    path: 'pecdeck',
    loadChildren: () => import('./pages/pecdeck/pecdeck.module').then( m => m.PecdeckPageModule)
  },
  {
    path: 'preachercurl',
    loadChildren: () => import('./pages/preachercurl/preachercurl.module').then( m => m.PreachercurlPageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'reversedbcurl',
    loadChildren: () => import('./pages/reversedbcurl/reversedbcurl.module').then( m => m.ReversedbcurlPageModule)
  },
  {
    path: 'ropepushdown',
    loadChildren: () => import('./pages/ropepushdown/ropepushdown.module').then( m => m.RopepushdownPageModule)
  },
  {
    path: 'seatedbbcalf',
    loadChildren: () => import('./pages/seatedbbcalf/seatedbbcalf.module').then( m => m.SeatedbbcalfPageModule)
  },
  {
    path: 'seatedcalfraise',
    loadChildren: () => import('./pages/seatedcalfraise/seatedcalfraise.module').then( m => m.SeatedcalfraisePageModule)
  },
  {
    path: 'seateddbpress',
    loadChildren: () => import('./pages/seateddbpress/seateddbpress.module').then( m => m.SeateddbpressPageModule)
  },
  {
    path: 'seatedlegcurl',
    loadChildren: () => import('./pages/seatedlegcurl/seatedlegcurl.module').then( m => m.SeatedlegcurlPageModule)
  },
  {
    path: 'seatedrow',
    loadChildren: () => import('./pages/seatedrow/seatedrow.module').then( m => m.SeatedrowPageModule)
  },

  {
    path: 'uhpulldown',
    loadChildren: () => import('./pages/uhpulldown/uhpulldown.module').then( m => m.UhpulldownPageModule)
  },
  {
    path: 'uhwristcurl',
    loadChildren: () => import('./pages/uhwristcurl/uhwristcurl.module').then( m => m.UhwristcurlPageModule)
  },
  {
    path: 'vbarpulldown',
    loadChildren: () => import('./pages/vbarpulldown/vbarpulldown.module').then( m => m.VbarpulldownPageModule)
  },
  {
    path: 'widegripbp',
    loadChildren: () => import('./pages/widegripbp/widegripbp.module').then( m => m.WidegripbpPageModule)
  },
  {
    path: 'widepulldown',
    loadChildren: () => import('./pages/widepulldown/widepulldown.module').then( m => m.WidepulldownPageModule)
  },

  {
    path: 'tricepspushdown',
    loadChildren: () => import('./pages/tricepspushdown/tricepspushdown.module').then( m => m.TricepspushdownPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
