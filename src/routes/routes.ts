import { HomeComponent } from "src/app/components/home/home.component";

export interface Route{
    path: string,
    component: any
}


export const APP_ROUTES: Route[] = [
    {
        path: '',
    component: HomeComponent
    },
    {
        path: 'search/:game-search',
    component: HomeComponent
    }
]