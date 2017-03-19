import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ModalDirective } from 'ng2-bootstrap/modal';


@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
 
  challenge = {};

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
	this.challengeService.createChallenge(this.challenge).subscribe(chall => {
	  console.log("heheheheheehehhehe")
	})
  }




}


