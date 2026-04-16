import { ResolveFn } from "@angular/router";
import { Mission } from "../interfaces/mission.interface.js";
import { inject } from "@angular/core";
import { MissionsService } from "../services/missions.service.js";

export const missionResolver: ResolveFn<Mission | undefined> = (route) => {
    const missionService = inject(MissionsService)

    const idParam = route.paramMap.get('id')
    const missionId = idParam ? parseInt(idParam,10) : 0

    return missionService.getMissionById(missionId)
}