import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Equipe } from 'app/model/equipe.model';
import { EquipeService } from 'app/service/equipe/equipe.service';
import { EquipeFormComponent } from 'app/shared/equipe-form/equipe-form.component';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('equipeModal') equipeModal: EquipeFormComponent;

  equipes: Equipe[] = [];

  constructor(
    private equipeService: EquipeService
  ) { }

  ngAfterViewInit() {
    $('#equipeModal').on('hide.bs.modal', () => {
      this.getEquipes();
    });
    this.getEquipes();
  }

  getEquipes() {
    this.equipeService.getAll().subscribe(
      success => {
        this.equipes = success;
      }
    );
  }

  showCreateUpdateModal(equipe?: Equipe): void {
    this.equipeModal.initModal(equipe);
  }

}
