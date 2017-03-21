import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ModalDirective } from 'ng2-bootstrap/modal';


@Component({
  selector: 'app-create-challenge',
  inputs: ['interest_id'],
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() interest_id: string


  challenge = {interest_id: ""};

  public show():void {
    this.childModal.show();
  }
 
  public hide():void {
    this.childModal.hide();
  }

  constructor(private challengeService : ChallengeService) { }

  ngOnInit() {

  }

  addChallenge(){
  	this.challenge.interest_id = this.interest_id;
	this.challengeService.createChallenge(this.challenge).subscribe(chall => {
	  this.childModal.hide();
	})

  }



}


