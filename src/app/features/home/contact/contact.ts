import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './contact.html'
})
export class ContactComponent {
  private readonly dataService = inject(DataService);

  protected readonly contact = this.dataService.contact;
}
