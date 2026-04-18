import { Component } from '@angular/core';
import { MissionsService } from '../../services/missions.service.js';
import { Mission } from '../../interfaces/mission.interface.js';
import { RouterLink } from "@angular/router";
import { HighlightDirective } from '../../directives/highlight.directive.js';
import { StatusStyleDirective } from '../../directives/status-style.directive.js';

@Component({
  selector: 'app-missions',
  imports: [RouterLink, HighlightDirective, StatusStyleDirective],
  templateUrl: './missions.html',
  styleUrl: './missions.css',
})
export class Missions {
  missions: Mission[] = []

  constructor(private missionService: MissionsService){
    this.missions = this.missionService.getAllMissions()
  }
}
